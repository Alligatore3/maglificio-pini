<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#e6dbdd] dark:border-[#3d2025] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4"
  >
    <div class="mx-auto max-w-[1200px]">
      <div class="flex items-center justify-between gap-4">
        <Logo />

        <button
          type="button"
          class="md:hidden -mr-2 inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-[#896168] dark:text-[#a5868c] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="sr-only">{{ mobileOpen ? 'Close menu' : 'Open menu' }}</span>
          <span class="material-symbols-outlined text-2xl leading-none" aria-hidden="true">
            {{ mobileOpen ? 'close' : 'menu' }}
          </span>
        </button>

        <nav
          class="hidden md:flex flex-1 justify-end items-center gap-8"
          aria-label="Main navigation"
        >
          <div class="flex items-center gap-8">
            <NuxtLink
              class="text-sm font-medium hover:text-primary/70 dark:text-gray-200 transition-colors"
              active-class="active"
              :to="localePath('/company')"
            >
              {{ $t('header.company') }}
            </NuxtLink>

            <NuxtLink
              class="text-sm font-medium hover:text-primary/70 dark:text-gray-200 transition-colors"
              active-class="active"
              :to="localePath('/services')"
            >
              {{ $t('header.services') }}
            </NuxtLink>
          </div>
          <div class="flex items-center gap-4 border-l border-[#e6dbdd] dark:border-[#3d2025] pl-8">
            <NuxtLink
              class="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
              active-class="active"
              :to="localePath('/contacts')"
            >
              {{ $t('header.contacts') }}
            </NuxtLink>

            <LanguageSwitch id="language-switch-desktop" name="language-switch-desktop" />
          </div>
        </nav>
      </div>

      <Transition name="mobile-nav">
        <nav
          v-show="mobileOpen"
          id="mobile-nav"
          class="md:hidden mt-4 flex flex-col gap-1 border-t border-[#e6dbdd] dark:border-[#3d2025] pt-4"
          aria-label="Main navigation"
        >
          <NuxtLink
            class="rounded-lg px-3 py-3 text-base font-medium text-[#3d2025] dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            active-class="!text-primary bg-black/5 dark:bg-white/5"
            :to="localePath('/company')"
            @click="mobileOpen = false"
          >
            {{ $t('header.company') }}
          </NuxtLink>
          <NuxtLink
            class="rounded-lg px-3 py-3 text-base font-medium text-[#3d2025] dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            active-class="!text-primary bg-black/5 dark:bg-white/5"
            :to="localePath('/services')"
            @click="mobileOpen = false"
          >
            {{ $t('header.services') }}
          </NuxtLink>
          <NuxtLink
            class="mt-1 rounded-lg bg-primary px-3 py-3 text-center text-base font-bold tracking-wide text-white hover:opacity-90 transition-opacity"
            active-class="active"
            :to="localePath('/contacts')"
            @click="mobileOpen = false"
          >
            {{ $t('header.contacts') }}
          </NuxtLink>

          <LanguageSwitch id="language-switch-mobile" name="language-switch-mobile" class="mt-8" />
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const localePath = useLocalePath()
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  }
)

if (import.meta.client) {
  watch(
    mobileOpen,
    (open) => {
      document.documentElement.style.overflow = open ? 'hidden' : ''
    },
    { flush: 'post' }
  )
}

onUnmounted(() => {
  if (import.meta.client) {
    document.documentElement.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
