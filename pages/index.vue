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
    <div flex mt-4>
      <a
        target="_blank" href="https://github.com/dxhuii"
        class="inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900 hover:text-white dark:bg-gray-50/10"
      >
        <i class="mr-2" i-ri-github-fill />Github
      </a>
      <a
        target="_blank" href="https://twitter.com/dxhuii"
        class="inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-[#00acee] hover:text-white dark:bg-gray-50/10"
      >
        <i class="mr-2" i-ri-twitter-fill />Twitter
      </a>
      <a
        target="_blank" href="https://weibo.com/dingxiaohui"
        class="inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-[#ff8200] hover:text-white dark:bg-gray-50/10"
      >
        <i class="mr-2" i-ri-weibo-fill />微博
      </a>
      <a
        target="_blank" href="https://space.bilibili.com/5552452"
        class="inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-[#fb7299] hover:text-white dark:bg-gray-50/10"
      >
        <i class="mr-2" i-ri-bilibili-fill />哔哩哔哩
      </a>
    </div>
    <h2 class="flex items-center">
      <span flex-1>Projects</span>
      <div class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
        <a target="_blank" href="https://github.com/dxhuii">
          <div class="m-2 i-ri-arrow-right-up-line" />
        </a>
      </div>
    </h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      <a
        class="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
        target="_blank" href="https://www.cangwangge.com/"
      >
        <div class="flex h-full items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>藏网阁</div>
            <div op-50 font-normal text-sm>收藏万物的网站</div>
          </div>
          <div ml-4 text-4xl op-75>
            <div class="i-twemoji-letter-c" />
          </div>
        </div>
      </a>
      <a
        class="px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
        target="_blank" href="https://github.com/dxhuii/delWeibo"
      >
        <div class="flex h-full items-center justify-center">
          <div flex-1>
            <div font-medium leading-relaxed>批量删除微博博文</div>
            <div op-50 font-normal text-sm>批量删除新浪微博的小工具</div>
          </div>
          <div ml-4 text-4xl op-75>
            <div class="i-twemoji-delivery-truck" />
          </div>
        </div>
      </a>
    </div>
    <Suspense>
      <PageView mt-6 />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
