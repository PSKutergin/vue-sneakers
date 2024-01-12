<script setup>
import Card from './Card.vue'

const onClickAdd = () => alert('Добавлено в корзину')

defineProps({
  items: Array
})

const emit = defineEmits(['addToFavourite'])
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isAdded="false"
      :isFavourite="false"
      :onClickAdd="onClickAdd"
      :onClickFavourite="() => emit('addToFavourite', item)"
      :isFavorite="item.isFavorite"
    />
  </div>
</template>
