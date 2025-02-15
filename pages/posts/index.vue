<script lang="ts" setup>
const { siteConfig } = useAppConfig();

const { data: posts } = await useAsyncData("posts", () => queryCollection("post").order("updatedAt", "DESC").all());

useHead({
  title: siteConfig.postsPageTitle ?? "Posts",
});
</script>

<template>
  <main class="mx-auto w-full px-4 pt-12 lg:w-3/5">
    <p
      class="mb-10 text-center text-3xl font-bold tracking-wide"
    >
      All Posts
    </p>

    <div
      v-for="post in posts"
      :key="post.id"
      class="mx-auto my-8 max-w-lg flex flex-col overflow-hidden rounded-xl bg-gray-50 text-center shadow-sm dark:bg-gray-800 dark:shadow-white/10"
    >
      <NuxtLink
        :to="post.path"
        class="break-words p-6 text-lg opacity-80 hover:opacity-100"
      >
        {{ post.title }}
      </NuxtLink>
    </div>
  </main>
</template>
