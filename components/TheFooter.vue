<script lang="ts" setup>
const siteSetting = useSiteSettings();
</script>

<template>
  <footer
    class="flex flex-col items-center justify-center py-10 text-center text-sm"
  >
    <div class="my-px flex">
      <div v-if="siteSetting?.license && !siteSetting?.footer?.hideLicense">
        <span v-if="typeof siteSetting.license === 'string'">{{ siteSetting.license }}</span>

        <a
          v-else
          :href="siteSetting.license.link"
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-60 hover:opacity-100"
        >{{ siteSetting.license.name }}</a>

        <span class="mx-1.5 opacity-60">|</span>
      </div>

      <span class="opacity-60">&copy; {{ new Date().getFullYear() }} · {{ siteSetting?.title }}</span>
    </div>

    <div v-if="siteSetting?.icpBeian" class="my-px">
      <a
        :href="siteSetting.icpBeian.url"
        target="_blank"
        rel="noopener noreferrer"
        class="opacity-60 hover:opacity-100"
      >{{ siteSetting.icpBeian.text }}</a>
    </div>

    <div v-if="siteSetting?.gongAnBeian" class="my-px">
      <a
        :href="siteSetting.gongAnBeian.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex opacity-60 hover:opacity-100"
      >
        <img src="/beian.png" class="mr-0.5">
        <span>{{ siteSetting.gongAnBeian.text }}</span>
      </a>
    </div>

    <div class="my-px flex items-center">
      <span class="opacity-60">Made with Nuxt & </span>
      <i class="i-ri:heart-3-fill mx-1.5 text-red-500 opacity-75" />
    </div>
  </footer>
</template>
