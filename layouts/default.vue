<template>
  <div class="mx-auto min-h-screen flex flex-col container">
    <TheHeader />

    <div class="flex flex-1">
      <slot />
    </div>

    <TheFooter />
  </div>
</template>
