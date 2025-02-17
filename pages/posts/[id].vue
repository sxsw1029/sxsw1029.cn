<script lang="ts" setup>
const { path } = useRoute();

const { data: post } = await useAsyncData(path, () => queryCollection("post").path(path).first());

useHead({
  title: post.value?.title,
});

const createdDateFormatted = useDateFormat(post.value?.createdAt, "YYYY-MM-DD HH:mm");
const updatedDateFormatted = useDateFormat(post.value?.updatedAt, "YYYY-MM-DD HH:mm");
</script>

<template>
  <main v-if="post" class="mx-auto w-full flex px-4 pb-20 pt-18 lg:w-2/3">
    <article class="flex-1">
      <div class="mb-16 border-b-2 border-gray-100 pb-5 dark:border-gray-800">
        <p class="break-words text-2xl font-bold font-extrabold">
          {{ post.title }}
        </p>

        <div class="mt-4 flex items-center opacity-40">
          <i class="i-ri:calendar-2-line mr-2" />

          <span>创建于 {{ createdDateFormatted }}</span>
          <span class="mx-2">-</span>
          <span>最后更新于 {{ updatedDateFormatted }}</span>
        </div>
      </div>

      <section>
        <ContentRenderer class="markdown break-words" :value="post" />
      </section>
    </article>

    <aside class="relative ml-30 hidden xl:block">
      <div class="sticky top-10 border-l-3 border-gray-200 pl-4 leading-loose opacity-75 dark:border-gray-700">
        <div v-for="toc in post.body.toc?.links" :key="toc.id">
          <a v-show="toc.id !== 'footnote-label'" :href="`#${toc.id}`">{{ toc.text }}</a>

          <div v-for="child in toc.children" :key="child.id" class="ml-6">
            <a :href="`#${child.id}`">{{ child.text }}</a>
          </div>
        </div>
      </div>
    </aside>
  </main>
</template>

<style lang="postcss">
.markdown {
  & strong {
    @apply font-semibold;
  }

  & p {
    @apply my-5 leading-relaxed;

    > a {
      @apply underline underline-offset-3 decoration-dotted font-medium;
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply my-3.5;
  }

  & h1 {
    @apply text-4xl font-extrabold;
  }

  & h2 {
    @apply text-3xl font-bold;
  }

  & h3 {
    @apply text-2xl font-semibold;
  }

  & h4 {
    @apply text-lg font-semibold;
  }

  & h5 {
    @apply text-base font-semibold;
  }

  & h6 {
    @apply text-sm font-semibold;
  }

  & hr {
    @apply my-10 border-t border-gray-200 dark:border-gray-700;
  }

  & hr + *,
  & h2 + *,
  & h3 + *,
  & h4 + *,
  & h5 + *,
  & h6 + * {
    @apply mt-0;
  }

  & ul {
    @apply list-disc my-5 pl-5 leading-relaxed;

    & li {
      @apply my-1.5;
    }

    > li {
      @apply pl-2;

      > *:first-child {
        @apply mt-3;
      }

      > *:last-child {
        @apply mb-3;
      }

      & p {
        @apply my-3;
      }
    }
  }

  & ol {
    @apply list-decimal my-5 pl-5 leading-relaxed;

    & li {
      @apply my-1.5;
    }

    > li {
      @apply pl-2;

      > *:first-child {
        @apply mt-33;
      }

      > *:last-child {
        @apply mb-3;
      }

      &::marker {
        @apply font-normal;
      }

      & p {
        @apply my-3;
      }
    }
  }

  & ul ul,
  & ul ol,
  & ol ul,
  & ol ol {
    @apply my-3;
  }

  & table {
    @apply table-auto text-sm leading-7 my-8;
  }

  & thead {
    @apply border-b border-gray-300 dark:border-gray-600;

    & th {
      @apply align-bottom px-3 pb-3 font-semibold;

      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }
    }
  }

  & tbody {
    & tr {
      @apply border-b border-gray-300 dark:border-gray-600;

      &:last-child {
        @apply border-b-0;
      }
    }

    & td {
      @apply align-baseline p-3;

      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }
    }
  }

  & blockquote {
    @apply my-6 pl-4 font-medium border-l-4 border-gray-300 dark:border-gray-600;
  }

  & code:not(pre code) {
    @apply px-2 py-1 bg-slate-200/50 dark:bg-gray-800 text-sm font-medium rounded box-decoration-clone;
  }

  & pre {
    @apply my-6 p-4 bg-slate-200/50 dark:bg-gray-800 text-sm font-medium leading-relaxed rounded overflow-x-auto;

    & code {
      @apply p-0;

      font-weight: inherit;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;

      &::before {
        content: none;
      }

      &::after {
        content: none;
      }
    }
  }

  & img {
    @apply my-8 mx-auto;
  }

  & sup {
    @apply mx-1;

    & a {
      @apply underline font-normal scroll-mt-24;
    }
  }

  & .footnotes {
    @apply mt-10 text-sm opacity-40 border-t border-gray-200 dark:border-gray-700;

    & .sr-only {
      @apply hidden;
    }

    & .data-footnote-backref {
      @apply mx-1 font-mono;
    }
  }

  & .contains-task-list {
    @apply list-none pl-0;

    & .task-list-item {
      @apply pl-0;

      > *:first-child {
        @apply mt-0;
      }

      > *:last-child {
        @apply mb-0;
      }

      > input {
        @apply mr-2;
      }
    }
  }
}
</style>
