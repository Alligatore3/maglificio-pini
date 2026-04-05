<template>
  <footer
    class="border-t border-[#e6dbdd] dark:border-[#3d2025] bg-white dark:bg-background-dark px-6 py-12"
  >
    <div
      class="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 md:flex-row"
    >
      <Logo />

      <div class="flex gap-8 text-xs font-semibold text-[#896168] dark:text-[#a5868c]">
        <NuxtLink
          to="https://maglificiopini.com/privacy-policy/"
          class="hover:text-primary transition-colors"
          target="_blank"
        >
          {{ $t('footer.privacyPolicy') }}
        </NuxtLink>
        <NuxtLink
          to="https://maglificiopini.com/cookie-policy/"
          class="hover:text-primary transition-colors"
          target="_blank"
        >
          {{ $t('footer.cookiePolicy') }}
        </NuxtLink>
      </div>

      <p class="text-xs text-[#896168] dark:text-[#a5868c]">
        {{ $t('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>
