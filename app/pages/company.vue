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
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJmvf0t0QxN13_y_-AFvc43Wl6FLgOmWBAuF_Yr8uh1QUsNwEpKMXBzF051GQ-_KmiFyT82V1qroATjwsgvt5IpTd26VteB50NftHLS244UCyWExteYTvR8up_qKpfW3lSs5mBA5K7f22-54S8x0izBgmmXUOLCmBgrHT96VkKc_OI7e_Q4LTzBwA5jGrDb7BHNJ95vLhFegP8UQlH7Y3TapULwyjmkqVJsbEqCu5fyOEWCdQysczm6tLEMNI4ScAB1RF5yfl4baek');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="max-w-3xl flex flex-col gap-6">
          <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            A luxury knitwear partner built on expertise, archive, and ethics
          </h1>
          <p class="text-white/80 text-lg md:text-xl font-light">
            Crafting Italian excellence for the global avant-garde. Precision-engineered luxury from
            the heart of Italy.
          </p>
          <div class="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-primary text-white h-12 px-8 rounded-lg font-bold hover:bg-primary/90 transition-all"
            >
              Discover Our Story
            </button>
            <button
              class="bg-white/10 backdrop-blur-md border border-white/20 text-white h-12 px-8 rounded-lg font-bold hover:bg-white/20 transition-all"
            >
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Pillars Section -->
  <section class="w-full max-w-[1200px] px-6 py-12 mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 border-l-4 border-primary pl-6">
      Our Three Pillars
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
          <h3 class="text-xl font-bold">Skills</h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            Advanced Shima Seiki technology combined with traditional hand-finishing expertise.
            Every stitch is a testament to four decades of technical mastery.
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
          <h3 class="text-xl font-bold">Archive</h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            A curated collection of over 40 years of knitwear history. Our physical archive serves
            as a tactile encyclopedia for contemporary designers.
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
          <h3 class="text-xl font-bold">Ethics</h3>
          <p class="text-[#896168] dark:text-[#a08489] leading-relaxed">
            Committed to sustainable sourcing and fair labor. We ensure traceable production cycles
            that respect both artisans and environment.
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
        style="
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCQqsDGepfQWjvzd1k879HnZjX2EXqnG0ZDi08voumxf_tvxnMvIwT8wOaDd6dHi0Y_urOB_0P7NAX1_hl5maZV2Dq1tgqoBxWxRDskGLZXvl11pt7fBn790JOC7ENyItPfZ01v9-ELaAmx2O9Gqqv4-UJ0gEshUWUze-O35dxclz7Ue2i_m4IyNC_7z0wXW87oGm2ulVciIq7WvnFlGgc3I5wWU5DIja4IvITDK2cl93e1McXZe1dt2p_3wKxSDH0i0EC0d-X6okh4');
        "
      ></div>
      <div
        class="rounded-lg bg-cover bg-center md:translate-y-8"
        data-alt="Hands working on a knitting machine"
        style="
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWwS48qb_HpZOOqHI_9BcjEC47_mJ5gXB5q4mOC-y_EcwX1Q90h3etbyZ32YyOyZqMtsJLZ4dAJeVTNJC82cW8dpE3Qb3KjZcCrG_xFN7EVBhdUpeQjPuWUQPjN-uKsp7IjPUY-M-dAC9_HOjSM-tPSh2lELVtWcQuzuKHf3wpm9SQSFTlWWFXUj870817qtcUuHSXGdowHtTmhDWBrbnt3CH7Ukbt-5Pu7tWOtIP9AYxhknSbwn7uGKtCPnv-_ZRfRzfFYKrNfdBq');
        "
      ></div>
      <div
        class="rounded-lg bg-cover bg-center"
        data-alt="Italian fashion atelier details"
        style="
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpj5bc1vhoVUVvo2r52U-du3ORSBbpAYXmJEDFoJAEtw4CTrHJRs3zNcV7wu2KbvMCVyoaQShX0S475ELHsB08NwSLPj5YRE0nCRNiUV0K1ANIudIp1Sw0tMQnpNRF9TRNCFO0lPpsjr0rJT93cQdyKLYSqJi6_vhfY_ZoO6KD4cE7XFlopLgno5TziJSjdFa18WcJmrDsAOeykFD1s8dVBfJ_ugmhkDzV40ybtu4jXhP2TmKsEbieauWRNrtQjeAk_K6OnGE0teED');
        "
      ></div>
      <div
        class="rounded-lg bg-cover bg-center md:translate-y-8"
        data-alt="Luxury fabric texture grey"
        style="
          background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdYPJKuUGGEUDC42kkG2-9EZkDsVl_avfTHLVwIqt35ZU8f3L-0wUvt5idTEobTwz-jBwA1w6iVgB-7X5_F6sKBqQn8ALzepsTcTeUG_1VRHTJHarWuTzWCbtNVt20ovpqFXEk4Ssh3XRjdQGjwEFKIiJQw_55MrmWk2V-T-53Ei4gADpMcxcZb5YmvOfYjATWnfm4Si6DtV8uPZXoARIDgd_7GnSfUpyqhWpR4ort30zHgmZIsEp4u5OlJX0amuKzKk2tmhgtjYhQ');
        "
      ></div>
    </div>
  </section>
  <!-- Production Services Section -->
  <section
    class="w-full mx-auto max-w-[1200px] px-6 py-20 bg-white dark:bg-background-dark/20 rounded-3xl mt-12 mb-20 shadow-sm border border-[#e6dbdd] dark:border-[#3d2428]"
  >
    <div class="max-w-[960px] mx-auto">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-bold mb-4">Production Services</h2>
        <p class="text-[#896168] dark:text-[#a08489]">
          Our end-to-end lifecycle for luxury knitwear creation.
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
            <h3 class="text-xl font-bold mb-2">Study & Research</h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              Analysis of aesthetic trends, yarn selection from the world's finest spinning mills,
              and stitch development.
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
            <h3 class="text-xl font-bold mb-2">Samples & Prototyping</h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              Rapid prototyping of initial concepts. We refine fit and technical construction to
              ensure absolute quality.
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
            <h3 class="text-xl font-bold mb-2">Industrial Production</h3>
            <p class="text-[#896168] dark:text-[#a08489]">
              Scaleable manufacturing with rigorous quality control, from automated knitting to
              artisanal hand-assembly.
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
          <span class="text-primary font-bold uppercase tracking-widest text-sm mb-4 block"
            >Regional Expertise</span
          >
          <h2 class="text-4xl md:text-5xl font-black">Asia Programs</h2>
          <p class="mt-4 text-white/70 text-lg">
            Specialized logistics and production strategies tailored for the unique demands of East
            Asian luxury markets.
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
              <h3 class="text-2xl font-bold">China Focus: Speed & Scale</h3>
            </div>
            <p class="text-white/60 mb-8 leading-relaxed">
              Tailored for high-growth luxury portfolios. We offer agile development cycles and
              scaled manufacturing capacity to meet the dynamic demands of the Chinese market
              without compromising Italian quality.
            </p>
            <ul class="space-y-4 mb-10 text-sm font-medium">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                Rapid logistics pipeline
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                High-volume capacity
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                Digital collaboration tools
              </li>
            </ul>
            <button
              class="mt-auto text-primary font-bold border-b border-primary/30 pb-1 w-fit hover:border-primary transition-all"
            >
              Learn More
            </button>
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
              <h3 class="text-2xl font-bold">Japan Focus: Precision & Ethics</h3>
            </div>
            <p class="text-white/60 mb-8 leading-relaxed">
              Focused on the Japanese market's appreciation for technical perfection and
              sustainability. Our Japan program emphasizes complete traceability and
              ultra-high-precision finishing techniques.
            </p>
            <ul class="space-y-4 mb-10 text-sm font-medium">
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                GOTS & RWS Certifications
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                Precision hand-finishing
              </li>
              <li class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                Long-term partnership focus
              </li>
            </ul>
            <button
              class="mt-auto text-primary font-bold border-b border-primary/30 pb-1 w-fit hover:border-primary transition-all"
            >
              Learn More
            </button>
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
        Ready to start your next luxury collection?
      </h2>
      <p class="text-lg text-[#896168] dark:text-[#a08489] max-w-xl">
        Our team is ready to discuss your specific production needs. Reach out for a consultation
        regarding our archive or manufacturing capacities.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          class="bg-primary text-white h-14 px-10 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
        >
          Inquire Now
        </button>
        <button
          class="bg-white dark:bg-background-dark border border-[#e6dbdd] dark:border-[#3d2428] h-14 px-10 rounded-xl font-bold text-lg hover:bg-background-light dark:hover:bg-white/5 transition-all"
        >
          Contact Sales
        </button>
      </div>
    </div>
  </section>
</template>
