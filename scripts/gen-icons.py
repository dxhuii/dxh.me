"""生成 dxh.me 的全套站点图标（纯标准库，无第三方依赖）。

设计：满版对角渐变（indigo-500 -> violet-500 -> fuchsia-500，与 Hero 的
     from-indigo-500 via-violet-500 to-fuchsia-500 呼应）+ 白色几何 "D"：
     左直边带 18 圆角、右侧正圆碗、笔画等宽 62/512，计数器为半径 66 的正圆。

用法：
    python scripts/gen-icons.py            # 输出到 public/
    python scripts/gen-icons.py --out dir  # 输出到指定目录

产物：logo.svg、favicon.ico(16/32/48)、favicon.png(32)、apple-touch-icon.png(180)、
     pwa-192x192.png、pwa-512x512.png、maskable-icon.png(512，内容缩至 82%)
"""

import math
import os
import struct
import sys
import zlib

S = 512.0

# ---- 设计坐标（512 x 512 画布）----------------------------------------------
CX = CY = 256.0
ARC = 128.0
RECT_L, RECT_T, RECT_R, RECT_B = 128.0, 128.0, 256.0, 384.0
CORNER = 18.0
HOLE = 66.0

# 与 tailwind 的 indigo-500 / violet-500 / fuchsia-500 同值
STOPS = ((0.00, (99, 102, 241)), (0.52, (139, 92, 246)), (1.00, (217, 70, 239)))
SHADE_TOP, SHADE_BOTTOM = 1.04, 0.96


def lerp(a, b, t):
    return a + (b - a) * t


def gradient(t):
    t = 0.0 if t < 0.0 else (1.0 if t > 1.0 else t)
    for i in range(len(STOPS) - 1):
        t0, c0 = STOPS[i]
        t1, c1 = STOPS[i + 1]
        if t <= t1:
            k = (t - t0) / (t1 - t0)
            return (lerp(c0[0], c1[0], k), lerp(c0[1], c1[1], k), lerp(c0[2], c1[2], k))
    return STOPS[-1][1]


def sd_round_rect(px, py, l, t, r, b, rad):
    cx, cy = (l + r) * 0.5, (t + b) * 0.5
    hx, hy = (r - l) * 0.5 - rad, (b - t) * 0.5 - rad
    dx = abs(px - cx) - hx
    dy = abs(py - cy) - hy
    ax = dx if dx > 0.0 else 0.0
    ay = dy if dy > 0.0 else 0.0
    m = dx if dx > dy else dy
    return math.sqrt(ax * ax + ay * ay) + (m if m < 0.0 else 0.0) - rad


def render(size, d_scale=1.0):
    """返回 size x size 的 RGBA 字节串。d_scale < 1 时字标整体缩小（maskable 用）。"""
    ss = 8 if size <= 48 else (4 if size <= 256 else 2)
    ms = size * ss
    unit = S / ms
    n = size * size
    acc_c = [0.0] * n
    acc_r = [0.0] * n
    acc_g = [0.0] * n
    acc_b = [0.0] * n

    for my in range(ms):
        y = (my + 0.5) * unit
        base = (my // ss) * size
        shade = SHADE_TOP + (SHADE_BOTTOM - SHADE_TOP) * (y / S)
        for mx in range(ms):
            x = (mx + 0.5) * unit

            cr, cg, cb = gradient((x + y) / (2.0 * S))
            cr *= shade
            cg *= shade
            cb *= shade

            if d_scale == 1.0:
                sx, sy = x, y
            else:
                sx = CX + (x - CX) / d_scale
                sy = CY + (y - CY) / d_scale

            dx = sx - CX
            dy = sy - CY
            r = math.sqrt(dx * dx + dy * dy)

            d_out = r - ARC
            d_rect = sd_round_rect(sx, sy, RECT_L, RECT_T, RECT_R, RECT_B, CORNER)
            if d_rect < d_out:
                d_out = d_rect
            d_hole = -(r - HOLE)
            d = d_out if d_out > d_hole else d_hole

            cov = 0.5 - d / unit
            cov = 0.0 if cov < 0.0 else (1.0 if cov > 1.0 else cov)

            if cov > 0.0:
                cr += (255.0 - cr) * cov
                cg += (255.0 - cg) * cov
                cb += (255.0 - cb) * cov

            i = base + mx // ss
            acc_c[i] += 1.0
            acc_r[i] += cr
            acc_g[i] += cg
            acc_b[i] += cb

    out = bytearray(n * 4)
    for i in range(n):
        if acc_c[i] <= 0.0:
            continue
        out[i * 4] = max(0, min(255, int(round(acc_r[i] / acc_c[i]))))
        out[i * 4 + 1] = max(0, min(255, int(round(acc_g[i] / acc_c[i]))))
        out[i * 4 + 2] = max(0, min(255, int(round(acc_b[i] / acc_c[i]))))
        out[i * 4 + 3] = 255
    return bytes(out)


def png_bytes(w, h, rgba):
    raw = bytearray()
    stride = w * 4
    for y in range(h):
        raw.append(0)
        raw += rgba[y * stride:(y + 1) * stride]

    def chunk(tag, data):
        return (struct.pack('>I', len(data)) + tag + data
                + struct.pack('>I', zlib.crc32(tag + data) & 0xFFFFFFFF))

    ihdr = struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0)
    return (b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr)
            + chunk(b'IDAT', zlib.compress(bytes(raw), 9)) + chunk(b'IEND', b''))


