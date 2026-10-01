import riIcons from '@iconify-json/ri/icons.json'
import {
  defineConfig,
  presetIcons,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      // 允许在 .ts 数据文件中提取动态图标类名
      include: [/\.(vue|svelte|[jt]sx?|mdx?|html)($|\?)/],
    },
  },
  presets: [
    presetWind3({ dark: 'class' }),
    presetIcons({
      scale: 1.15,
      // 显式声明图标集合：避免在 IDE 内置终端（VSCODE_CWD 存在）下跳过 Node 加载器
      // 必须使用函数形式，@iconify/utils 的 loadIcon 仅对函数返回值执行 searchForIcon
      collections: {
        ri: () => riIcons,
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    /** 卡片外壳：玻璃质感 + 立体阴影 + 悬停抬升 */
    card: [
      'group relative flex h-full flex-col overflow-hidden rounded-3xl p-2.5',
      'border border-black/5',
      'bg-gradient-to-b from-white/85 to-white/55 backdrop-blur-xl',
      'shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_28px_-12px_rgba(0,0,0,0.18)]',
      'dark:border-white/10 dark:from-white/10 dark:to-white/[0.04]',
      'dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_16px_34px_-14px_rgba(0,0,0,0.6)]',
      'transition-all duration-300 ease-out',
      'hover:-translate-y-1.5 hover:border-black/10 hover:from-white hover:to-white',
      'hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_24px_48px_-16px_rgba(0,0,0,0.3)]',
      'dark:hover:border-white/15 dark:hover:from-white/15 dark:hover:to-white/[0.06]',
      'dark:hover:shadow-[0_2px_4px_rgba(0,0,0,0.5),0_28px_52px_-16px_rgba(0,0,0,0.75)]',
    ].join(' '),
    /** 卡片底部胶囊按钮 */
    'card-pill': [
      'relative mt-auto flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5',
      'border border-black/5 bg-black/5 text-xs font-medium tracking-wide',
      'dark:border-white/10 dark:bg-white/5',
      'transition-colors duration-300',
      'group-hover:bg-black/10 dark:group-hover:bg-white/10',
    ].join(' '),
    /** 通用胶囊标签 */
    pill: [
      'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-medium tracking-wide',
      'border border-black/5 bg-black/5 text-black/70',
      'dark:border-white/10 dark:bg-white/5 dark:text-white/70',
      'transition-colors duration-200',
    ].join(' '),
  },
})
