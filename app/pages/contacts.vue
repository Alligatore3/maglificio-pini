<script setup>
const form = reactive({
  name: '',
  email: '',
  company: '',
  website: '',
  category: '',
  volume: '',
  message: '',
})

const submitForm = () => {
  const title = encodeURIComponent(`New Inquiry - ${form.name}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nWebsite: ${form.website}\nCategory: ${form.category}\nVolume: ${form.volume}\nMessage: ${form.message}`
  )

  const mailtoUrl = `mailto:p.fugazzaro.noboco@gmail.com?subject=${title}&body=${body}`
  window.open(mailtoUrl.toString(), '_blank')
}
</script>

<style scoped>
.form-input:focus {
  border-color: #d41132 !important;
  ring-color: #d41132 !important;
}
</style>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12 lg:py-20">
    <div class="flex flex-col lg:flex-row lg:items-start gap-16 xl:gap-24">
      <!-- Left Side: Contact Details & Map -->
      <div class="flex flex-2 flex-col space-y-12">
        <div>
          <h2
            v-html="$t('pages.contacts.connectWithTheAtelier')"
            class="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 leading-tight"
          />
          <p class="text-[#896168] dark:text-gray-400 text-lg leading-relaxed max-w-md">
            {{
              $t(
                'pages.contacts.ourExpertsAreReadyToTranslateYourVisionIntoExceptionalItalianKnitwear'
              )
            }}
          </p>
        </div>
        <div class="space-y-1">
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              {{ $t('pages.contacts.email') }}
            </p>
            <a href="mailto:inquiry@maglificiopini.it" class="text-lg font-medium"
              >inquiry@maglificiopini.it</a
            >
          </div>
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              {{ $t('pages.contacts.phone') }}
            </p>
            <a href="tel:+390543782111" class="text-lg font-medium">+39 0543 782111</a>
          </div>
          <div
            class="grid grid-cols-[100px_1fr] border-t border-[#e6dbdd] dark:border-[#3d2a2d] py-6"
          >
            <p
              class="text-[#896168] dark:text-gray-400 text-xs font-bold uppercase tracking-widest"
            >
              {{ $t('pages.contacts.address') }}
            </p>
            <a
              href="https://maps.app.goo.gl/YYWjfB7K2HA4vShe7"
              class="text-lg font-medium"
              target="_blank"
              >Via dei Sarti, 14<br />47122 Forlì (FC), Italy</a
            >
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5718.538455143189!2d12.0733549!3d44.2221152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca81ae8e79ac7%3A0xe444efdf0ecb92aa!2sMaglificio%20Pini!5e0!3m2!1sit!2sit!4v1775287601768!5m2!1sit!2sit"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full rounded-xl"
            allowfullscreen=""
            style="border: 0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <!-- Right Side: Comprehensive Form -->
      <div
        class="bg-white dark:bg-background-dark/50 border border-[#e6dbdd] dark:border-[#3d2a2d] rounded-2xl p-8 lg:p-12 shadow-sm"
      >
        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.fullName') }}
              </span>
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                :placeholder="$t('pages.contacts.placeholders.placeholderFullName')"
                v-model="form.name"
                type="text"
                required
              />
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.businessEmail') }}
              </span>
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="name@brand.com"
                v-model="form.email"
                type="email"
                required
              />
            </label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.companyName') }}
              </span>
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                :placeholder="$t('pages.contacts.placeholders.placeholderCompanyName')"
                v-model="form.company"
                type="text"
                required
              />
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.officialWebsite') }}
              </span>
              <input
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent h-12 text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
                placeholder="https://www.brand.com"
                v-model="form.website"
                type="url"
                required
              />
            </label>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.brandPositioning') }}
              </span>
              <select
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-background-dark h-12 text-sm focus:ring-primary focus:border-primary"
                v-model="form.category"
                required
              >
                <option disabled selected value="">
                  {{ $t('pages.contacts.options.brandPositioning.select') }}
                </option>
                <option value="luxury">
                  {{ $t('pages.contacts.options.brandPositioning.luxury') }}
                </option>
                <option value="contemporary">
                  {{ $t('pages.contacts.options.brandPositioning.contemporary') }}
                </option>
                <option value="emerging">
                  {{ $t('pages.contacts.options.brandPositioning.emerging') }}
                </option>
                <option value="mass">
                  {{ $t('pages.contacts.options.brandPositioning.mass') }}
                </option>
              </select>
            </label>
            <label class="flex flex-col gap-2">
              <span
                class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
              >
                {{ $t('pages.contacts.seasonalVolume') }}
              </span>
              <select
                class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-background-dark h-12 text-sm focus:ring-primary focus:border-primary"
                v-model="form.volume"
                required
              >
                <option disabled selected value="">
                  {{ $t('pages.contacts.options.seasonalVolume.select') }}
                </option>
                <option value="sample">
                  {{ $t('pages.contacts.options.seasonalVolume.sample') }}
                </option>
                <option value="small">
                  {{ $t('pages.contacts.options.seasonalVolume.small') }}
                </option>
                <option value="medium">
                  {{ $t('pages.contacts.options.seasonalVolume.medium') }}
                </option>
                <option value="large">
                  {{ $t('pages.contacts.options.seasonalVolume.large') }}
                </option>
              </select>
            </label>
          </div>
          <label class="flex flex-col gap-2">
            <span
              class="text-xs font-bold uppercase tracking-widest text-[#896168] dark:text-gray-400"
            >
              {{ $t('pages.contacts.projectScopeAndMessage') }}
            </span>
            <textarea
              class="form-input w-full rounded-lg border-[#e6dbdd] dark:border-[#3d2a2d] dark:bg-transparent text-sm placeholder:text-[#896168]/50 focus:ring-primary focus:border-primary"
              :placeholder="$t('pages.contacts.placeholders.placeholderProjectScopeAndMessage')"
              v-model="form.message"
              rows="4"
              required
            ></textarea>
          </label>

          <div class="pt-4">
            <button
              class="w-full h-14 bg-primary text-white font-bold text-sm tracking-widest uppercase rounded-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              type="submit"
            >
              {{ $t('pages.contacts.submitInquiry') }}
              <span class="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
            <p
              class="mt-4 text-[10px] text-center text-[#896168] dark:text-gray-500 leading-relaxed uppercase tracking-tighter"
            >
              {{
                $t(
                  'pages.contacts.bySubmittingYouAgreeToOurPrivacyPolicyAndTheProcessingOfBusinessDataInAccordanceWithItalianGdprRegulations'
                )
              }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
