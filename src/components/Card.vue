<script setup>
import { getUrl } from '@/main'

defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function,
  onClickFavourite: Function
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:shadow-xl hover:-translate-y-2"
  >
    <img
      v-show="Boolean(onClickFavourite)"
      @click="onClickFavourite"
      :src="getUrl(!isFavorite ? '/like-1.svg' : '/like-2.svg')"
      alt="Like 1"
      class="absolute top-8 left-8"
    />
    <img :src="getUrl(imageUrl)" alt="Sneaker" />
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <span>{{ price }} руб.</span>
      </div>

      <img
        v-show="Boolean(onClickAdd)"
        @click="onClickAdd"
        :src="getUrl(!isAdded ? '/plus.svg' : '/checked.svg')"
        alt="Plus"
      />
    </div>
  </div>
</template>
