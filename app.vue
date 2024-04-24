<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
  const isDarkMode = useState<boolean>('isDarkMode', () => false);

  if (typeof window !== 'undefined') {
    onMounted(() => {
    watch(
      isDarkMode,
      (value) => {
        if (value === true) {
          document.documentElement.classList.add('dark');
          return;
        }

        document.documentElement.classList.remove('dark');
      },
      { immediate: true }
    )
    });
  }
</script>

<style lang="postcss">
@import "/public/fonts/Lato/lato.css";
@import "/public/fonts/Raleway/raleway.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  @apply scroll-smooth overscroll-none scroll-pt-20; /* scroll-pt helps with anchor links, so the header doesn't cover the content when clicking on an anchor */
}

@layer base {
  body {
    @apply font-sans;

    @apply dark:bg-black dark:text-blue-50 dark:text-opacity-60;

    #app { @apply min-h-screen; }

    h1 { @apply text-3xl;  }
    h2 { @apply text-2xl;  }
    h3 { @apply text-xl;   }
    h4 { @apply text-lg;   }
    h5 { @apply text-base; }
    h6 { @apply text-sm;   }

    h1, h2, h3, h4, h5, h6
      { @apply font-raleway; }
    h1, h2, h3
      { @apply mb-4 mt-4 first:mt-0; }
    h4, h5, h6
      { @apply mb-2 mt-2 first:mt-0; }

    p, span, li, th, td, pre, blockquote
      { @apply text-base; }

    ul, ol
      { @apply list-disc list-inside my-4; }

    blockquote, p, pre
      { @apply mb-4; }
    
    input, textarea, select, button
      { @apply dark:bg-transparent; }

    span
      { @apply inline-block; }

    table {
      @apply w-full border-collapse;

      &, th, td
        { @apply border border-gray-300; }
      th, td
        { @apply p-2; }
    }

     span, strong, em, p, ol li, ul li, blockquote {
      & > code {
      @apply px-1 bg-gray-100 text-sm text-slate-700 border border-dotted rounded-md border-gray-900 break-inside-avoid
             dark:bg-transparent dark:border-gray-200 dark:text-slate-300;
      }
     }

    pre {
      @apply p-4 bg-gray-100 border border-dotted rounded-md border-gray-900 overflow-scroll
             dark:bg-transparent dark:border-gray-200;

      & > code
        { @apply text-sm; }
    }

    a {
      @apply text-green-600 underline hover:text-green-900 dark:hover:text-green-300 transition-colors ease-in-out;

      &[href^="#"]
        { @apply text-gray-600 dark:text-gray-500 decoration-dotted; }
    }

    blockquote {
      @apply border-l-4 border-gray-300 italic px-4 py-2 mb-4;

      p
        { @apply mb-0 text-justify; }
    }
  }
}
</style>