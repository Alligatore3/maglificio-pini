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
          <span class="text-primary font-bold tracking-[0.2em] uppercase text-xs"
            >Innovation & Heritage</span
          >
          <h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            The Nexus of Technology and Craftsmanship
          </h1>
        </div>
        <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          Where Italian artisanal heritage meets the pinnacle of knitting technology for global
          luxury brands. We bridge the gap between creative vision and technical reality.
        </p>
        <div class="flex flex-wrap gap-4 pt-4">
          <a
            class="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform"
            href="/pdf/Maglificio-Pini-Technical-Fleet.pdf"
            target="_blank"
          >
            Explore Technical Fleet
          </a>
          <a
            class="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            href="/pdf/Maglificio-Pini-Portfolio.pdf"
            target="_blank"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
    <!-- Our Services Section -->
    <section class="mb-32">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-4xl font-bold mb-6">Our Services</h2>
          <p class="text-xl text-slate-600 dark:text-slate-400">
            An end-to-end narrative of excellence in knitwear development, from initial yarn
            selection to global logistics.
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
            Creative Research
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Deep exploration of yarn archives and stitch structures to define seasonal identities.
            We curate a vast library of technical solutions for the world's most demanding
            designers.
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
            Precision Sampling
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Translating complex designs into technical prototypes with meticulous attention to
            detail. Every gauge, tension, and finishing is calibrated to perfection.
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
            Scale Production
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            Flawless execution of high-gauge knitwear using our state-of-the-art manufacturing
            infrastructure. Consistency and quality control at the highest industrial standards.
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
          <h2 class="text-4xl font-bold mb-8">Technical Infrastructure</h2>
          <div class="space-y-8">
            <div class="flex gap-6">
              <div
                class="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-primary">settings_suggest</span>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">The Stoll Fleet</h4>
                <p class="text-slate-600 dark:text-slate-400">
                  German precision engineering allowing for unprecedented pattern complexity and
                  garment shaping. From 1.5 to 18 gauge capabilities.
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
                <h4 class="text-xl font-bold mb-2">Shima Seiki Technology</h4>
                <p class="text-slate-600 dark:text-slate-400">
                  Advanced 3D WHOLEGARMENT® knitting that eliminates seams for superior comfort and
                  minimal waste production.
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
                <h4 class="text-xl font-bold mb-2">Creative Freedom</h4>
                <p class="text-slate-600 dark:text-slate-400">
                  Our machines are not just tools, they are extensions of the designer's mind,
                  capable of realizing any texture or silhouette.
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
              <span class="text-white font-bold tracking-widest uppercase"
                >View Technical Specs</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-8 italic">Partner with Excellence</h2>
      <p class="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-12">
        We invite global luxury brands to explore our facility in Forli or arrange a virtual tour of
        our technical laboratory.
      </p>
    </section>
  </div>
</template>
