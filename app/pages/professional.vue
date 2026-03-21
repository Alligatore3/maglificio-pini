<template>
  <!-- Hero Section -->
  <div class="relative flex w-full flex-col">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="@container">
          <div class="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
            <div
              class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-sm @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-1/2"
              data-alt="Close up of a textured black truffle with soil details on a dark background"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBa0EbKQgnTMlahpWNcxdboomvv7BnvByJxFfkbOsqaIOE47J9MK6UBPuhJinMbmHNPVQtgxqTYkk09W9zNIxhDdchpO0Lwcx0rF5ECdzu-NVP0jIsX1VtQrKQePASVrdvp4GUsS7VqzSvpr63CCHsQPcgEHfro94c9HIqSbHwlHGESGWRNOkAqF3l9xlb_gncZHG1XK7Lq1GC6YUDdhjhIiqreCXKOv_4XoYHWLqaQAP6ZBd1r6f0X7PRx9-sDJrG9oL2rNyq8en5s');
              "
            ></div>
            <div
              class="flex flex-col justify-center gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:w-1/2"
            >
              <div class="flex flex-col gap-4 text-left">
                <div
                  class="inline-flex w-fit items-center justify-center rounded-full bg-[#f4f4e6] dark:bg-neutral-800 px-3 py-1"
                >
                  <p
                    class="text-neutral-olive dark:text-primary text-xs font-bold uppercase tracking-wider"
                  >
                    B2B Exclusive
                  </p>
                </div>
                <h1
                  class="text-neutral-dark dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                >
                  Australian Excellence for the Japanese Palate
                </h1>
                <h2
                  class="text-neutral-dark dark:text-neutral-300 text-base font-normal leading-relaxed"
                >
                  Bridging the gap between Australian craftsmanship and Japanese culinary precision.
                  We provide unwavering quality, direct from Australian soil to your kitchen in
                  Tokyo.
                </h2>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <button
                  class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-neutral-dark text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform"
                >
                  <span class="truncate">Inquire for Partnership</span>
                </button>
                <button
                  class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-transparent border border-[#e9e8ce] dark:border-neutral-600 text-neutral-dark dark:text-white text-base font-medium leading-normal tracking-[0.015em] hover:bg-[#f4f4e6] dark:hover:bg-neutral-800 transition-colors"
                >
                  <span class="truncate">View Season Guide</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Feature Section: Trust Indicators -->
  <div class="relative flex w-full flex-col bg-white dark:bg-neutral-900/50 py-10">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="flex flex-col gap-10 px-4 py-6">
          <div class="flex flex-col gap-4 text-center items-center">
            <h2
              class="text-neutral-dark dark:text-white tracking-tight text-[32px] font-bold leading-tight max-w-[720px]"
            >
              The Trusffle Promise
            </h2>
            <p
              class="text-neutral-600 dark:text-neutral-400 text-base font-normal leading-normal max-w-[720px]"
            >
              Built on trust, safety, and speed. Designed specifically for the high standards of
              Japanese professional kitchens.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-0">
            <!-- Card 1 -->
            <div
              class="flex flex-1 gap-4 rounded-xl border border-[#e9e8ce] dark:border-neutral-700 bg-background-light dark:bg-neutral-800 p-6 flex-col hover:border-primary transition-colors duration-300"
            >
              <div class="text-neutral-dark dark:text-primary">
                <span class="material-symbols-outlined text-[32px]">warehouse</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-neutral-dark dark:text-white text-lg font-bold leading-tight">
                  Stable Supply
                </h3>
                <p
                  class="text-neutral-olive dark:text-neutral-400 text-sm font-normal leading-relaxed"
                >
                  Guaranteed volume allocation for long-term partners, mitigating market
                  fluctuations.
                </p>
              </div>
            </div>
            <!-- Card 2 -->
            <div
              class="flex flex-1 gap-4 rounded-xl border border-[#e9e8ce] dark:border-neutral-700 bg-background-light dark:bg-neutral-800 p-6 flex-col hover:border-primary transition-colors duration-300"
            >
              <div class="text-neutral-dark dark:text-primary">
                <span class="material-symbols-outlined text-[32px]">verified_user</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-neutral-dark dark:text-white text-lg font-bold leading-tight">
                  Food Safety
                </h3>
                <p
                  class="text-neutral-olive dark:text-neutral-400 text-sm font-normal leading-relaxed"
                >
                  HACCP &amp; JAS compliant. Fully certified to meet rigorous Japanese safety
                  standards.
                </p>
              </div>
            </div>
            <!-- Card 3 -->
            <div
              class="flex flex-1 gap-4 rounded-xl border border-[#e9e8ce] dark:border-neutral-700 bg-background-light dark:bg-neutral-800 p-6 flex-col hover:border-primary transition-colors duration-300"
            >
              <div class="text-neutral-dark dark:text-primary">
                <span class="material-symbols-outlined text-[32px]">local_shipping</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-neutral-dark dark:text-white text-lg font-bold leading-tight">
                  Logistics Speed
                </h3>
                <p
                  class="text-neutral-olive dark:text-neutral-400 text-sm font-normal leading-relaxed"
                >
                  Farm to Tokyo kitchen in 24-48 hours via premium cold-chain air freight.
                </p>
              </div>
            </div>
            <!-- Card 4 -->
            <div
              class="flex flex-1 gap-4 rounded-xl border border-[#e9e8ce] dark:border-neutral-700 bg-background-light dark:bg-neutral-800 p-6 flex-col hover:border-primary transition-colors duration-300"
            >
              <div class="text-neutral-dark dark:text-primary">
                <span class="material-symbols-outlined text-[32px]">calendar_month</span>
              </div>
              <div class="flex flex-col gap-2">
                <h3 class="text-neutral-dark dark:text-white text-lg font-bold leading-tight">
                  Consistency
                </h3>
                <p
                  class="text-neutral-olive dark:text-neutral-400 text-sm font-normal leading-relaxed"
                >
                  Rigorous grading ensures size, aroma, and shape consistency throughout the season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Timeline: Seasonality -->
  <div class="relative flex w-full flex-col py-10">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="flex flex-col gap-6 px-4">
          <h2 class="text-neutral-dark dark:text-white text-2xl font-bold leading-tight">
            Australian Winter Harvest
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Our season aligns perfectly with the Japanese summer, offering a unique opportunity to
            serve fresh black winter truffles when European supply is dormant.
          </p>
          <div class="grid grid-cols-[40px_1fr] gap-x-4 pt-6">
            <!-- Item 1 -->
            <div class="flex flex-col items-center gap-1 pt-1">
              <div
                class="text-neutral-dark dark:text-primary bg-[#f4f4e6] dark:bg-neutral-800 rounded-full p-2"
              >
                <span class="material-symbols-outlined text-[20px]">clover_spark</span>
              </div>
              <div class="w-[2px] bg-[#e9e8ce] dark:bg-neutral-700 h-full grow my-2"></div>
            </div>
            <div class="flex flex-1 flex-col pb-8">
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="text-xs font-bold uppercase tracking-wider text-neutral-olive dark:text-primary/80"
                  >June</span
                >
              </div>
              <p class="text-neutral-dark dark:text-white text-lg font-bold leading-normal">
                Season Opener
              </p>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-normal">
                First harvest arrives in Tokyo. Younger, firmer texture with developing aroma.
              </p>
            </div>
            <!-- Item 2 -->
            <div class="flex flex-col items-center gap-1">
              <div class="w-[2px] bg-[#e9e8ce] dark:bg-neutral-700 h-2"></div>
              <div
                class="text-neutral-dark dark:text-primary bg-[#f4f4e6] dark:bg-neutral-800 rounded-full p-2"
              >
                <span class="material-symbols-outlined text-[20px]">local_fire_department</span>
              </div>
              <div class="w-[2px] bg-[#e9e8ce] dark:bg-neutral-700 h-full grow my-2"></div>
            </div>
            <div class="flex flex-1 flex-col pb-8">
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="text-xs font-bold uppercase tracking-wider text-neutral-olive dark:text-primary/80"
                  >July</span
                >
              </div>
              <p class="text-neutral-dark dark:text-white text-lg font-bold leading-normal">
                Peak Aroma &amp; Oil
              </p>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-normal">
                Highest demand window. Maximum pungency and marbling. Ideal for main courses.
              </p>
            </div>
            <!-- Item 3 -->
            <div class="flex flex-col items-center gap-1">
              <div class="w-[2px] bg-[#e9e8ce] dark:bg-neutral-700 h-2"></div>
              <div
                class="text-neutral-dark dark:text-primary bg-[#f4f4e6] dark:bg-neutral-800 rounded-full p-2"
              >
                <span class="material-symbols-outlined text-[20px]">nutrition</span>
              </div>
            </div>
            <div class="flex flex-1 flex-col pb-2">
              <div class="flex items-center gap-2 mb-1">
                <span
                  class="text-xs font-bold uppercase tracking-wider text-neutral-olive dark:text-primary/80"
                  >August</span
                >
              </div>
              <p class="text-neutral-dark dark:text-white text-lg font-bold leading-normal">
                Mature Harvest
              </p>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-normal">
                Rich, deep flavor profiles. Fully mature spores offer a complex earthiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Chef's Testimonial (New Section) -->
  <div class="relative flex w-full flex-col bg-[#23220f] text-white py-16">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
      <div
        class="layout-content-container flex flex-col max-w-[960px] flex-1 items-center text-center"
      >
        <span class="material-symbols-outlined text-[48px] text-primary mb-6">format_quote</span>
        <h3 class="text-2xl md:text-3xl font-light italic leading-relaxed max-w-3xl mb-8">
          "The consistency of Trusffle's grading is remarkable. In a busy Tokyo kitchen, knowing
          that every piece in the box is usable and aromatic allows us to cost our menu with
          absolute precision. A trusted partner for three seasons."
        </h3>
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 bg-neutral-600 rounded-full bg-cover bg-center"
            data-alt="Portrait of a Japanese Chef in white uniform"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRT1oIRkn3R-TCOgOVS4aTIX6tElSpT3Q8vHANCQswXnVVX_5biHMhtjuUn7gd_G9wDpssuyw8ceDrdBa8vXrTlSZkEdk4jJL9mMjQktrzz-hdRb0djZbtg0ALKiZlSyhD9LokbbLLgHfmBdvttWIr4sdrZlk61io2qPUj4lcaD9XBA-xiV1UqvztMwU2m1da8j8Yq-ib7wvCcBlLF7t4efQUD-2K7OzngnoGVJC4GB8_n9zin0EFFIvfaaITCRsggim8pGBrteIqj');
            "
          ></div>
          <div class="text-left">
            <p class="text-white font-bold text-lg leading-none">Kenjiro Tanaka</p>
            <p class="text-neutral-400 text-sm">Head Chef, Ginza Kousui</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Product Specifications Table -->
  <div class="relative flex w-full flex-col py-12">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
      <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div class="px-4 py-3 @container">
          <div class="flex flex-col gap-4 mb-6">
            <h2 class="text-neutral-dark dark:text-white text-2xl font-bold leading-tight">
              Professional Grading Standards
            </h2>
            <p class="text-neutral-600 dark:text-neutral-400">
              Strictly graded for weight, shape, and defect percentages.
            </p>
          </div>
          <div
            class="overflow-x-auto rounded-xl border border-[#e9e8ce] dark:border-neutral-700 bg-background-light dark:bg-neutral-800"
          >
            <table class="w-full min-w-[600px] border-collapse">
              <thead>
                <tr
                  class="bg-[#fcfcf8] dark:bg-neutral-800 border-b border-[#e9e8ce] dark:border-neutral-700"
                >
                  <th
                    class="px-6 py-4 text-left text-neutral-dark dark:text-white text-sm font-bold leading-normal w-[20%]"
                  >
                    Grade
                  </th>
                  <th
                    class="px-6 py-4 text-left text-neutral-dark dark:text-white text-sm font-bold leading-normal w-[25%]"
                  >
                    Weight (g)
                  </th>
                  <th
                    class="px-6 py-4 text-left text-neutral-dark dark:text-white text-sm font-bold leading-normal w-[30%]"
                  >
                    Aroma Profile
                  </th>
                  <th
                    class="px-6 py-4 text-left text-neutral-dark dark:text-white text-sm font-bold leading-normal w-[25%]"
                  >
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-[#e9e8ce] dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <td class="px-6 py-4 text-neutral-dark dark:text-neutral-200 text-sm font-medium">
                    Extra Class
                  </td>
                  <td class="px-6 py-4 text-neutral-olive dark:text-neutral-400 text-sm">
                    30g - 50g+
                  </td>
                  <td class="px-6 py-4 text-neutral-600 dark:text-neutral-400 text-sm">
                    Intense, Complex, Earthy
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center rounded-full bg-primary/20 dark:bg-primary/10 px-3 py-1 text-xs font-medium text-neutral-900 dark:text-primary ring-1 ring-inset ring-primary/30"
                      >Tableside Shaving</span
                    >
                  </td>
                </tr>
                <tr
                  class="border-b border-[#e9e8ce] dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <td class="px-6 py-4 text-neutral-dark dark:text-neutral-200 text-sm font-medium">
                    Class A
                  </td>
                  <td class="px-6 py-4 text-neutral-olive dark:text-neutral-400 text-sm">
                    20g - 30g
                  </td>
                  <td class="px-6 py-4 text-neutral-600 dark:text-neutral-400 text-sm">
                    Rich, Nutty
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 ring-1 ring-inset ring-neutral-500/10"
                      >Sauces, Risotto</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 text-neutral-dark dark:text-neutral-200 text-sm font-medium">
                    Class B
                  </td>
                  <td class="px-6 py-4 text-neutral-olive dark:text-neutral-400 text-sm">
                    15g - 20g
                  </td>
                  <td class="px-6 py-4 text-neutral-600 dark:text-neutral-400 text-sm">
                    Milder, Sweet
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-700 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 ring-1 ring-inset ring-neutral-500/10"
                      >Infusions, Pastes</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact / Sample Request Form -->
  <div class="relative flex w-full flex-col py-10 pb-20">
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
      <div
        class="layout-content-container flex flex-col md:flex-row max-w-[960px] flex-1 gap-12 px-4"
      >
        <!-- Left: Info -->
        <div class="flex flex-col gap-6 flex-1">
          <h2
            class="text-neutral-dark dark:text-white text-3xl font-black leading-tight tracking-[-0.015em]"
          >
            Partner with Us
          </h2>
          <p class="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            Interested in a seasonal contract or a one-time trial? Fill out the form to request our
            wholesale catalog or schedule a sample delivery.
          </p>
          <div class="flex flex-col gap-4 mt-4">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">check_circle</span>
              <span class="text-neutral-dark dark:text-white font-medium"
                >Response within 24 hours</span
              >
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">check_circle</span>
              <span class="text-neutral-dark dark:text-white font-medium"
                >Bilingual Support (EN/JP)</span
              >
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">check_circle</span>
              <span class="text-neutral-dark dark:text-white font-medium"
                >Custom Invoicing Available</span
              >
            </div>
          </div>
        </div>
        <!-- Right: Form -->
        <div
          class="flex-1 bg-white dark:bg-neutral-800 p-8 rounded-xl border border-[#e9e8ce] dark:border-neutral-700 shadow-sm"
        >
          <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-bold text-neutral-dark dark:text-white">Name</label>
              <input
                class="w-full h-12 rounded-lg border border-[#e9e8ce] dark:border-neutral-600 bg-background-light dark:bg-neutral-900 px-4 text-neutral-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Chef Name or Purchaser"
                type="text"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-bold text-neutral-dark dark:text-white"
                >Restaurant / Company</label
              >
              <input
                class="w-full h-12 rounded-lg border border-[#e9e8ce] dark:border-neutral-600 bg-background-light dark:bg-neutral-900 px-4 text-neutral-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. Ginza Kousui"
                type="text"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-bold text-neutral-dark dark:text-white"
                >Email Address</label
              >
              <input
                class="w-full h-12 rounded-lg border border-[#e9e8ce] dark:border-neutral-600 bg-background-light dark:bg-neutral-900 px-4 text-neutral-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="name@restaurant.com"
                type="email"
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm font-bold text-neutral-dark dark:text-white"
                >Inquiry Type</label
              >
              <select
                class="w-full h-12 rounded-lg border border-[#e9e8ce] dark:border-neutral-600 bg-background-light dark:bg-neutral-900 px-4 text-neutral-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
              >
                <option>Request Wholesale Catalog</option>
                <option>Request Sample Box (Paid)</option>
                <option>Seasonal Contract Inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <button
              class="mt-4 flex w-full cursor-pointer items-center justify-center rounded-full h-12 bg-primary text-neutral-dark text-base font-bold hover:brightness-105 transition-all"
              type="button"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
