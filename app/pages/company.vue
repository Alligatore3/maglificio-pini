<template>
  <!-- Hero Section -->
  <section class="w-full max-w-[1200px] px-6 py-8 md:py-16 mx-auto">
    <div class="relative overflow-hidden rounded-xl bg-background-dark">
      <div
        class="min-h-[600px] flex flex-col items-center justify-center text-center p-8 relative z-10"
        data-alt="Luxury knitwear fabric close up showing texture"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%),
            url('/images/company.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="max-w-3xl flex flex-col gap-6">
          <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            {{ $t('pages.company.heroLuxury') }}
          </h1>
          <p class="text-white/80 text-lg md:text-xl font-light">
            {{ $t('pages.company.heroLuxuryDescription') }}
          </p>
          <NuxtLink
            class="bg-white/10 w-fit mx-auto flex items-center backdrop-blur-md border border-white/20 text-white h-12 px-8 rounded-lg font-bold hover:bg-white/20 transition-all"
            to="/services"
          >
            {{ $t('pages.company.viewServices') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <!-- Pillars Section -->
  <section class="w-full max-w-[1200px] px-6 py-12 mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6">
      {{ $t('pages.company.ourThreePillars') }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Skill -->
      <div
        class="flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-background-dark/40 border border-[#e6dbdd] dark:border-[#3d2428] shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
        >
          <span class="material-symbols-outlined text-3xl">precision_manufacturing</span>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold">
            {{ $t('pages.company.skills') }}
          </h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            {{ $t('pages.company.advancedShimaSeikiTechnology') }}
          </p>
        </div>
      </div>
      <!-- Archive -->
      <div
        class="flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-background-dark/40 border border-[#e6dbdd] dark:border-[#3d2428] shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
        >
          <span class="material-symbols-outlined text-3xl">auto_stories</span>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold">
            {{ $t('pages.company.archive') }}
          </h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            {{ $t('pages.company.curatedCollection') }}
          </p>
        </div>
      </div>
      <!-- Ethics -->
      <div
        class="flex flex-col gap-5 p-8 rounded-xl bg-white dark:bg-background-dark/40 border border-[#e6dbdd] dark:border-[#3d2428] shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
        >
          <span class="material-symbols-outlined text-3xl">verified_user</span>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold">
            {{ $t('pages.company.ethics') }}
          </h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            {{ $t('pages.company.committedToSustainableSourcing') }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Editorial Imagery Strip -->
  <section class="w-full max-w-[1200px] px-6 py-12 mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[300px]">
      <div
        class="rounded-lg bg-cover bg-center"
        data-alt="Close up of yarn spools"
        style="background-image: url('/images/slide-1.jpg')"
      ></div>
      <div
        class="rounded-lg bg-cover bg-center md:translate-y-8"
        data-alt="Hands working on a knitting machine"
        style="background-image: url('/images/slide-2.jpg')"
      ></div>
      <div
        class="rounded-lg bg-cover bg-center"
        data-alt="Italian fashion atelier details"
        style="background-image: url('/images/slide-3.jpg')"
      ></div>
      <div
        class="rounded-lg bg-cover bg-center md:translate-y-8"
        data-alt="Luxury fabric texture grey"
        style="background-image: url('/images/slide-4.jpg')"
      ></div>
    </div>
  </section>
  <!-- Production Services Section -->
  <section
    class="w-full mx-auto max-w-[1200px] px-6 py-20 bg-white dark:bg-background-dark/20 rounded-3xl mt-12 mb-20 shadow-sm border border-[#e6dbdd] dark:border-[#3d2428]"
  >
    <div class="max-w-[960px] mx-auto">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold mb-4">
          {{ $t('pages.company.productionServices') }}
        </h2>
        <p class="text-[#896168] dark:text-[#a08489]">
          {{ $t('pages.company.endToEndLifecycle') }}
        </p>
      </div>
      <div class="space-y-6">
        <!-- Service 1 -->
        <div
          class="group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl hover:bg-background-light dark:hover:bg-background-dark/60 transition-colors border-b border-[#e6dbdd]/50 dark:border-[#3d2428]/50 last:border-0"
        >
          <div
            class="text-primary font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity"
          >
            01
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">
              {{ $t('pages.company.studyAndResearch') }}
            </h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              {{ $t('pages.company.analysisOfAestheticTrends') }}
            </p>
          </div>
          <span
            class="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform"
            >arrow_forward</span
          >
        </div>
        <!-- Service 2 -->
        <div
          class="group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl hover:bg-background-light dark:hover:bg-background-dark/60 transition-colors border-b border-[#e6dbdd]/50 dark:border-[#3d2428]/50 last:border-0"
        >
          <div
            class="text-primary font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity"
          >
            02
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">
              {{ $t('pages.company.samplesAndPrototyping') }}
            </h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              {{ $t('pages.company.rapidPrototyping') }}
            </p>
          </div>
          <span
            class="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform"
            >arrow_forward</span
          >
        </div>
        <!-- Service 3 -->
        <div
          class="group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl hover:bg-background-light dark:hover:bg-background-dark/60 transition-colors"
        >
          <div
            class="text-primary font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity"
          >
            03
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold mb-2">
              {{ $t('pages.company.industrialProduction') }}
            </h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              {{ $t('pages.company.scaleableManufacturing') }}
            </p>
          </div>
          <span
            class="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform"
            >arrow_forward</span
          >
        </div>
      </div>
    </div>
  </section>
  <!-- Asia Programs Section -->
  <section class="w-full bg-background-dark text-white py-24">
    <div class="max-w-[1200px] mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div class="max-w-xl">
          <span class="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            {{ $t('pages.company.regionalExpertise') }}
          </span>
          <h2 class="text-4xl md:text-5xl font-black">
            {{ $t('pages.company.asiaPrograms') }}
          </h2>
          <p class="mt-4 text-white/70 text-lg">
            {{ $t('pages.company.specializedLogisticsAndProductionStrategies') }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- China Focus -->
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-primary to-primary/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
          ></div>
          <div
            class="relative bg-[#2d161a] p-10 rounded-2xl flex flex-col h-full border border-white/10"
          >
            <div class="flex items-center gap-4 mb-6">
              <span class="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
              <h3 class="text-2xl font-bold">
                {{ $t('pages.company.chinaFocus') }}
              </h3>
            </div>
            <p class="text-white/60 mb-8 leading-relaxed">
              {{ $t('pages.company.chinaFocusDescription') }}
            </p>
            <ul class="space-y-4 text-sm font-medium">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.rapidLogisticsPipeline') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.highVolumeCapacity') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.digitalCollaborationTools') }}
              </li>
            </ul>
          </div>
        </div>
        <!-- Japan Focus -->
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
          ></div>
          <div
            class="relative bg-[#2d161a] p-10 rounded-2xl flex flex-col h-full border border-white/10"
          >
            <div class="flex items-center gap-4 mb-6">
              <span class="material-symbols-outlined text-primary text-4xl">high_quality</span>
              <h3 class="text-2xl font-bold">
                {{ $t('pages.company.japanFocus') }}
              </h3>
            </div>
            <p class="text-white/60 mb-8 leading-relaxed">
              {{ $t('pages.company.japanFocusDescription') }}
            </p>
            <ul class="space-y-4 text-sm font-medium">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.gots') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.precisionHandFinishing') }}
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                {{ $t('pages.company.longTermPartnershipFocus') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Final Call to Action -->
  <section class="w-full mx-auto max-w-[1200px] px-6 py-24 text-center">
    <div
      class="bg-primary/5 rounded-3xl p-12 md:p-20 flex flex-col items-center gap-8 border border-primary/10"
    >
      <h2 class="text-3xl md:text-5xl font-black max-w-2xl leading-tight">
        {{ $t('pages.company.readyToStartYourNextLuxuryCollection') }}
      </h2>
      <p class="text-lg text-[#896168] dark:text-[#a08489] max-w-xl">
        {{ $t('pages.company.ourTeamIsReadyToDiscussYourSpecificProductionNeeds') }}
      </p>

      <NuxtLink
        class="bg-primary flex items-center text-white h-14 px-10 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
        to="/contacts"
      >
        {{ $t('pages.company.inquireNow') }}
      </NuxtLink>
    </div>
  </section>
</template>
