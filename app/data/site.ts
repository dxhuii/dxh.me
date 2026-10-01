export interface SocialLink {
  title: string
  href: string
  icon: string
  accent: string
}

export interface CardItem {
  title: string
  desc: string
  href: string
  accent: string
  /** 图标类名，与 image 二选一 */
  icon?: string
  /** 本地图片地址，与 icon 二选一 */
  image?: string
  /** 横版 logo（如魔兽世界字标），logo 容器会撑满卡片宽度 */
  logoWide?: boolean
  /** 卡片右上角的补充标签 */
  tag?: string
}

export const profile = {
  name: 'DXH',
  greeting: 'Hi, 我是',
  role: 'A NodeJS Full Stack',
  roleCode: '<Developer/>',
} as const

export const socials: SocialLink[] = [
  {
    title: 'Github',
    href: 'https://github.com/dxhuii',
    icon: 'i-ri-github-fill',
    accent: '#57606a',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/dxhuii',
    icon: 'i-ri-twitter-x-fill',
    accent: '#1d9bf0',
  },
  {
    title: '微博',
    href: 'https://weibo.com/dingxiaohui',
    icon: 'i-ri-weibo-fill',
    accent: '#e6162d',
  },
  {
    title: '哔哩哔哩',
    href: 'https://space.bilibili.com/5552452',
    icon: 'i-ri-bilibili-fill',
    accent: '#fb7299',
  },
]

export const projects: CardItem[] = [
  {
    title: '哒可哒可',
    desc: '哒可哒可是一个致力于动漫新番的网站',
    href: 'https://www.dakedake.com/',
    image: '/logos/dakedake.svg',
    accent: '#ff6ea9',
  },
  {
    title: '免费在线拼图',
    desc: '免费在线拼图，在线拼图，智趣无限',
    href: 'https://www.olpuzzle.com/',
    image: '/logos/olpuzzle.png',
    accent: '#4c8dff',
  },
  {
    title: '小菠萝AI导航',
    desc: '一个汇聚全球优质AI工具的生成式AI工具导航平台',
    href: 'https://xbl.cc/',
    image: '/logos/xbl.png',
    accent: '#f2a93b',
  },
  {
    title: '内容收集',
    desc: '收集一些喜欢的工具和网站',
    href: 'https://www.cms.im/',
    image: '/logos/cms.svg',
    accent: '#22b07d',
  },
]

export const games: CardItem[] = [
  {
    title: '流放之路',
    desc: 'Path of Exile · 暗黑类刷宝 ARPG',
    href: 'https://www.pathofexile.com/',
    image: '/logos/games/poe.png',
    accent: '#d9452c',
    tag: 'ARPG',
  },
  {
    title: '流放之路 2',
    desc: 'Path of Exile 2 · 全新一代暗黑 ARPG',
    href: 'https://pathofexile2.com/',
    image: '/logos/games/poe2.png',
    accent: '#9b1f2a',
    tag: 'ARPG',
  },
  {
    title: '火炬之光：无限',
    desc: 'Torchlight: Infinite · 赛季制刷宝 ARPG',
    href: 'https://torchlight.xd.com/cn',
    image: '/logos/games/torchlight.png',
    accent: '#f0932b',
    tag: 'ARPG',
  },
  {
    title: '魔兽世界',
    desc: 'World of Warcraft · 经典 MMORPG',
    href: 'https://worldofwarcraft.blizzard.com/',
    image: '/logos/games/wow.png',
    logoWide: true,
    accent: '#3f8ae0',
    tag: 'MMORPG',
  },
]

export const links = {
  repo: 'https://github.com/dxhuii/dxh.me',
} as const