def ico_bytes(items):
    n = len(items)
    offset = 6 + 16 * n
    entries = b''
    blob = b''
    for size, data in items:
        b = 0 if size >= 256 else size
        entries += struct.pack('<BBBBHHII', b, b, 0, 0, 1, 32, len(data), offset)
        offset += len(data)
        blob += data
    return struct.pack('<HHH', 0, 1, n) + entries + blob


def svg_text():
    c0 = '#%02X%02X%02X' % STOPS[0][1]
    c1 = '#%02X%02X%02X' % STOPS[1][1]
    c2 = '#%02X%02X%02X' % STOPS[2][1]
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="dxh">
  <defs>
    <linearGradient id="dxh-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{c0}" />
      <stop offset=".52" stop-color="{c1}" />
      <stop offset="1" stop-color="{c2}" />
    </linearGradient>
    <linearGradient id="dxh-sheen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity=".04" />
      <stop offset=".5" stop-color="#FFFFFF" stop-opacity="0" />
      <stop offset="1" stop-color="#000000" stop-opacity=".04" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#dxh-bg)" />
  <rect width="512" height="512" fill="url(#dxh-sheen)" />
  <path fill="#FFFFFF" fill-rule="evenodd" d="M146 128H256A128 128 0 0 1 256 384H146A18 18 0 0 1 128 366V146A18 18 0 0 1 146 128Z M190 256A66 66 0 1 0 322 256A66 66 0 1 0 190 256Z" />
</svg>
'''


def main():
    out = 'public'
    if '--out' in sys.argv:
        out = sys.argv[sys.argv.index('--out') + 1]
    os.makedirs(out, exist_ok=True)

    jobs = [
        ('pwa-512x512.png', 512, 1.0),
        ('pwa-192x192.png', 192, 1.0),
        ('apple-touch-icon.png', 180, 1.0),
        ('maskable-icon.png', 512, 0.82),
        ('favicon.png', 32, 1.0),
    ]
    for name, size, scale in jobs:
        data = png_bytes(size, size, render(size, scale))
        open(os.path.join(out, name), 'wb').write(data)
        print('  %-24s %dx%d  %5.1f KB' % (name, size, size, len(data) / 1024.0))

    ico = ico_bytes([(s, png_bytes(s, s, render(s))) for s in (16, 32, 48)])
    open(os.path.join(out, 'favicon.ico'), 'wb').write(ico)
    print('  %-24s 16/32/48  %4.1f KB' % ('favicon.ico', len(ico) / 1024.0))

    open(os.path.join(out, 'logo.svg'), 'w', encoding='utf-8', newline='\n').write(svg_text())
    print('  %-24s vector' % 'logo.svg')


if __name__ == '__main__':
    main()
