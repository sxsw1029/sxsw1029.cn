<template>
  <div class="default-layout from-gray-50 via-gray-100 to-gray-200 bg-gradient-to-br text-gray-800 font-sans dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-gray-200">
    <div class="mx-auto min-h-screen flex flex-col container">
      <TheHeader />

      <div class="flex flex-1">
        <slot />
      </div>

      <TheFooter />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.default-layout {
  font-feature-settings: "calt" 0;
}
</style>
