<template>
  <div>
    <h1>
      Ding Xiao Hui.
    </h1>
    <div mt-4 text="xl">
      Front-end developer.
    </div>
    <div mt-2 text="xl">
      Currently working at Weimob.
    </div>
    <div mt-4 flex>
      <a
        target="_blank" href="https://github.com/dxhuii"
        class="mr2 mt2 inline-flex items-center rounded-md bg-gray-50 px3 py2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
      >
        <i class="mr2" i-ri-github-fill />Github
      </a>
      <a
        target="_blank" href="https://twitter.com/dxhuii"
        class="mr2 mt2 inline-flex items-center rounded-md bg-gray-50 px3 py2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#00acee] hover:text-white"
      >
        <i class="mr2" i-ri-twitter-fill />Twitter
      </a>
      <a
        target="_blank" href="https://weibo.com/dingxiaohui"
        class="mr2 mt2 inline-flex items-center rounded-md bg-gray-50 px3 py2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#ff8200] hover:text-white"
      >
        <i class="mr2" i-ri-weibo-fill />微博
      </a>
      <a
        target="_blank" href="https://space.bilibili.com/5552452"
        class="mr2 mt2 inline-flex items-center rounded-md bg-gray-50 px3 py2 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-[#fb7299] hover:text-white"
      >
        <i class="mr2" i-ri-bilibili-fill />哔哩哔哩
      </a>
    </div>
    <h2 class="mt4 flex items-center">
      <span flex-1>项目</span>
      <div class="ml2 cursor-pointer op-50 transition-opacity hover:op-100">
        <a target="_blank" href="https://github.com/dxhuii">
          <div class="i-ri-arrow-right-up-line m2" />
        </a>
      </div>
    </h2>
    <div class="grid grid-cols-1 gap4 sm:grid-cols-2">
      <a
        class="rounded-md bg-gray-50 px4 py3 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-100 dark:hover:bg-gray-50/20"
        target="_blank" href="https://www.itrumors.com/"
      >
        <div class="h-full flex items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>IT传闻</div>
            <div text-sm font-normal op-50>IT传闻提供手机购买时间参考和购买建议</div>
          </div>
          <div ml-4 text-4xl op-75>
            <div class="i-twemoji-letter-t" />
          </div>
        </div>
      </a>
      <a
        class="rounded-md bg-gray-50 px4 py3 decoration-none transition-colors dark:bg-gray-50/10 hover:bg-gray-100 dark:hover:bg-gray-50/20"
        target="_blank" href="https://github.com/dxhuii/delWeibo"
      >
        <div class="h-full flex items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>批量删除微博博文</div>
            <div text-sm font-normal op-50>批量删除新浪微博的小工具</div>
          </div>
          <div ml-4 text-4xl op-75>
            <div class="i-twemoji-delivery-truck" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
