<script setup>
import Card from './Card.vue'

const onClickAdd = () => alert('Добавлено в корзину')
const onClickFavourite = () => alert('Добавлено в избранное')

defineProps({
  items: Array
})
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isAdded="false"
      :isFavourite="false"
      :onClickAdd="onClickAdd"
      :onClickFavourite="onClickFavourite"
    />
  </div>
</template>
