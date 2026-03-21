<template>
  <!-- Hero Section -->
  <section class="w-full mx-auto px-4 md:px-10 py-6 max-w-[1200px]">
    <div
      class="relative flex min-h-[320px] md:min-h-[400px] w-full flex-col gap-6 items-center justify-center rounded-xl md:rounded-[2rem] overflow-hidden bg-cover bg-center bg-no-repeat p-8 text-center shadow-sm"
      data-alt="Close up view of dark rich soil in an Australian forest floor, possibly hinting at hidden truffles"
      style="
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%),
          url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpAQPVBtzaT5UJlA9eyiPP-f_bbSAmr4ANTLzQ_8544kL2kN9I9jghJT6B4fDD72UTATEejetJvN8azfjAAn0qlnFU-M1Owt2WEyfhrcDC-wCX03DTrvfrvz0m-bbn3KupK3zdNtobpLqZ_frUDDinFjIFjg7zldgIedWcvgj0pALZ_UE2kgC2MAnS8RPB5gRxgrVgSrHTwza2ypsL55MWFJj84ni8UfVeJCpVNT0sMUm2bCUasOfKTDojQV7bEVVFVqirnQZujADO');
      "
    >
      <div class="flex flex-col gap-4 max-w-2xl z-10">
        <span class="text-primary font-bold tracking-widest uppercase text-xs md:text-sm"
          >Contact Us</span
        >
        <h1 class="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          お問い合わせ
        </h1>
        <h2
          class="text-white/90 text-sm md:text-lg font-normal leading-relaxed max-w-[600px] mx-auto"
        >
          オーストラリアの豊かな土壌で育まれた香りを、あなたのテーブルへ。<br
            class="hidden md:block"
          />
          ビジネスに関するお問い合わせ、取材のご依頼など、お気軽にご連絡ください。
        </h2>
      </div>
    </div>
  </section>
  <!-- Reassurance & Trust Badges -->
  <section class="w-full mx-auto px-4 md:px-10 py-8 max-w-[1000px]">
    <div class="flex flex-col gap-8">
      <p
        class="text-text-main dark:text-gray-300 text-base font-normal leading-relaxed text-center max-w-2xl mx-auto"
      >
        Trusffleにご関心をお寄せいただきありがとうございます。専門チームが24時間以内にご回答いたします。日本語でのサポートも可能ですので、安心してお問い合わせください。
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
        <!-- Badge 1 -->
        <div
          class="flex flex-col items-center md:items-start gap-3 rounded-xl p-6 border border-[#e9e8ce] dark:border-[#3a3928] bg-white dark:bg-[#2a2915] shadow-sm hover:border-primary/50 transition-colors duration-300"
        >
          <span class="material-symbols-outlined text-primary text-3xl">verified_user</span>
          <div class="text-center md:text-left">
            <p class="text-text-main dark:text-white text-sm font-medium opacity-70">Safety</p>
            <p class="text-text-main dark:text-white text-xl font-bold leading-tight">
              HACCP Certified
            </p>
          </div>
        </div>
        <!-- Badge 2 -->
        <div
          class="flex flex-col items-center md:items-start gap-3 rounded-xl p-6 border border-[#e9e8ce] dark:border-[#3a3928] bg-white dark:bg-[#2a2915] shadow-sm hover:border-primary/50 transition-colors duration-300"
        >
          <span class="material-symbols-outlined text-primary text-3xl">flight_takeoff</span>
          <div class="text-center md:text-left">
            <p class="text-text-main dark:text-white text-sm font-medium opacity-70">Origin</p>
            <p class="text-text-main dark:text-white text-xl font-bold leading-tight">
              Direct from AU
            </p>
          </div>
        </div>
        <!-- Badge 3 -->
        <div
          class="flex flex-col items-center md:items-start gap-3 rounded-xl p-6 border border-[#e9e8ce] dark:border-[#3a3928] bg-white dark:bg-[#2a2915] shadow-sm hover:border-primary/50 transition-colors duration-300"
        >
          <span class="material-symbols-outlined text-primary text-3xl">eco</span>
          <div class="text-center md:text-left">
            <p class="text-text-main dark:text-white text-sm font-medium opacity-70">Freshness</p>
            <p class="text-text-main dark:text-white text-xl font-bold leading-tight">Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Form -->
  <section class="w-full mx-auto px-4 md:px-10 py-8 pb-20 max-w-[800px]">
    <div
      class="bg-white dark:bg-[#2a2915] rounded-[2rem] p-6 md:p-10 border border-[#e9e8ce] dark:border-[#3a3928] shadow-lg"
    >
      <form class="flex flex-col gap-6">
        <!-- Inquiry Type -->
        <div class="flex flex-col gap-2">
          <label
            class="text-text-main dark:text-gray-200 text-sm font-bold flex items-center gap-2"
            for="inquiry-type"
          >
            <span class="material-symbols-outlined text-lg opacity-50">category</span>
            お問い合わせの種類
            <span class="text-xs font-normal text-gray-500 dark:text-gray-400">(Inquiry Type)</span>
          </label>
          <div class="relative">
            <select
              class="w-full appearance-none rounded-full border border-[#e9e8ce] dark:border-[#4a4935] bg-[#fcfcf8] dark:bg-[#33321b] h-14 px-5 pr-10 text-base text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              id="inquiry-type"
            >
              <option disabled="" selected="" value="">選択してください (Please select)</option>
              <option value="wholesale">お取引・卸売について (Wholesale)</option>
              <option value="media">取材・メディア掲載について (Media)</option>
              <option value="chef">レストラン・シェフの方 (Chef/Restaurant)</option>
              <option value="other">その他 (General)</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-text-main dark:text-white"
            >
              <span class="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Company Name -->
          <div class="flex flex-col gap-2">
            <label
              class="text-text-main dark:text-gray-200 text-sm font-bold flex items-center gap-2"
              for="company"
            >
              <span class="material-symbols-outlined text-lg opacity-50">business</span>
              御社名
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400"
                >(Company Name)</span
              >
            </label>
            <input
              class="w-full rounded-full border border-[#e9e8ce] dark:border-[#4a4935] bg-[#fcfcf8] dark:bg-[#33321b] h-14 px-5 text-base text-text-main dark:text-white placeholder:text-[#9e9d47]/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              id="company"
              placeholder="例：株式会社Trusffle"
              type="text"
            />
          </div>
          <!-- Name -->
          <div class="flex flex-col gap-2">
            <label
              class="text-text-main dark:text-gray-200 text-sm font-bold flex items-center gap-2"
              for="name"
            >
              <span class="material-symbols-outlined text-lg opacity-50">person</span>
              お名前
              <span class="text-xs font-normal text-gray-500 dark:text-gray-400">(Name)</span>
            </label>
            <input
              class="w-full rounded-full border border-[#e9e8ce] dark:border-[#4a4935] bg-[#fcfcf8] dark:bg-[#33321b] h-14 px-5 text-base text-text-main dark:text-white placeholder:text-[#9e9d47]/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              id="name"
              placeholder="例：山田 太郎"
              type="text"
            />
          </div>
        </div>
        <!-- Email -->
        <div class="flex flex-col gap-2">
          <label
            class="text-text-main dark:text-gray-200 text-sm font-bold flex items-center gap-2"
            for="email"
          >
            <span class="material-symbols-outlined text-lg opacity-50">mail</span>
            メールアドレス
            <span class="text-xs font-normal text-gray-500 dark:text-gray-400">(Email)</span>
          </label>
          <input
            class="w-full rounded-full border border-[#e9e8ce] dark:border-[#4a4935] bg-[#fcfcf8] dark:bg-[#33321b] h-14 px-5 text-base text-text-main dark:text-white placeholder:text-[#9e9d47]/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            id="email"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        <!-- Message -->
        <div class="flex flex-col gap-2">
          <label
            class="text-text-main dark:text-gray-200 text-sm font-bold flex items-center gap-2"
            for="message"
          >
            <span class="material-symbols-outlined text-lg opacity-50">chat</span>
            お問い合わせ内容
            <span class="text-xs font-normal text-gray-500 dark:text-gray-400">(Message)</span>
          </label>
          <textarea
            class="w-full rounded-3xl border border-[#e9e8ce] dark:border-[#4a4935] bg-[#fcfcf8] dark:bg-[#33321b] p-5 text-base text-text-main dark:text-white placeholder:text-[#9e9d47]/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none transition-all"
            id="message"
            placeholder="ご質問やご要望をご記入ください..."
            rows="5"
          ></textarea>
        </div>
        <!-- Privacy Check -->
        <div class="flex items-start gap-3 px-2 py-2">
          <div class="flex items-center h-5">
            <input
              class="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-[#fcfcf8] dark:bg-[#33321b] dark:border-[#4a4935]"
              id="privacy"
              type="checkbox"
            />
          </div>
          <label
            class="text-sm text-gray-600 dark:text-gray-300 leading-tight pt-[2px]"
            for="privacy"
          >
            <a class="font-medium underline hover:text-primary transition-colors" href="#"
              >プライバシーポリシー</a
            >に同意します。<br />
            <span class="text-xs opacity-70">I agree to the Privacy Policy.</span>
          </label>
        </div>
        <!-- Submit Button -->
        <div class="pt-4">
          <button
            class="w-full h-14 rounded-full bg-primary hover:bg-[#eae605] text-text-main text-base font-bold tracking-wider shadow-md hover:shadow-lg transform active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group"
            type="submit"
          >
            送信する
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
              >send</span
            >
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
