import gameIcons from '@iconify-json/game-icons/icons.json'
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
        'game-icons': () => gameIcons,
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    /** 卡片外壳：玻璃质感 + 悬停微抬升 */
    card: [
      'group relative flex h-full flex-col overflow-hidden rounded-3xl p-2.5',
      'border border-black/5 bg-white/70 backdrop-blur-xl',
      'dark:border-white/10 dark:bg-white/5',
      'transition-all duration-300 ease-out',
      'hover:-translate-y-1 hover:border-black/10 hover:bg-white hover:shadow-lg',
      'dark:hover:border-white/15 dark:hover:bg-white/10',
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
