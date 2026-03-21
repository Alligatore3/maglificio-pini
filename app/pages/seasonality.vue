<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
    <!-- Hero Section -->
    <div
      class="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-alt="Close up of dark textured truffles in natural soil environment"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_3Rzjm8Hu_23kKGN1P4p40ghC2DY6kUjMEkYa9cfqGltbXlvcJsE6RUmqk1o-iNlSiwsYQpPa7GxN7EB7NrjPwfoArvhJNmLrApcLydeY9TEIA1Lv3uqDru6NmS4wVxwjymimOUc8sGE2oL2Zj2K81S7J4MpIj4cc8O1oV65jkqRHOCHqPjIY6xNEevfJIZxG9WO7GkyocYNu4ZK4uodQYIKOcbMhI31Q2VjdjzeoXus6q3id33xkNhTeWMXLuuiSpBcCpo0lmeJR');
        "
      ></div>
      <div class="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <span
          class="inline-block py-1 px-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/40 text-primary text-xs font-bold tracking-widest uppercase mb-6"
        >
          Exclusive to Japan
        </span>
        <h1
          class="text-white text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter mb-6"
        >
          Australian Winter,<br />
          <span class="text-primary">Japanese Table</span>
        </h1>
        <p class="text-gray-200 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-10">
          Bridging the seasons. While Japan swelters in summer, our Manjimup soil yields the black
          diamond of winter. Experience the pinnacle of freshness in just 36 hours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-neutral-dark text-base font-bold tracking-wide hover:scale-105 transition-transform duration-200"
          >
            View Harvest Calendar
          </button>
          <button
            class="flex items-center justify-center rounded-full h-12 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold tracking-wide hover:bg-white/20 transition-colors"
          >
            Our Quality Promise
          </button>
        </div>
      </div>
    </div>
    <!-- Layout Container for Content -->
    <div class="flex flex-col items-center w-full py-16 px-4 md:px-10 lg:px-40">
      <div class="w-full max-w-[1024px]">
        <!-- Introduction / Philosophy -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div
            class="order-2 md:order-1 relative rounded-xl overflow-hidden h-80 md:h-96 shadow-2xl"
          >
            <img
              alt="Chef carefully inspecting a black truffle"
              class="w-full h-full object-cover"
              data-alt="Hands holding a fresh black truffle with care"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuARqbuhfrbivJxe7IndXQP2LGymuB6cBIUqyhW1BJx3YC8yGiGxiNjw69_ozJx2FFH3ZFoT7DVtyhVGYIU3vMMuOFB5aOpFEK66IhkPmjSFgNYNxu9AypUjU8NRCyW06SeUtfnuRi1NMLXCI1eDAqJ8YvXEZnrIPV1rTgogARrRAGAENQgNwp3OiP4S1PWNbzSXH0QrvckwRIL_GEgAiV9rRYRGevLfIT-tMhisPCkpHHJqVIa75T7C39Hv8D5kcxW2xZaCBnkYf9ME"
            />
            <div
              class="absolute bottom-4 left-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-mono border border-neutral-200 dark:border-neutral-700"
            >
              <span class="text-primary mr-2">●</span>Manjimup, WA
            </div>
          </div>
          <div class="order-1 md:order-2 flex flex-col gap-6">
            <h2 class="text-3xl font-bold tracking-tight">
              The Art of
              <span class="italic text-neutral-500 dark:text-neutral-400">Anshin</span> (Peace of
              Mind)
            </h2>
            <div class="w-12 h-1 bg-primary rounded-full"></div>
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              For the discerning Japanese palate, freshness is not just a quality—it is a promise.
              Trusffle brings the rare luxury of fresh Black Perigord Truffles to Tokyo's finest
              kitchens during the Japanese summer months, directly countering the northern
              hemisphere's off-season.
            </p>
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Every truffle is hand-graded, cleaned without chemicals, and chilled immediately to
              lock in the aroma that defines true luxury.
            </p>
          </div>
        </div>
        <!-- Seasonality Section -->
        <div class="mb-24">
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-neutral-200 dark:border-neutral-700 pb-4"
          >
            <div>
              <span class="text-primary font-bold tracking-wider text-xs uppercase mb-2 block"
                >Harvest Schedule</span
              >
              <h2 class="text-3xl font-bold tracking-tight">Seasonal Calendar</h2>
            </div>
            <p class="text-neutral-500 dark:text-neutral-400 text-sm mt-4 md:mt-0">
              Aligning Australian Winter with Japanese Summer
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Card June -->
            <div
              class="group bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div class="flex justify-between items-start mb-6">
                <div class="bg-primary/20 p-3 rounded-full text-neutral-dark dark:text-primary">
                  <span class="material-symbols-outlined">nest_eco_leaf</span>
                </div>
                <span class="text-sm font-mono text-neutral-400">06</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                June: Early Harvest
              </h3>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                The beginning of the season. Truffles are lighter in color with a delicate, subtle
                aroma perfect for seafood.
              </p>
              <div
                class="w-full bg-neutral-100 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden"
              >
                <div class="bg-neutral-400 h-full w-1/3"></div>
              </div>
              <p class="text-xs text-right mt-2 text-neutral-400">Intensity: Low</p>
            </div>
            <!-- Card July -->
            <div
              class="group bg-neutral-900 dark:bg-neutral-700 rounded-xl p-8 border border-neutral-800 dark:border-neutral-600 shadow-xl relative overflow-hidden transform scale-105 z-10"
            >
              <div
                class="absolute top-0 right-0 bg-primary text-neutral-900 text-xs font-bold px-3 py-1 rounded-bl-lg"
              >
                PEAK
              </div>
              <div class="flex justify-between items-start mb-6">
                <div class="bg-primary p-3 rounded-full text-neutral-900">
                  <span class="material-symbols-outlined">diamond</span>
                </div>
                <span class="text-sm font-mono text-neutral-400">07</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-white">July: Peak Season</h3>
              <p class="text-sm text-neutral-300 mb-4">
                The height of winter. Truffles achieve full marbling and a rich, complex fragrance
                that fills the room.
              </p>
              <div class="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                <div class="bg-primary h-full w-full"></div>
              </div>
              <p class="text-xs text-right mt-2 text-primary">Intensity: High</p>
            </div>
            <!-- Card August -->
            <div
              class="group bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              <div class="flex justify-between items-start mb-6">
                <div class="bg-primary/20 p-3 rounded-full text-neutral-dark dark:text-primary">
                  <span class="material-symbols-outlined">schedule</span>
                </div>
                <span class="text-sm font-mono text-neutral-400">08</span>
              </div>
              <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                August: Late Harvest
              </h3>
              <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                Mature harvest. The flavor profile deepens, becoming earthier and more intense.
                Ideal for sauces.
              </p>
              <div
                class="w-full bg-neutral-100 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden"
              >
                <div class="bg-neutral-400 h-full w-3/4"></div>
              </div>
              <p class="text-xs text-right mt-2 text-neutral-400">Intensity: Med-High</p>
            </div>
          </div>
        </div>
        <!-- Logistics Flow -->
        <div
          class="mb-24 bg-white dark:bg-neutral-800/50 rounded-2xl p-8 md:p-12 border border-neutral-100 dark:border-neutral-700/50"
        >
          <div class="text-center mb-16">
            <span class="text-primary font-bold tracking-wider text-xs uppercase mb-2 block"
              >Logistics</span
            >
            <h2 class="text-3xl font-bold tracking-tight mb-4">36 Hours from Earth to Plate</h2>
            <p class="text-neutral-500 max-w-xl mx-auto">
              Our streamlined export process ensures that the truffle served in Tokyo tonight was in
              Australian soil yesterday morning.
            </p>
          </div>
          <div class="relative">
            <!-- Connecting Line (Desktop) -->
            <div
              class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 -translate-y-1/2 z-0"
            ></div>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              <!-- Step 1 -->
              <div class="flex flex-col items-center text-center group">
                <div
                  class="w-16 h-16 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4 shadow-sm"
                >
                  <span class="material-symbols-outlined text-neutral-500 group-hover:text-primary"
                    >agriculture</span
                  >
                </div>
                <h4 class="font-bold text-sm mb-1">Harvest</h4>
                <span class="text-xs text-neutral-400 font-mono">06:00 AM</span>
                <p class="text-xs text-neutral-500 mt-2">Hunted at dawn with trained dogs.</p>
              </div>
              <!-- Step 2 -->
              <div class="flex flex-col items-center text-center group">
                <div
                  class="w-16 h-16 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4 shadow-sm"
                >
                  <span class="material-symbols-outlined text-neutral-500 group-hover:text-primary"
                    >water_drop</span
                  >
                </div>
                <h4 class="font-bold text-sm mb-1">Clean & Chill</h4>
                <span class="text-xs text-neutral-400 font-mono">10:00 AM</span>
                <p class="text-xs text-neutral-500 mt-2">Washed, graded, and cooled to 2°C.</p>
              </div>
              <!-- Step 3 -->
              <div class="flex flex-col items-center text-center group">
                <div
                  class="w-16 h-16 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4 shadow-sm"
                >
                  <span class="material-symbols-outlined text-neutral-500 group-hover:text-primary"
                    >verified_user</span
                  >
                </div>
                <h4 class="font-bold text-sm mb-1">Export QA</h4>
                <span class="text-xs text-neutral-400 font-mono">02:00 PM</span>
                <p class="text-xs text-neutral-500 mt-2">Strict export certification checks.</p>
              </div>
              <!-- Step 4 -->
              <div class="flex flex-col items-center text-center group">
                <div
                  class="w-16 h-16 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-600 group-hover:border-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-4 shadow-sm"
                >
                  <span class="material-symbols-outlined text-neutral-500 group-hover:text-primary"
                    >flight_takeoff</span
                  >
                </div>
                <h4 class="font-bold text-sm mb-1">Departure</h4>
                <span class="text-xs text-neutral-400 font-mono">08:00 PM</span>
                <p class="text-xs text-neutral-500 mt-2">Direct flight to Tokyo/Osaka.</p>
              </div>
              <!-- Step 5 -->
              <div class="flex flex-col items-center text-center group">
                <div
                  class="w-16 h-16 rounded-full bg-primary text-neutral-900 border-2 border-primary shadow-lg shadow-primary/30 flex items-center justify-center mb-4 scale-110"
                >
                  <span class="material-symbols-outlined">restaurant</span>
                </div>
                <h4 class="font-bold text-sm mb-1 text-primary">Arrival</h4>
                <span class="text-xs text-neutral-400 font-mono">Next Day</span>
                <p class="text-xs text-neutral-500 mt-2">Customs cleared & delivered.</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Freshness Tech & Quality -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <!-- Tech Card -->
          <div
            class="bg-neutral-900 text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative"
            data-alt="Abstract dark cool mist texture representing cold chain"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcphIxLLqCiBCvjNhc69QzNEKFjFwrqpwfbMavDK9oIHlAxLPjlqk_o5hGzAE2QxlhgofEUWEgOikbybU6emXPqoQBEX6N0RFxJQRpx6h1OVE6Z-qIG31dxmdSxpimQcJ-E6ZqS4TjMLaLVIrIX-h_bONjnQ7a6XPx6txwyOC79nsRHq5PjyqrTfLzhp83-VCdfEJYekMCQur4pQiH_m_f_QvZ_j_yeIca4qjVWbuqoIe3luvL_VdC_czl5PHe840sGt0GcNqdIqMl');
              background-blend-mode: overlay;
              background-size: cover;
            "
          >
            <div class="absolute inset-0 bg-neutral-900/80 z-0"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-4 text-primary">
                <span class="material-symbols-outlined">thermostat</span>
                <span class="uppercase tracking-widest text-xs font-bold"
                  >Cold Chain Technology</span
                >
              </div>
              <h3 class="text-2xl font-bold mb-4">Preserved at 2°C</h3>
              <p class="text-neutral-300 text-sm leading-relaxed mb-8">
                From the moment of harvest, our truffles never break the cold chain. We utilize
                specialized vacuum-seal packaging and temperature loggers to ensure the aroma is
                suspended in time until it reaches your kitchen.
              </p>
            </div>
            <div class="relative z-10 flex gap-4">
              <div
                class="bg-white/10 backdrop-blur rounded-lg p-3 flex-1 text-center border border-white/10"
              >
                <span class="block text-2xl font-bold text-primary">98%</span>
                <span class="text-[10px] text-neutral-400 uppercase">Moisture Retention</span>
              </div>
              <div
                class="bg-white/10 backdrop-blur rounded-lg p-3 flex-1 text-center border border-white/10"
              >
                <span class="block text-2xl font-bold text-primary"><36h</span>
                <span class="text-[10px] text-neutral-400 uppercase">Transit Time</span>
              </div>
            </div>
          </div>
          <!-- Standards Card -->
          <div
            class="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-100 dark:border-neutral-700 flex flex-col"
          >
            <div class="flex items-center gap-2 mb-4 text-neutral-500">
              <span class="material-symbols-outlined">workspace_premium</span>
              <span class="uppercase tracking-widest text-xs font-bold">Quality Control</span>
            </div>
            <h3 class="text-2xl font-bold mb-4">The Triple Check Standard</h3>
            <p class="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8">
              We don't just ship truffles; we curate them. Every export-grade truffle undergoes a
              rigorous three-step inspection process tailored for the Japanese market.
            </p>
            <div class="flex flex-col gap-3 mt-auto">
              <div
                class="flex items-center gap-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-700/50"
              >
                <div
                  class="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-full flex items-center justify-center"
                >
                  <span class="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h5 class="text-sm font-bold">Shape & Symmetry</h5>
                  <p class="text-xs text-neutral-400">Perfectly round, no deep cuts.</p>
                </div>
              </div>
              <div
                class="flex items-center gap-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-700/50"
              >
                <div
                  class="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-full flex items-center justify-center"
                >
                  <span class="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h5 class="text-sm font-bold">Aroma Intensity</h5>
                  <p class="text-xs text-neutral-400">Hand-smelled for potency.</p>
                </div>
              </div>
              <div
                class="flex items-center gap-4 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-700/50"
              >
                <div
                  class="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1.5 rounded-full flex items-center justify-center"
                >
                  <span class="material-symbols-outlined text-sm">check</span>
                </div>
                <div>
                  <h5 class="text-sm font-bold">Internal Gleba</h5>
                  <p class="text-xs text-neutral-400">Micro-incision to check marbling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Footer CTA -->
        <div
          class="bg-primary/10 dark:bg-primary/5 rounded-3xl p-10 md:p-16 text-center border border-primary/20 relative overflow-hidden"
        >
          <div class="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
          <div
            class="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"
          ></div>
          <h2 class="relative z-10 text-3xl md:text-4xl font-bold mb-6">Secure Your Allocation</h2>
          <p class="relative z-10 text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto mb-8">
            Our premium harvest is limited. Register now for the upcoming season to guarantee
            priority delivery for your establishment.
          </p>
          <div class="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              class="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-neutral-dark text-base font-bold tracking-wide hover:bg-yellow-300 shadow-lg shadow-primary/20 transition-all"
            >
              Register for Wholesale
            </button>
            <button
              class="flex items-center justify-center rounded-full h-12 px-8 bg-transparent border-2 border-neutral-300 dark:border-neutral-600 text-neutral-dark dark:text-white text-base font-bold tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
