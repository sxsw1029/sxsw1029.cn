<script lang="ts" setup>
const { path } = useRoute();

const { data: post } = await useAsyncData(path, () => queryCollection("post").path(path).first());

useHead({
  title: post.value?.title,
});
</script>

<template>
  <main v-if="post" class="mx-auto w-full px-4 pt-12 lg:w-2/3">
    <div class="mb-16">
      <p class="mb-2 break-words text-2xl font-bold font-extrabold">
        {{ post.title }}
      </p>

      <ContentRenderer class="markdown break-words" :value="post" />
    </div>
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
    @apply my-10 border-t border-gray-200;
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
    @apply border-b border-gray-300;

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
      @apply border-b border-gray-300;

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
    @apply my-6 pl-4 font-medium border-l-4 border-gray-300;
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
    @apply mt-10 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200;

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
