<script setup lang="ts">
const list = [{
  title: 'IT传闻',
  href: 'https://www.itrumors.com/',
  icon: 'https://www.itrumors.com/logo.png',
  desc: 'IT传闻提供手机购买时间参考和购买建议',
  target: '_blank'
},
{
  title: '古文诗词',
  href: 'https://www.guwenshici.com/',
  icon: 'https://www.guwenshici.com/logo.png',
  desc: '踏上古诗之旅_品读千古文化经典',
  target: '_blank'
},
{
  title: '小菠萝AI导航',
  href: 'https://xbl.cc/',
  icon: 'https://xbl.cc/logo.png',
  desc: '一个汇聚全球优质AI工具的生成式AI工具导航平台',
  target: '_blank'
},
{
  title: '免费在线拼图',
  href: 'https://www.olpuzzle.com/',
  icon: 'https://www.olpuzzle.com/logo.png',
  desc: '免费在线拼图，在线拼图，智趣无限',
  target: '_blank'
},
{
  title: '哒可哒可',
  href: 'https://www.dakedake.com/',
  icon: 'https://www.dakedake.com/logo.png',
  desc: '哒可哒可是一个致力于动漫新番的网站',
  target: '_blank'
},
{
  title: '内容收集',
  href: 'https://www.cms.im/',
  icon: 'https://www.cms.im/favicon.svg',
  desc: '收集一些喜欢的工具和网站',
  target: '_blank'
}]
</script>

<template>
  <div>
    <h1 text-4xl font-light>
      Hi, 我是 <b>丁效辉</b> 👋。
    </h1>
    <div text="2xl" mt-4 flex items-center font-light>
      A NodeJS Full Stack <code class="transition-background mx-2 cursor-pointer rounded bg-gray-200 bg-opacity-0 p-1 text-3xl font-medium duration-200 dark:bg-gray-800/0 hover:bg-opacity-100 hover:dark:bg-gray-800/100">&lt;Developer/&gt;</code>
    </div>
    <div mt-4 flex>
      <a
        target="_blank" href="https://github.com/dxhuii"
        class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
      >
        <i class="mr-2" i-ri-github-fill />Github
      </a>
      <a
        target="_blank" href="https://twitter.com/dxhuii"
        class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#00acee] hover:text-white"
      >
        <i class="mr-2" i-ri-twitter-fill />Twitter
      </a>
      <a
        target="_blank" href="https://weibo.com/dingxiaohui"
        class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#ff8200] hover:text-white"
      >
        <i class="mr-2" i-ri-weibo-fill />微博
      </a>
      <a
        target="_blank" href="https://space.bilibili.com/5552452"
        class="mr-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-3 py-2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#fb7299] hover:text-white"
      >
        <i class="mr-2" i-ri-bilibili-fill />哔哩哔哩
      </a>
    </div>
    <h2 class="mt-4 flex">
      项目目录
    </h2>
    <div class="grid grid-cols-1 mt-4 gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="item in list" :key="item.href"
        :to="item.href"
        class="rounded-md bg-gray-100 px-4 py-3 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-200 dark:hover:bg-gray-50/20"
        :target="item.target"
      >
        <div class="h-full flex items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>
              {{ item.title }}
            </div>
            <div text-sm font-normal op-50>
              {{ item.desc }}
            </div>
          </div>
          <div ml-4 text-4xl op-75>
            <img v-if="item.icon.includes('https')" h10 w10 :src="item.icon" :alt="item.title">
            <div v-else :class="item.icon" />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
