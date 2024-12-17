<script lang="ts" setup>
// import { colors } from "unocss/preset-mini";

const { data } = useSettings();

useHead({
  titleTemplate: (title) => {
    return title
      ? `${title} - ${data.value?.siteTitle}`
      : data.value?.siteTitle;
  },
});
</script>

<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator
      :color="`linear-gradient(to right, ${colors.cyan[500]} 0%, ${colors.sky[500]} 50%, ${colors.blue[500]} 100%)`"
      :throttle="0"
    /> -->

    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-300;
}

.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-sm;
}
</style>
