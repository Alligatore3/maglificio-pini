<template>
  <div class="relative flex min-h-screen flex-col">
    <!-- Hero Section -->
    <main class="flex-1">
      <section class="relative h-[65vh] w-full overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          data-alt="Macro close-up of high-end Italian cashmere knitwear texture"
          style="
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%),
              url('/images/excellence-in-knitwear.jpg');
          "
        ></div>
        <div class="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div class="max-w-[900px]">
            <p class="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/80">
              {{ $t('pages.index.heroKnitwear') }}
            </p>
            <h1
              class="text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl"
              v-html="$t('pages.index.heroMadeInItaly')"
            />
          </div>
        </div>
      </section>
      <!-- Stats Bar -->
      <section class="mx-auto max-w-[1200px] px-6 py-16">
        <div
          class="flex flex-wrap justify-between gap-8 border-y border-[#e6dbdd] dark:border-[#3d2025] py-12"
        >
          <div
            class="flex min-w-[200px] flex-1 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span class="text-5xl font-extrabold text-primary">3</span>
            <h3 class="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">
              {{ $t('pages.index.corePillars') }}
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">
              {{ $t('pages.index.corePillarsDescription') }}
            </p>
          </div>
          <div
            class="flex min-w-[200px] flex-1 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span class="text-5xl font-extrabold text-primary">100+</span>
            <h3 class="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">
              {{ $t('pages.index.archivePieces') }}
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">
              {{ $t('pages.index.archivePiecesDescription') }}
            </p>
          </div>
          <div
            class="flex min-w-[200px] flex-1 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span class="text-5xl font-extrabold text-primary">1</span>
            <h3 class="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">
              {{ $t('pages.index.ethicalStandard') }}
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">
              {{ $t('pages.index.ethicalStandardDescription') }}
            </p>
          </div>
        </div>
      </section>
      <!-- How We Work -->
      <section class="bg-[#f2eced] dark:bg-[#2a1619] py-24">
        <div class="mx-auto max-w-[1200px] px-6">
          <div class="mb-16 text-center">
            <h2 class="text-3xl font-extrabold tracking-tight lg:text-4xl">
              {{ $t('pages.index.howWeWork') }}
            </h2>
            <div class="mx-auto mt-4 h-1 w-20 bg-primary"></div>
          </div>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm z-10"
              >
                <span class="material-symbols-outlined text-primary text-3xl">lightbulb</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">
                1.
                {{ $t('pages.index.consultation') }}
              </h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                {{ $t('pages.index.consultationDescription') }}
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm z-10"
              >
                <span class="material-symbols-outlined text-primary text-3xl">architecture</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">
                2.
                {{ $t('pages.index.prototyping') }}
              </h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                {{ $t('pages.index.prototypingDescription') }}
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm z-10"
              >
                <span class="material-symbols-outlined text-primary text-3xl"
                  >precision_manufacturing</span
                >
              </div>
              <h4 class="mb-2 text-lg font-bold">
                3.
                {{ $t('pages.index.production') }}
              </h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                {{ $t('pages.index.productionDescription') }}
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm z-10"
              >
                <span class="material-symbols-outlined text-primary text-3xl">public</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">
                4.
                {{ $t('pages.index.logistics') }}
              </h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                {{ $t('pages.index.logisticsDescription') }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Split Market Section -->
      <section class="grid grid-cols-1 lg:grid-cols-2">
        <!-- China Market -->
        <div
          class="group relative flex flex-col justify-center bg-white dark:bg-background-dark p-12 lg:p-24 overflow-hidden"
        >
          <div class="relative z-10">
            <span
              class="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary"
            >
              {{ $t('pages.index.greaterChina') }}
            </span>

            <h3 class="mb-8 text-4xl font-extrabold">
              {{ $t('pages.index.greaterChinaDescription') }}
            </h3>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">bolt</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.greaterChinaSpeedToMarket') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.greaterChinaSpeedToMarketDescription') }}
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">chat</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.greaterChinaSeamlessCommunication') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.greaterChinaSeamlessCommunicationDescription') }}
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">local_shipping</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.greaterChinaCustomsExpertise') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.greaterChinaCustomsExpertiseDescription') }}
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="mailto:p.fugazzaro.noboco@gmail.com?subject=Greater China partnership — Maglificio Pini"
              class="block cursor-pointer mt-12 text-sm font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8"
            >
              Explore China Partnership →
            </a>
          </div>
          <div
            class="absolute bottom-0 right-0 h-40 w-40 opacity-10 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-20"
          >
            <img
              alt="Shanghai Skyline"
              data-location="Shanghai"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv8igSoEupyRusqcOodQ91jnwwj3pv84ReFXRMvW0-DJ9Y81LKZyTzxLBG3CS_vXA4UFVK-lvU4YaPoVLnHYZLMGgo50izxxX35jZKSu5rEK3_i9p_alNKjPzSffTdqysuGCpYirWFnEiKgRMUMlfoiLrFwEDRMxCPaX-RyyCCc-5O4oF94-bH7CC4r3tFXTdhPkjqMOWAh-i4PPX7YYC1cnOTNsQcL1FZwoxI2XUQJY__9P9H9jAeD6ZB78pjDcdWAJl7ljbGqhgS"
            />
          </div>
        </div>
        <!-- Japan Market -->
        <div
          class="group relative flex flex-col justify-center bg-[#fdfafb] dark:bg-[#1f0d10] p-12 lg:p-24 overflow-hidden"
        >
          <div class="relative z-10">
            <span
              class="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary"
            >
              {{ $t('pages.index.japan') }}
            </span>
            <h3 class="mb-8 text-4xl font-extrabold">
              {{ $t('pages.index.japanDescription') }}
            </h3>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">verified</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.japanTotalQualityManagement') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.japanTotalQualityManagementDescription') }}
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">brush</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.japanArtisanalAlignment') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.japanArtisanalAlignmentDescription') }}
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">support_agent</span>
                <div>
                  <p class="font-bold">
                    {{ $t('pages.index.japanLocalSupport') }}
                  </p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    {{ $t('pages.index.japanLocalSupportDescription') }}
                  </p>
                </div>
              </li>
            </ul>
            <a
              href="mailto:p.fugazzaro.noboco@gmail.com?subject=Japan partnership — Maglificio Pini"
              class="block cursor-pointer mt-12 text-sm font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8"
            >
              {{ $t('pages.index.exploreJapanPartnership') }}
            </a>
          </div>
          <div
            class="absolute bottom-0 right-0 h-40 w-40 opacity-10 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-20"
          >
            <img
              alt="Tokyo Street"
              data-location="Tokyo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUVE4HUeGSbD7zniskcqC_2a_SYh_Jr2wpaQvBprnjghmYpxZqP01j3YFiDFOaGmzzGlCsw1uRH_uGGnxNGcrhKTneJsDgG7ELEOo6Wjn6Kv-iAl6KwyQQbpaC-Lc2_-LVEtX1Aaw6g4qAMu5tK8GPdTRCSCLAJpQPUrF4I61iw3COvpE3oxF-Z-bDVSthJa2OS3cfLN-OczG0CpRatMQTWoitb79jHj_3QDWuqwbRsMxPGiRSEee4rIYGCM10WKnaFbEgMWudsVki"
            />
          </div>
        </div>
      </section>
      <!-- B2B Lead Capture -->
      <section class="mx-auto max-w-[1200px] px-6 py-24">
        <div class="flex flex-col gap-16 lg:flex-row">
          <div class="lg:w-1/3">
            <h2
              v-html="$t('pages.index.beginYourJourney')"
              class="text-4xl font-extrabold leading-tight"
            />
            <p class="mt-6 text-lg text-[#896168] dark:text-[#a5868c]">
              {{ $t('pages.index.beginYourJourneyDescription') }}
            </p>
            <div class="mt-10 space-y-4">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary">mail</span>
                <a href="mailto:production@maglificiopini.it" class="font-bold"
                  >production@maglificiopini.it</a
                >
              </div>
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary">call</span>
                <a href="tel:+390543123456" class="font-bold">+39 0543 123456</a>
              </div>
            </div>
          </div>
          <RequestConsultationForm />
        </div>
      </section>
    </main>
  </div>
</template>
