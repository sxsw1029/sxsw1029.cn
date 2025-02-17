<script lang="ts" setup>
const { siteConfig } = useAppConfig();

const colorMode = useColorMode();

function switchColorMode() {
  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
}
</script>

<template>
  <header class="flex items-center justify-between px-4 py-6 lg:px-12">
    <div
      class="rounded-full from-cyan-500 via-sky-500 to-blue-500 bg-gradient-to-r px-4 py-2 text-white font-light shadow-md"
    >
      {{ siteConfig.title }}
    </div>

    <nav class="flex">
      <NuxtLink
        v-for="nav in siteConfig.navs"
        :key="nav.name"
        :to="nav.link"
        class="mx-2 opacity-60 transition duration-200 hover:opacity-100"
      >
        {{ nav.name }}
      </NuxtLink>

      <button
        class="flex items-center"
        @click="switchColorMode()"
      >
        <i
          v-show="$colorMode.preference === 'system'"
          class="i-ri:computer-line ml-3 opacity-60 transition duration-200 hover:opacity-100"
        />

        <i
          v-show="$colorMode.preference === 'dark'"
          class="i-ri:moon-line ml-3 opacity-60 transition duration-200 hover:opacity-100"
        />

        <i
          v-show="$colorMode.preference === 'light'"
          class="i-ri:sun-line ml-3 opacity-60 transition duration-200 hover:opacity-100"
        />
      </button>
    </nav>
  </header>
</template>

<style lang="postcss">
.router-link-active {
  @apply opacity-100;
}
</style>
