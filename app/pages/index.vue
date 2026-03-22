<template>
  <div class="relative flex min-h-screen flex-col">
    <!-- Hero Section -->
    <main class="flex-1">
      <section class="relative h-[85vh] w-full overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          data-alt="Macro close-up of high-end Italian cashmere knitwear texture"
          style="
            background-image:
              linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%),
              url('https://lh3.googleusercontent.com/aida-public/AB6AXuCscN0olCRoRamNi6T7kpFRGYIIxGO5zYPJjdNhaVqk_w8BvYmF0NxrEJQEd1PazS-il7u4VLzC6cCdmWQmaKHflyZwZu7mohJq7-avAVMaDqXxPvxVpW6OxP6lYOTzoKsiIpEaXrCwBnngM-IaXWat_l9t3r3BfGtyhvGJeKAikuElvcL9I1LYq0RDssQir2r_CNsAIVZFMFSAbwQRnR_rlVNbJ-nMvhG5RPcZJJQHTE_5sFWSsDw56cs982cdsQz9dp65kn54sdtl');
          "
        ></div>
        <div class="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div class="max-w-[900px]">
            <p class="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/80">
              Excellence in Knitwear
            </p>
            <h1 class="text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl">
              Made in Italy manufacturing <br class="hidden lg:block" />
              for Asian luxury brands
            </h1>
            <p class="mt-8 text-lg font-light leading-relaxed text-white/90 lg:text-xl">
              Bridging Italian craftsmanship with the world's most discerning fashion houses
              <br class="hidden md:block" />
              across Shanghai, Tokyo, and beyond.
            </p>
            <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <button
                class="min-w-[220px] rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95"
              >
                Focus on China
              </button>
              <button
                class="min-w-[220px] rounded-lg bg-white/10 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Focus on Japan
              </button>
            </div>
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
              Core Pillars
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">Craftsmanship, Tech, Design</p>
          </div>
          <div
            class="flex min-w-[200px] flex-1 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span class="text-5xl font-extrabold text-primary">100+</span>
            <h3 class="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">
              Archive Pieces
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">Historical Italian Heritage</p>
          </div>
          <div
            class="flex min-w-[200px] flex-1 flex-col items-center gap-1 text-center lg:items-start lg:text-left"
          >
            <span class="text-5xl font-extrabold text-primary">1</span>
            <h3 class="text-sm font-bold uppercase tracking-widest text-[#181112] dark:text-white">
              Ethical Standard
            </h3>
            <p class="text-sm text-[#896168] dark:text-[#a5868c]">
              Sustainability-First Production
            </p>
          </div>
        </div>
      </section>
      <!-- How We Work -->
      <section class="bg-[#f2eced] dark:bg-[#2a1619] py-24">
        <div class="mx-auto max-w-[1200px] px-6">
          <div class="mb-16 text-center">
            <h2 class="text-3xl font-extrabold tracking-tight lg:text-4xl">
              How We Work: The Path to Perfection
            </h2>
            <div class="mx-auto mt-4 h-1 w-20 bg-primary"></div>
          </div>
          <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm"
              >
                <span class="material-symbols-outlined text-primary text-3xl">lightbulb</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">1. Consultation</h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                Defining creative vision, silhouettes, and premium yarn selection.
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm"
              >
                <span class="material-symbols-outlined text-primary text-3xl">architecture</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">2. Prototyping</h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                Precision sampling in our Italian atelier using cutting-edge Stoll machinery.
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="relative flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm"
              >
                <span class="material-symbols-outlined text-primary text-3xl"
                  >precision_manufacturing</span
                >
              </div>
              <h4 class="mb-2 text-lg font-bold">3. Production</h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                Scalable high-end manufacturing with meticulous quality control.
              </p>
              <div
                class="absolute right-0 top-8 hidden h-[2px] w-full translate-x-1/2 bg-[#e6dbdd] dark:bg-[#3d2025] lg:block"
              ></div>
            </div>
            <div class="flex flex-col items-center text-center">
              <div
                class="mb-6 flex size-16 items-center justify-center rounded-full bg-white dark:bg-[#3d2025] shadow-sm"
              >
                <span class="material-symbols-outlined text-primary text-3xl">public</span>
              </div>
              <h4 class="mb-2 text-lg font-bold">4. Logistics</h4>
              <p class="text-sm leading-relaxed text-[#896168] dark:text-[#a5868c]">
                Direct, secure delivery to major Asian luxury hubs and distribution centers.
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
              >Greater China</span
            >
            <h3 class="mb-8 text-4xl font-extrabold">Agility for the Modern Silk Road</h3>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">bolt</span>
                <div>
                  <p class="font-bold">Speed to Market</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    Rapid response timelines for luxury collections and limited drops.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">chat</span>
                <div>
                  <p class="font-bold">Seamless Communication</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    Dedicated team fluent in regional luxury logistics and WeChat-ready.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">local_shipping</span>
                <div>
                  <p class="font-bold">Customs Expertise</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    White-glove import/export handling for tier-1 Chinese cities.
                  </p>
                </div>
              </li>
            </ul>
            <button
              class="mt-12 text-sm font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8"
            >
              Explore China Partnership →
            </button>
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
              >Japan</span
            >
            <h3 class="mb-8 text-4xl font-extrabold">Precision for the Discerning Eye</h3>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">verified</span>
                <div>
                  <p class="font-bold">Total Quality Management</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    Stringent QC processes aligned with Japanese luxury standards.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">brush</span>
                <div>
                  <p class="font-bold">Artisanal Alignment</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    Deep respect for Japanese minimalist design and craft philosophies.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <span class="material-symbols-outlined mt-1 text-primary">support_agent</span>
                <div>
                  <p class="font-bold">Local Support</p>
                  <p class="text-sm text-[#896168] dark:text-[#a5868c]">
                    Dedicated account management for Tokyo and Osaka fashion districts.
                  </p>
                </div>
              </li>
            </ul>
            <button
              class="mt-12 text-sm font-bold uppercase tracking-widest text-primary hover:underline underline-offset-8"
            >
              Explore Japan Partnership →
            </button>
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
            <h2 class="text-4xl font-extrabold leading-tight">
              Begin Your <br />
              Italian Chapter
            </h2>
            <p class="mt-6 text-lg text-[#896168] dark:text-[#a5868c]">
              Connect with our production experts to discuss your collection's scale, yarn
              requirements, and target markets.
            </p>
            <div class="mt-10 space-y-4">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary">mail</span>
                <span class="font-bold">production@maglificiopini.it</span>
              </div>
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary">call</span>
                <span class="font-bold">+39 0543 123456</span>
              </div>
            </div>
          </div>
          <div class="flex-1 rounded-xl bg-white dark:bg-[#2a1619] p-8 shadow-xl lg:p-12">
            <form class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
                  >Company Name</label
                >
                <input
                  class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
                  placeholder="Luxury Fashion Group"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
                  >Market Interest</label
                >
                <select
                  class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
                >
                  <option>Greater China</option>
                  <option>Japan</option>
                  <option>Both Markets</option>
                  <option>Other / Global</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
                  >Professional Email</label
                >
                <input
                  class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label
                  class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
                  >Project Volume</label
                >
                <select
                  class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
                >
                  <option>Small Batch (Artisanal)</option>
                  <option>Mid-Scale (1000+ pieces)</option>
                  <option>Large Scale (5000+ pieces)</option>
                </select>
              </div>
              <div class="flex flex-col gap-2 md:col-span-2">
                <label
                  class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
                  >Your Requirements</label
                >
                <textarea
                  class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
                  placeholder="Tell us about your seasonal needs..."
                  rows="4"
                ></textarea>
              </div>
              <div class="md:col-span-2">
                <button
                  class="w-full rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1 active:scale-[0.98]"
                  type="submit"
                >
                  Request Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
