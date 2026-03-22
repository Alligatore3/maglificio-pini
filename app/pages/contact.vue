<style>
.form-input:focus {
  border-color: #d41132 !important;
  ring-color: #d41132 !important;
}
</style>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12 lg:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
      <!-- Left Side: Contact Details & Map -->
      <div class="flex flex-col space-y-12">
        <div>
          <h2 class="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 leading-tight">
            Connect with the <span class="text-primary italic">Atelier</span>
          </h2>
          <p class="text-[#896168] dark:text-gray-400 text-lg leading-relaxed max-w-md">
            Our experts are ready to translate your vision into exceptional Italian knitwear. Reach
            out to discuss your next luxury collection.
          </p>
        </div>
        <div class="space-y-1">
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              Email
            </p>
            <p class="text-lg font-medium">inquiry@maglificiopini.it</p>
          </div>
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              Phone
            </p>
            <p class="text-lg font-medium">+39 0543 782111</p>
          </div>
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              Address
            </p>
            <p class="text-lg font-medium">Via dei Sarti, 14<br />47122 Forlì (FC), Italy</p>
          </div>
          <div
            class="grid grid-cols-[100px_1fr] border-t border-b border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              Hours
            </p>
            <div class="flex flex-col gap-1">
              <p class="text-lg font-medium">08:30 — 18:30</p>
              <p class="text-xs text-primary font-bold uppercase tracking-widest">
                Central European Time (GMT+1)
              </p>
            </div>
          </div>
        </div>
        <!-- Subtle Map -->
        <div class="relative group">
          <div
            class="w-full aspect-video rounded-xl bg-cover bg-center overflow-hidden border border-[#e6dbdd] dark:border-[#3d2a2d] filter grayscale hover:grayscale-0 transition-all duration-500"
            data-alt="Minimalist grayscale map of Forlì Italy region"
            data-location="Forlì, Italy"
            style="
              background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCMsQVb-J5EPzdWzPqbiPQ56HneN35YrBaC9ZNIK0IUD29EKtRba-hQ7RhC-wyI2QUz5WS5yFwX3h0RsvEG-MZPKSzrGWIDcWzju43bNrh8t6Lji2TFFFCS5fqMzGv5ebyGCL6gS8Rc1CgmEYjbjSelO8Vq9mr_zu61diPxCZ6oZAabPE6vQScMPzxS8lMhnuGfF-jGUOMsyAvfcOlaBM0NIq9uKq-iyxy6e_M4v2xBTmbcm95sCUtaLLiYHHOmjQIZwZX5ozDgp0V5');
            "
          >
            <div class="absolute inset-0 bg-black/5"></div>
          </div>
          <div
            class="absolute bottom-4 left-4 bg-white dark:bg-background-dark px-3 py-2 rounded shadow-lg flex items-center gap-2"
          >
            <span class="material-symbols-outlined text-primary text-sm">location_on</span>
            <span class="text-xs font-bold uppercase tracking-tighter">View on Google Maps</span>
          </div>
        </div>
      </div>
      <!-- Right Side: Comprehensive Form -->
      <div
        class="bg-white dark:bg-background-dark/50 border border-[#e6dbdd] dark:border-[#3d2a2d] rounded-2xl p-8 lg:p-12 shadow-sm"
      >
        <form class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Full Name</span
              >
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="e.g. Alessandro Rossi"
                type="text"
              />
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Business Email</span
              >
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="name@brand.com"
                type="email"
              />
            </label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Company Name</span
              >
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="Official entity name"
                type="text"
              />
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Official Website</span
              >
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="https://www.brand.com"
                type="url"
              />
            </label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Brand Positioning</span
              >
              <select
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-background-dark h-12 text-sm focus:ring-primary focus:border-primary"
              >
                <option value="">Select Category</option>
                <option value="luxury">Luxury / Couture</option>
                <option value="contemporary">Contemporary / Bridge</option>
                <option value="emerging">Emerging Designer</option>
                <option value="mass">High Street Premium</option>
              </select>
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
                >Seasonal Volume</span
              >
              <select
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-background-dark h-12 text-sm focus:ring-primary focus:border-primary"
              >
                <option value="">Est. Units per season</option>
                <option value="sample">Samples Only (Prototyping)</option>
                <option value="small">50 - 200 units</option>
                <option value="medium">200 - 1,000 units</option>
                <option value="large">1,000+ units</option>
              </select>
            </label>
          </div>
          <label class="flex flex-col gap-2">
            <span
              class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >Project Scope & Message</span
            >
            <textarea
              class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
              placeholder="Tell us about your collection needs, timeline, and yarn preferences..."
              rows="4"
            ></textarea>
          </label>
          <div class="flex flex-col gap-2">
            <span
              class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >Technical Documentation</span
            >
            <div
              class="border-2 border-dashed border-[#e6dbdd] dark:border-[#3d2a2d] rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <span
                class="material-symbols-outlined text-4xl text-[#896168] dark:text-gray-500 mb-2 group-hover:text-primary transition-colors"
                >upload_file</span
              >
              <p class="text-sm font-semibold mb-1">Upload Tech Pack / Designs</p>
              <p class="text-xs text-[#896168] dark:text-gray-400">
                PDF, ZIP or CAD files (Max 50MB)
              </p>
            </div>
          </div>
          <div class="pt-4">
            <button
              class="w-full h-14 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded-lg hover:bg-[#b00e29] transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              type="submit"
            >
              Submit Inquiry
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <p
              class="mt-4 text-[10px] text-center text-[#896168] dark:text-gray-500 leading-relaxed uppercase tracking-tighter"
            >
              By submitting, you agree to our privacy policy and the processing of business data in
              accordance with Italian GDPR regulations.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
