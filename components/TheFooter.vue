<script lang="ts" setup>
const { data } = useSettings();
</script>

<template>
  <footer
    class="flex flex-col items-center justify-center py-10 text-center text-sm"
  >
    <div class="my-px">
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline opacity-60 hover:opacity-100"
      >CC BY-NC-SA 4.0</a>
      <span class="mx-1.5 opacity-60">|</span>
      <span class="opacity-60">&copy; {{ new Date().getFullYear() }} · {{ data?.siteTitle }}</span>
    </div>

    <div v-if="data?.icp_beian" class="my-px">
      <a
        :href="data?.icp_link"
        target="_blank"
        rel="noopener noreferrer"
        class="opacity-60 hover:opacity-100"
      >{{ data?.icp_code }}</a>
    </div>

    <div v-if="data?.gongAn_beian" class="my-px">
      <a
        :href="data?.gongAn_link"
        target="_blank"
        rel="noopener noreferrer"
        class="flex opacity-60 hover:opacity-100"
      >
        <img src="/beian.png" class="mr-0.5">
        <span>{{ data?.gongAn_code }}</span>
      </a>
    </div>

    <div class="my-px flex items-center">
      <span class="opacity-60">Made with Nuxt & </span>
      <i class="i-ri:heart-3-fill mx-1.5 text-red-500 opacity-75" />
    </div>
  </footer>
</template>
