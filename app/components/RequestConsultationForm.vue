<script setup lang="ts">
const form = reactive({
  companyName: '',
  marketInterest: '',
  professionalEmail: '',
  projectVolume: '',
  yourRequirements: '',
})

const handleSubmit = () => {
  const subject = encodeURIComponent(`Request Consultation - ${form.companyName}`)

  const body = encodeURIComponent(
    `Hi there! 👋\n\n` +
      `Here's my info:\n` +
      `• Company: ${form.companyName}\n` +
      `• Email: ${form.professionalEmail}\n` +
      `${form.yourRequirements}\n\n` +
      `Thanks!`
  )

  const mailtoUrl = `mailto:p.fugazzaro.noboco@gmail.com?subject=${subject}&body=${body}`
  window.open(mailtoUrl.toString(), '_blank')
}
</script>

<template>
  <div class="flex-1 rounded-xl bg-white dark:bg-[#2a1619] p-8 shadow-xl lg:p-12">
    <form class="grid grid-cols-1 gap-6 md:grid-cols-2" @submit.prevent="handleSubmit">
      <div class="flex flex-col gap-2">
        <label
          class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
        >
          {{ $t('pages.index.form.companyName') }}
        </label>
        <input
          class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
          :placeholder="$t('pages.index.form.placeholders.placeholderCompanyName')"
          v-model="form.companyName"
          type="text"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label
          class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
        >
          {{ $t('pages.index.form.marketInterest') }}
        </label>
        <select
          class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
          v-model="form.marketInterest"
          required
        >
          <option value="greater-china">
            {{ $t('pages.index.form.options.marketInterest.greater-china') }}
          </option>
          <option value="japan">{{ $t('pages.index.form.options.marketInterest.japan') }}</option>
          <option value="both-markets">
            {{ $t('pages.index.form.options.marketInterest.both-markets') }}
          </option>
          <option value="other-global">
            {{ $t('pages.index.form.options.marketInterest.other-global') }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-2">
        <label
          class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
        >
          {{ $t('pages.index.form.professionalEmail') }}
        </label>
        <input
          class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
          placeholder="name@company.com"
          v-model="form.professionalEmail"
          type="email"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label
          class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
        >
          {{ $t('pages.index.form.projectVolume') }}
        </label>
        <select
          class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
          v-model="form.projectVolume"
          required
        >
          <option value="small-batch">
            {{ $t('pages.index.form.options.projectVolume.small-batch') }}
          </option>
          <option value="mid-scale">
            {{ $t('pages.index.form.options.projectVolume.mid-scale') }}
          </option>
          <option value="large-scale">
            {{ $t('pages.index.form.options.projectVolume.large-scale') }}
          </option>
        </select>
      </div>
      <div class="flex flex-col gap-2 md:col-span-2">
        <label
          class="text-xs font-bold uppercase tracking-wider text-[#896168] dark:text-[#a5868c]"
        >
          {{ $t('pages.index.form.yourRequirements') }}
        </label>
        <textarea
          class="rounded-lg border-[#e6dbdd] dark:border-[#3d2025] dark:bg-background-dark focus:border-primary focus:ring-primary"
          :placeholder="$t('pages.index.form.placeholders.yourRequirements')"
          v-model="form.yourRequirements"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="md:col-span-2">
        <button
          class="w-full rounded-lg bg-primary py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-1 active:scale-[0.98]"
          type="submit"
        >
          {{ $t('pages.index.form.requestConsultation') }}
        </button>
      </div>
    </form>
  </div>
</template>
