<template>
  <div class="flex-grow">
    <!-- Hero Section -->
    <section
      class="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-20 lg:px-12"
    >
      <div
        class="absolute inset-0 z-0 bg-cover bg-center"
        data-alt="Close up of rich dark soil texture"
        style="
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
            url('https://lh3.googleusercontent.com/aida-public/AB6AXuASxtdPxBrdG7vmJ3mKhPjr9QPnKUYznd1ODZFvMHHzpXjBO6qD9TADGxsY3y-ZsTsrFZrZG-V6OiW3BDONcNhbS9HE0rqB4bwIk5-AvtHGnaUU79jmv5EdFI902NNA4gXX3QpO1OY8M3o_lRh5Slv5BoB_IY3ktXdSaOUBcoG1Jy8ZtVzNQ8ltpE64UDMIqrvD0epcr-cjCB454RtlEdwFsbegCCdQBUZiHB-9Fj8M0zD5CYEVPsAMSovtDxmg-m31Dm2EIySMlP7x');
        "
      ></div>
      <div
        class="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center text-white"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-black backdrop-blur-sm"
        >
          <span class="material-symbols-outlined text-[16px]">verified</span>
          Premium Quality
        </div>
        <h1 class="font-display text-5xl font-black leading-tight tracking-tight md:text-7xl">
          Australian Earth,<br />
          Japanese Standards
        </h1>
        <p class="max-w-xl text-lg font-light leading-relaxed text-gray-200 md:text-xl">
          オーストラリアの大地、日本の基準。 <br />
          Premium truffles crafted with care for the discerning palate.
        </p>
        <div class="mt-4 flex gap-4">
          <button
            class="flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-black transition-transform hover:scale-105"
          >
            Explore Collection
          </button>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-24 px-6 lg:px-12 bg-background-light dark:bg-background-dark">
      <div class="mx-auto max-w-3xl text-center">
        <span
          class="material-symbols-outlined mb-6 text-4xl text-text-secondary/50 dark:text-gray-500"
          >eco</span
        >
        <h2 class="mb-6 text-3xl font-bold text-text-main dark:text-white md:text-4xl">
          Our Premium Selection
        </h2>
        <p class="text-lg leading-relaxed text-text-secondary dark:text-gray-400">
          We bring the finest gems of Western Australian soil directly to your kitchen. Each truffle
          is hand-harvested, cleaned, and inspected to meet rigorous safety standards before being
          flown fresh to Japan.
        </p>
      </div>
    </section>

    <!-- Product 1: Black Winter Truffle -->
    <section class="py-12 px-6 lg:px-12">
      <div class="mx-auto max-w-6xl">
        <div
          class="flex flex-col gap-12 overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5 lg:flex-row lg:items-stretch lg:p-10"
        >
          <!-- Product Image Side -->
          <div
            class="relative min-h-[300px] w-full flex-1 overflow-hidden rounded-xl lg:min-h-full group"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Whole black winter truffle with textured surface"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8S7bU0KFpTG437EBs4gmCS8O8k6Q1O_H1JeR_kDds2Ec4leypqtjg34AdwI-28wr8YWJbpsV8PXSGC5QW79bcgDL016ej4VsAX_qxiGTZ71rhO1jQPuZyaT5QcJhoO9fqbhw1AHZwsvch1aSfIjJQIFDzgSUNIQMlkQtTL7vh9PlzAWB0_AkNfjOEYUCWpLJWV_w3Bscrjn4p07G7Rove0IiP-eyWqhtgsPhjITwhtGG3yI73uJ1rIOUGMNnxgnfz2QqDwckrJnxF');
              "
            ></div>
            <div class="absolute top-4 left-4 z-10">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-black"
              >
                <span class="material-symbols-outlined text-[14px]">wb_sunny</span>
                In Season (旬)
              </span>
            </div>
          </div>
          <!-- Product Content Side -->
          <div class="flex flex-1 flex-col justify-center gap-8">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-text-main dark:text-white md:text-3xl">
                  Black Winter Truffle
                </h3>
                <span class="text-sm font-mono text-text-secondary dark:text-gray-400"
                  >Tuber Melanosporum</span
                >
              </div>
              <p class="text-text-secondary dark:text-gray-400">黒トリュフ</p>
              <p class="text-base leading-relaxed text-text-main dark:text-gray-300">
                The jewel of Manjimup. Known for its intense, earthy musk and complex chocolate
                notes. Harvested at peak maturity for maximum aroma.
              </p>
            </div>
            <!-- Details Grid -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="space-y-4">
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Origin
                  </p>
                  <p class="font-medium text-text-main dark:text-white">Manjimup, WA</p>
                </div>
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Availability
                  </p>
                  <p class="font-medium text-text-main dark:text-white">June - August</p>
                </div>
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Culinary Use
                  </p>
                  <p class="font-medium text-text-main dark:text-white">
                    Ideal for Wagyu, Risotto, or Egg dishes.
                  </p>
                  <p class="text-sm text-text-secondary dark:text-gray-400">
                    和牛やすき焼きとの相性も抜群です。
                  </p>
                </div>
              </div>
              <!-- Aroma Chart -->
              <div class="rounded-xl bg-background-light p-4 dark:bg-white/5">
                <p
                  class="mb-3 text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400"
                >
                  Aroma Profile
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Earthiness</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[90%]"
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Musk</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[85%]"
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Sweetness</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[40%]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Actions -->
            <div class="flex flex-wrap gap-4 pt-2">
              <button
                class="flex h-12 flex-1 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-black shadow-sm hover:brightness-110"
              >
                Request Quote (見積もり)
              </button>
              <button
                class="flex h-12 w-full md:w-auto items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-bold text-text-main hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
              >
                Storage Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product 2: Summer Truffle (Different Layout style for variety) -->
    <section class="py-12 px-6 lg:px-12">
      <div class="mx-auto max-w-6xl">
        <div
          class="flex flex-col-reverse gap-12 overflow-hidden rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5 lg:flex-row lg:items-stretch lg:p-10"
        >
          <!-- Product Content Side -->
          <div class="flex flex-1 flex-col justify-center gap-8">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-text-main dark:text-white md:text-3xl">
                  Australian Summer Truffle
                </h3>
                <span class="text-sm font-mono text-text-secondary dark:text-gray-400"
                  >Tuber Aestivum</span
                >
              </div>
              <p class="text-text-secondary dark:text-gray-400">サマートリュフ</p>
              <p class="text-base leading-relaxed text-text-main dark:text-gray-300">
                A more subtle delicacy. Featuring a delicate hazelnut aroma and lighter texture.
                Perfect for enhancing dishes without overpowering them.
              </p>
            </div>
            <!-- Details Grid -->
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="space-y-4">
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Origin
                  </p>
                  <p class="font-medium text-text-main dark:text-white">Manjimup, WA</p>
                </div>
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Availability
                  </p>
                  <p class="font-medium text-text-main dark:text-white">December - February</p>
                </div>
                <div>
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-500"
                  >
                    Culinary Use
                  </p>
                  <p class="font-medium text-text-main dark:text-white">
                    Sashimi topping, Chawanmushi.
                  </p>
                  <p class="text-sm text-text-secondary dark:text-gray-400">
                    刺身や茶碗蒸しのトッピングに最適。
                  </p>
                </div>
              </div>
              <!-- Aroma Chart -->
              <div class="rounded-xl bg-background-light p-4 dark:bg-white/5">
                <p
                  class="mb-3 text-xs font-bold uppercase tracking-wider text-text-secondary dark:text-gray-400"
                >
                  Aroma Profile
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Earthiness</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[40%]"
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Nutty</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[80%]"
                      ></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="w-20 text-xs font-medium dark:text-gray-300">Lightness</span>
                    <div
                      class="relative h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden"
                    >
                      <div
                        class="absolute left-0 top-0 h-full rounded-full bg-primary w-[90%]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Actions -->
            <div class="flex flex-wrap gap-4 pt-2">
              <button
                class="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-gray-200 px-6 text-sm font-bold text-gray-500 cursor-not-allowed dark:bg-white/10 dark:text-gray-400"
                disabled=""
              >
                Coming Soon (準備中)
              </button>
              <button
                class="flex h-12 w-full md:w-auto items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-bold text-text-main hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5"
              >
                Notify Me
              </button>
            </div>
          </div>
          <!-- Product Image Side -->
          <div
            class="relative min-h-[300px] w-full flex-1 overflow-hidden rounded-xl lg:min-h-full group"
          >
            <div
              class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-alt="Sliced truffle showing interior marble pattern on wood"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvv5QrMj8XfobZF5NuvH9U1-nirzkHukq2UcTzPOYaCefX7UYzgtKZwmq1nu6LUH6044L84TyRK0hDTQSckMbttpoR23gOUgCgGLqzfxpqMVpnrUKg3SM4S9kyynLfJd9U6QeiuiTMRd3fjDJpTOrtxOYB8sUzPI-AQI3ngLCKgyyUXBP0X3DU8yhfITWkt-VmSfNGpy2KMZz6ckp9WQog9_nDONuOY9ZUCvyDh4NKv1Bib66abZFcIaQHOfoJqFe6nySveZfEPlwf');
              "
            ></div>
            <div class="absolute top-4 right-4 z-10">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-500 backdrop-blur-sm"
              >
                <span class="material-symbols-outlined text-[14px]">calendar_clock</span>
                Dec - Feb
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust & Safety Section -->
    <section class="mt-12 bg-white py-20 dark:bg-white/5">
      <div class="mx-auto max-w-7xl px-6 lg:px-12">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold text-text-main dark:text-white">Safety & Craftsmanship</h2>
          <p class="mt-4 text-text-secondary dark:text-gray-400">
            Rigorous standards for your peace of mind.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="flex flex-col items-center gap-4 text-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-background-light text-primary dark:bg-white/10"
            >
              <span class="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <h3 class="text-lg font-bold text-text-main dark:text-white">Farm to Tokyo in 48h</h3>
            <p class="text-sm text-text-secondary dark:text-gray-400">
              Direct logistics ensuring maximum freshness upon arrival.
            </p>
          </div>
          <!-- Feature 2 -->
          <div class="flex flex-col items-center gap-4 text-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-background-light text-primary dark:bg-white/10"
            >
              <span class="material-symbols-outlined text-3xl">verified_user</span>
            </div>
            <h3 class="text-lg font-bold text-text-main dark:text-white">HACCP Certified</h3>
            <p class="text-sm text-text-secondary dark:text-gray-400">
              Strict hygiene controls meeting global food safety standards.
            </p>
          </div>
          <!-- Feature 3 -->
          <div class="flex flex-col items-center gap-4 text-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-full bg-background-light text-primary dark:bg-white/10"
            >
              <span class="material-symbols-outlined text-3xl">science</span>
            </div>
            <h3 class="text-lg font-bold text-text-main dark:text-white">Quality Analysis</h3>
            <p class="text-sm text-text-secondary dark:text-gray-400">
              Every batch is tested for aroma intensity and ripeness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seasonal Calendar -->
    <section class="py-20 px-6 lg:px-12">
      <div class="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm dark:bg-white/5">
        <div class="mb-8 flex items-center justify-between">
          <h3 class="text-xl font-bold text-text-main dark:text-white">Seasonal Calendar</h3>
          <div class="flex gap-4 text-xs font-medium">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-primary"></span>
              <span class="dark:text-gray-300">Winter Truffle</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              <span class="dark:text-gray-300">Summer Truffle</span>
            </div>
          </div>
        </div>
        <!-- Simple Calendar Viz -->
        <div class="relative pt-6 pb-2 overflow-x-auto">
          <div
            class="flex min-w-[600px] justify-between border-t border-gray-200 dark:border-white/10 pt-4 text-sm font-bold text-text-secondary dark:text-gray-400"
          >
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span
            ><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span
            ><span>Nov</span><span>Dec</span>
          </div>
          <!-- Timeline Bars -->
          <div class="relative mt-4 h-12 w-full min-w-[600px]">
            <!-- Summer Truffle (Dec - Feb) - Wrap around handled visually by splitting -->
            <div
              class="absolute left-0 top-1 h-3 w-[16%] rounded-full bg-gray-300 dark:bg-gray-600"
            ></div>
            <div
              class="absolute right-0 top-1 h-3 w-[8%] rounded-full bg-gray-300 dark:bg-gray-600"
            ></div>
            <!-- Winter Truffle (Jun - Aug) -->
            <div
              class="absolute left-[41.6%] top-6 h-3 w-[25%] rounded-full bg-primary shadow-sm shadow-primary/50"
            >
              <div
                class="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-text-main px-2 py-1 text-[10px] font-bold text-white dark:bg-white dark:text-black"
              >
                Peak Season
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Handling Accordions -->
    <section class="pb-24 px-6 lg:px-12">
      <div class="mx-auto max-w-3xl space-y-4">
        <h3 class="mb-6 text-center text-xl font-bold text-text-main dark:text-white">
          Handling & Storage
        </h3>
        <details
          class="group rounded-xl bg-white p-4 shadow-sm dark:bg-white/5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-text-main dark:text-white"
          >
            <h4 class="font-medium">How to store fresh truffles? (保存方法)</h4>
            <span class="material-symbols-outlined transition group-open:-rotate-180"
              >expand_more</span
            >
          </summary>
          <p class="mt-4 text-sm leading-relaxed text-text-secondary dark:text-gray-400">
            Wrap each truffle individually in a paper towel to absorb moisture. Place them in an
            airtight container and store in the warmest part of your refrigerator (crisper drawer).
            Change the paper towels daily.
          </p>
        </details>
        <details
          class="group rounded-xl bg-white p-4 shadow-sm dark:bg-white/5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-text-main dark:text-white"
          >
            <h4 class="font-medium">Cleaning instructions (クリーニング)</h4>
            <span class="material-symbols-outlined transition group-open:-rotate-180"
              >expand_more</span
            >
          </summary>
          <p class="mt-4 text-sm leading-relaxed text-text-secondary dark:text-gray-400">
            Our truffles arrive pre-brushed, but if necessary, gently brush them under cold running
            water with a soft toothbrush just before use. Dry thoroughly immediately after.
          </p>
        </details>
        <details
          class="group rounded-xl bg-white p-4 shadow-sm dark:bg-white/5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 text-text-main dark:text-white"
          >
            <h4 class="font-medium">Shelf life (賞味期限)</h4>
            <span class="material-symbols-outlined transition group-open:-rotate-180"
              >expand_more</span
            >
          </summary>
          <p class="mt-4 text-sm leading-relaxed text-text-secondary dark:text-gray-400">
            For best aroma, consume within 5-7 days of arrival. Truffles lose approximately 3% of
            their weight daily due to moisture loss.
          </p>
        </details>
      </div>
    </section>
  </div>
</template>
