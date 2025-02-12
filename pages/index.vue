<script lang="ts" setup>
const userSetting = useUserSettings();

useHead({
  title: "主页",
});
</script>

<template>
  <main class="w-full flex flex-col items-center justify-center px-4">
    <div
      class="mx-auto h-32 w-32 overflow-hidden border-2 border-white rounded-full border-solid text-center shadow-lg transition duration-500 dark:shadow-white/10 hover:shadow-2xl"
    >
      <img :src="userSetting?.avatar" alt="Avatar">
    </div>

    <div
      class="relative mt-12 max-w-[32rem] flex flex-col items-center overflow-hidden rounded-[12px] bg-gray-50 text-center shadow-sm dark:bg-gray-800 dark:shadow-white/10"
    >
      <!-- <div
        class="w-0 h-0 -top-8 inset-x-0 m-auto border-16 border-solid border-transparent border-b-gray-50 absoulte"
      ></div> -->

      <p class="p-8">
        {{ userSetting?.description }}
      </p>

      <hr class="w-5/6">

      <div class="p-8">
        <div v-if="userSetting?.userName" class="my-px flex items-center">
          <i class="i-ri:user-line mx-2 opacity-60" />
          <span>@{{ userSetting.userName }}</span>
        </div>

        <div v-if="userSetting?.location" class="my-px flex items-center">
          <i class="i-ri:map-pin-line mx-2 opacity-60" />
          <span>{{ userSetting.location }}</span>
        </div>

        <div v-if="userSetting?.email" class="my-px flex items-center">
          <i class="i-ri:mail-line mx-2 opacity-60" />
          <a :href="`mailto:${userSetting.email}`">{{ userSetting.email }}</a>
        </div>
      </div>

      <div class="w-full bg-gray-100 p-6 dark:bg-gray-900">
        <a
          v-for="social in userSetting?.socials"
          :key="social.icon"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mx-2 opacity-60 transition duration-200 hover:opacity-100"
        >
          <i :class="social.icon" class="text-2xl" />
        </a>
      </div>
    </div>
  </main>
</template>
