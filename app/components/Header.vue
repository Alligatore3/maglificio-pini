<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-[#e6dbdd] dark:border-[#3d2025] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4"
  >
    <div class="mx-auto flex max-w-[1200px] items-center justify-between">
      <Logo />

      <nav class="hidden md:flex flex-1 justify-end items-center gap-10">
        <div class="flex items-center gap-8">
          <NuxtLink
            class="text-sm font-medium hover:text-primary/70 dark:text-gray-200 transition-colors"
            active-class="active"
            to="/company"
          >
            Company
          </NuxtLink>
          <NuxtLink
            class="text-sm font-medium hover:text-primary/70 dark:text-gray-200 transition-colors"
            active-class="active"
            to="/contacts"
          >
            Contacts
          </NuxtLink>
          <NuxtLink
            class="text-sm font-medium hover:text-primary/70 dark:text-gray-200 transition-colors"
            active-class="active"
            to="/services"
          >
            Services
          </NuxtLink>
        </div>
        <div class="flex items-center gap-4 border-l border-[#e6dbdd] dark:border-[#3d2025] pl-8">
          <button
            class="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Contact Us
          </button>
          <button
            class="text-xs font-bold text-[#896168] dark:text-[#a5868c] hover:text-primary transition-colors"
          >
            EN | 中文 | 日本語
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
