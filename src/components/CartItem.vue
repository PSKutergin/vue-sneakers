<script setup>
import { getUrl } from '@/main'
const emit = defineEmits(['onClickRemove'])

defineProps({
  imageUrl: String,
  title: String,
  price: Number
})
</script>

<template>
  <div class="flex items-center border border-slate-200 rounded-xl p-4 gap-4">
    <img class="w-16 h-16" :src="getUrl(imageUrl)" :alt="title" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ price }} руб.</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt="Close"
        />
      </div>
    </div>
  </div>
</template>
