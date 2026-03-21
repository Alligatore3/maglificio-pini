<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
    <!-- Hero Section -->
    <div class="relative w-full px-4 pt-4 pb-12 sm:px-6 lg:px-8">
      <div
        class="mx-auto max-w-7xl overflow-hidden rounded-xl md:rounded-3xl relative min-h-[600px] flex flex-col items-center justify-center text-center p-8 lg:p-16 bg-cover bg-center"
        data-alt="Close up high resolution shot of fresh black truffles covered in dark soil, elegant and earthy lighting"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%),
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4g90f0Ka4volO2CTeE3iFoStEptqcpVV1fNZRlZ_sPAFqLNH9gC26KO2L9bkf2tHMJgzuizjau5Yu5aSnnAQOwB113LsM8r2AIZOp1h6y09fiPPVmtebFK1DjRXgDYsP3o0GWbmgd1chj0zf5-nokV_S0knnxhA4P9cO1wuhl3PfEJ7fiQxNPgiDyFqE1lWTi4I3x_BleFxFNEKTlRbJ62rNCQ5d8SF9220EllU0PUsWKLVv2XZTvIhG6XNzGMtM0nDLE3K9xhJ6B');
        "
      >
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative z-10 flex flex-col items-center gap-6 max-w-3xl animate-fade-in-up">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-xs font-semibold uppercase tracking-wider text-white"
              >Harvesting Now</span
            >
          </div>
          <h1
            class="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Premium Australian Truffles,<br />Crafted for Japan.
          </h1>
          <p class="max-w-xl text-lg text-white/90 sm:text-xl font-light leading-relaxed">
            Direct from the pristine forests of Western Australia to the finest kitchens in Tokyo.
            Uncompromised quality, delivered fresh.
          </p>
          <div class="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              class="h-12 w-full sm:w-auto px-8 rounded-full bg-primary text-primary-content text-base font-bold hover:bg-[#eae605] transition-colors shadow-xl shadow-black/20"
            >
              View Harvest Schedule
            </button>
            <button
              class="h-12 w-full sm:w-auto px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-medium hover:bg-white/20 transition-colors"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </div>
      <!-- Floating Status Bar -->
      <div class="relative -mt-8 mx-auto max-w-4xl px-4 z-20">
        <div
          class="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white dark:bg-[#2f2e1a] p-4 shadow-xl border border-border-color/50 dark:border-white/5"
        >
          <div class="flex items-center gap-4 px-2">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4e6] dark:bg-white/10 text-text-main dark:text-white"
            >
              <span class="material-symbols-outlined">calendar_month</span>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400"
              >
                Current Season
              </p>
              <p class="font-bold text-text-main dark:text-white">Winter Black Truffle</p>
            </div>
          </div>
          <div class="hidden h-8 w-px bg-border-color md:block"></div>
          <div class="flex items-center gap-4 px-2">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4e6] dark:bg-white/10 text-text-main dark:text-white"
            >
              <span class="material-symbols-outlined">flight_takeoff</span>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400"
              >
                Next Shipment
              </p>
              <p class="font-bold text-text-main dark:text-white">Tokyo: Tomorrow, 10 AM</p>
            </div>
          </div>
          <div class="hidden h-8 w-px bg-border-color md:block"></div>
          <div class="flex items-center gap-4 px-2">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4e6] dark:bg-white/10 text-text-main dark:text-white"
            >
              <span class="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wider text-text-muted dark:text-gray-400"
              >
                Quality
              </p>
              <p class="font-bold text-text-main dark:text-white">Grade A+ Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Introduction Section -->
    <section class="py-20 lg:py-24" id="story">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <span class="material-symbols-outlined text-4xl text-primary mb-4">spa</span>
        <h2
          class="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl mb-6"
        >
          The Trusffle Heritage
        </h2>
        <p class="text-lg leading-relaxed text-text-muted dark:text-gray-300">
          Founded in the rich, loamy soils of Manjimup, Western Australia, Trusffle brings together
          traditional European truffle hunting techniques with Australia's unique terroir. We
          understand the precision required by Japanese cuisine, which is why every truffle is
          hand-selected, cleaned, and graded specifically for the Japanese market.
        </p>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-12 bg-white dark:bg-[#1a190b]" id="quality">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-3">
          <!-- Feature 1 -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-white/5 p-8 transition-all hover:bg-[#f4f4e6] dark:hover:bg-white/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-content dark:text-primary"
            >
              <span class="material-symbols-outlined icon-filled">sunny</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-text-main dark:text-white">
              Counter-Seasonal Advantage
            </h3>
            <p class="text-text-muted dark:text-gray-400 leading-relaxed">
              Enjoy fresh black truffles during the Japanese summer. Our winter harvest in Australia
              perfectly complements Japan's seasonal menus when European supply is dormant.
            </p>
          </div>
          <!-- Feature 2 -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-white/5 p-8 transition-all hover:bg-[#f4f4e6] dark:hover:bg-white/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-content dark:text-primary"
            >
              <span class="material-symbols-outlined icon-filled">security</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-text-main dark:text-white">
              Food Safety & Traceability
            </h3>
            <p class="text-text-muted dark:text-gray-400 leading-relaxed">
              HACCP certified and fully traceable from soil to plate. We prioritize strict hygiene
              standards to meet the expectations of Japan's most rigorous chefs.
            </p>
          </div>
          <!-- Feature 3 -->
          <div
            class="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-white/5 p-8 transition-all hover:bg-[#f4f4e6] dark:hover:bg-white/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary-content dark:text-primary"
            >
              <span class="material-symbols-outlined icon-filled">schedule</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-text-main dark:text-white">48-Hour Freshness</h3>
            <p class="text-text-muted dark:text-gray-400 leading-relaxed">
              Our optimized logistics network ensures that truffles harvested on Monday morning are
              in Tokyo kitchens by Wednesday. Freshness is our promise.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Image Break / Visual Interest -->
    <section class="py-20 px-4">
      <div
        class="mx-auto max-w-7xl rounded-3xl overflow-hidden relative h-[500px] flex items-center bg-cover bg-fixed bg-center"
        data-alt="Chef shaving black truffles over a pasta dish in a high end restaurant setting"
        style="
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwgGpJVc-d_SBSiC9KueGA0FUkTqJB57O0dC5r7E6jIlc8hT3eUcLxJ6BZHIFz6NvFj2twGAgq8Xhw61mMOcdQFGw0fWLxPjDU7LoTODTZg47L-urV4CYURNSk7u_dd5GHePwoYuQuB2IJhOy9MNWrdUplaqBXkmYUKp4KHh7bd-TNXzIuLx5q5ktmgXCVISFI_dA2ksSy6UvYkETGlrP8bQOT195S33f9nfmSdesghQUsVEzcOQ3FUOoIfoF8TOMY3k0o61h3r9s4');
        "
      >
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 p-12 max-w-2xl">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6">Elevate Your Menu</h2>
          <p class="text-xl text-white/90 mb-8 font-medium">
            Join the exclusive network of top-tier restaurants in Tokyo, Osaka, and Kyoto serving
            Trusffle.
          </p>
          <button
            class="h-12 px-8 rounded-full bg-primary text-primary-content text-sm font-bold hover:bg-white hover:text-black transition-colors"
          >
            Request a Sample
          </button>
        </div>
      </div>
    </section>
    <!-- Social Proof / Trusted By -->
    <section class="py-16 bg-background-light dark:bg-background-dark">
      <div class="mx-auto max-w-7xl px-6 text-center">
        <h3
          class="text-sm font-bold uppercase tracking-widest text-text-muted dark:text-gray-500 mb-10"
        >
          Trusted by Professionals Across Japan
        </h3>
        <div
          class="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <!-- Logo Placeholders using text for simplicity but styled like logos -->
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-4xl">restaurant</span>
            <span class="font-serif text-2xl font-bold">Ginza K.</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-4xl">water_drop</span>
            <span class="font-serif text-2xl font-bold">Umi & Earth</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-4xl">local_fire_department</span>
            <span class="font-serif text-2xl font-bold">ROKKA</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-4xl">eco</span>
            <span class="font-serif text-2xl font-bold">Naturale</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section
      class="py-20 lg:py-28 bg-white dark:bg-[#1a190b] relative overflow-hidden"
      id="contact"
    >
      <!-- Decorative background element -->
      <div
        class="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      ></div>
      <div class="mx-auto max-w-4xl px-6 relative z-10">
        <div
          class="rounded-3xl bg-background-light dark:bg-white/5 border border-border-color dark:border-white/10 p-8 md:p-12 shadow-2xl"
        >
          <div class="flex flex-col md:flex-row gap-12">
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-text-main dark:text-white mb-4">
                Partner with Trusffle
              </h2>
              <p class="text-text-muted dark:text-gray-300 mb-8">
                We are currently accepting applications for the upcoming season. Wholesale inquiries
                only.
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-3 text-text-main dark:text-white">
                  <span class="material-symbols-outlined text-primary">mail</span>
                  <span>orders@trusffle.com.au</span>
                </div>
                <div class="flex items-center gap-3 text-text-main dark:text-white">
                  <span class="material-symbols-outlined text-primary">call</span>
                  <span>+61 (08) 9123 4567</span>
                </div>
                <div class="flex items-center gap-3 text-text-main dark:text-white">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                  <span>Manjimup, Western Australia</span>
                </div>
              </div>
            </div>
            <div
              class="flex-1 bg-white dark:bg-black/20 rounded-2xl p-6 border border-border-color dark:border-white/5"
            >
              <form class="flex flex-col gap-4">
                <div>
                  <label
                    class="block text-xs font-bold uppercase text-text-muted dark:text-gray-500 mb-1"
                    >Company Name</label
                  >
                  <input
                    class="w-full rounded-lg border-border-color bg-background-light dark:bg-white/5 px-4 py-2 text-text-main dark:text-white focus:border-primary focus:ring-primary"
                    placeholder="e.g. Restaurant Tokyo"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="block text-xs font-bold uppercase text-text-muted dark:text-gray-500 mb-1"
                    >Email</label
                  >
                  <input
                    class="w-full rounded-lg border-border-color bg-background-light dark:bg-white/5 px-4 py-2 text-text-main dark:text-white focus:border-primary focus:ring-primary"
                    placeholder="chef@example.com"
                    type="email"
                  />
                </div>
                <button
                  class="mt-2 w-full rounded-full bg-primary py-3 text-sm font-bold text-primary-content hover:bg-[#eae605] transition-colors"
                  type="button"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
