<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <!-- Hero Section -->
    <section class="grid lg:grid-cols-2 gap-12 items-center mb-32">
      <div class="relative group">
        <div
          class="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl"
          data-alt="Italian artisan operating a modern Stoll knitting machine"
          style="
            background-image: url('/images/craftsmanship.jpg');
            background-size: cover;
            background-position: center;
          "
        ></div>
        <div
          class="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 backdrop-blur-xl rounded-xl border border-white/20 hidden md:flex items-center justify-center p-6 text-center"
        >
          <p class="text-xs font-semibold uppercase tracking-widest text-primary">
            Est. 1977 <br />
            Forli, Italy
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <div class="space-y-4">
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs">
            {{ $t('pages.services.hero.innovationAndHeritage') }}
          </span>
          <h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"></h1>
        </div>
        <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          {{ $t('pages.services.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <a
            class="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform"
            href="/pdf/Maglificio-Pini-Technical-Fleet.pdf"
            target="_blank"
          >
            {{ $t('pages.services.hero.exploreTechnicalFleet') }}
          </a>
          <a
            class="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="/pdf/Maglificio-Pini-Portfolio.pdf"
            target="_blank"
          >
            {{ $t('pages.services.hero.viewPortfolio') }}
          </a>
        </div>
      </div>
    </section>
    <!-- Our Services Section -->
    <section class="mb-32">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-4xl font-bold mb-6">
            {{ $t('pages.services.hero.ourServices') }}
          </h2>
          <p class="text-xl text-slate-600 dark:text-slate-400">
            {{ $t('pages.services.hero.ourServicesDescription') }}
          </p>
        </div>
        <div class="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-12 mb-4"></div>
      </div>
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Research -->
        <div class="group">
          <div
            class="aspect-video mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900"
            data-alt="Organized archive of high-quality luxury wool yarns"
            style="
              background-image: url('/images/creative-research.jpg');
              background-size: cover;
              background-position: center;
            "
          ></div>
          <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">search</span>
            {{ $t('pages.services.hero.creativeResearch') }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ $t('pages.services.hero.creativeResearchDescription') }}
          </p>
        </div>
        <!-- Sampling -->
        <div class="group">
          <div
            class="aspect-video mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900"
            data-alt="Close up of precision knitting needles working on silk"
            style="
              background-image: url('/images/precision-sampling.jpg');
              background-size: cover;
              background-position: center;
            "
          ></div>
          <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">architecture</span>
            {{ $t('pages.services.hero.precisionSampling') }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ $t('pages.services.hero.precisionSamplingDescription') }}
          </p>
        </div>
        <!-- Production -->
        <div class="group">
          <div
            class="aspect-video mb-8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900"
            data-alt="Symmetrical view of a high-tech textile factory floor"
            style="
              background-image: url('/images/scale-production.jpg');
              background-size: cover;
              background-position: center;
            "
          ></div>
          <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
            <span class="material-symbols-outlined text-primary">precision_manufacturing</span>
            {{ $t('pages.services.hero.scaleProduction') }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ $t('pages.services.hero.scaleProductionDescription') }}
          </p>
        </div>
      </div>
    </section>
    <!-- Technical Infrastructure Section -->
    <section
      class="bg-white dark:bg-slate-900/50 rounded-3xl p-8 md:p-16 border border-slate-200 dark:border-slate-800"
    >
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <h2 class="text-4xl font-bold mb-8">
            {{ $t('pages.services.hero.technicalInfrastructure') }}
          </h2>
          <div class="space-y-8">
            <div class="flex gap-6">
              <div
                class="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-primary">settings_suggest</span>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">
                  {{ $t('pages.services.hero.technicalFleet') }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ $t('pages.services.hero.technicalInfrastructureDescription') }}
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div
                class="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-primary">memory</span>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">
                  {{ $t('pages.services.hero.shimaSeikiTechnology') }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ $t('pages.services.hero.shimaSeikiTechnologyDescription') }}
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div
                class="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-primary">verified</span>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">
                  {{ $t('pages.services.hero.creativeFreedom') }}
                </h4>
                <p class="text-slate-600 dark:text-slate-400">
                  {{ $t('pages.services.hero.creativeFreedomDescription') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <div
            class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative group"
            data-alt="Macro shot of intricate high-gauge knitted fabric structure"
            style="
              background-image: url('/images/technical-infrastructure.jpg');
              background-size: cover;
              background-position: center;
            "
          >
            <div
              class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
            >
              <span class="text-white font-bold tracking-widest uppercase">
                {{ $t('pages.services.hero.viewTechnicalSpecs') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 italic">
        {{ $t('pages.services.hero.partnerWithExcellence') }}
      </h2>
      <p class="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-12">
        {{ $t('pages.services.hero.partnerWithExcellenceDescription') }}
      </p>
    </section>
  </div>
</template>
