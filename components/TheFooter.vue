<script lang="ts" setup>
const { siteConfig } = useAppConfig();
</script>

<template>
  <footer
    class="flex flex-col items-center justify-center py-10 text-center text-sm"
  >
    <div class="my-px flex">
      <div v-if="siteConfig?.license && !siteConfig?.footer?.hideLicense">
        <span v-if="typeof siteConfig.license === 'string'">{{ siteConfig.license }}</span>

        <a
          v-else
          :href="siteConfig.license.link"
          target="_blank"
          rel="noopener noreferrer"
          class="underline opacity-60 hover:opacity-100"
        >{{ siteConfig.license.name }}</a>

        <span class="mx-1.5 opacity-60">|</span>
      </div>

      <span class="opacity-60">&copy; {{ new Date().getFullYear() }} · {{ siteConfig?.title }}</span>
    </div>

    <div v-if="siteConfig?.icpBeian" class="my-px">
      <a
        :href="siteConfig.icpBeian.url"
        target="_blank"
        rel="noopener noreferrer"
        class="opacity-60 hover:opacity-100"
      >{{ siteConfig.icpBeian.text }}</a>
    </div>

    <div v-if="siteConfig?.gongAnBeian" class="my-px">
      <a
        :href="siteConfig.gongAnBeian.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex opacity-60 hover:opacity-100"
      >
        <img src="/beian.png" class="mr-0.5">
        <span>{{ siteConfig.gongAnBeian.text }}</span>
      </a>
    </div>

    <div class="my-px flex items-center">
      <span class="opacity-60">Made with Nuxt & </span>
      <i class="i-ri:heart-3-fill mx-1.5 text-red-500 opacity-75" />
    </div>
  </footer>
</template>
