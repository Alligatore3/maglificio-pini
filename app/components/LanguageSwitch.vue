<script setup>
const { locales, setLocale } = useI18n()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <select
    :id="id"
    :name="name"
    @change="setLocale($event.target.value)"
    class="text-sm font-medium cursor-pointer focus:ring-0 focus:outline-none bg-transparent"
  >
    <option v-for="locale in locales" :value="locale.code" :selected="locale.code === $i18n.locale">
      {{ locale.name }}
    </option>
  </select>
</template>
