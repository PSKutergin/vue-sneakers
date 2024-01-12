<script setup>
import Card from './Card.vue'

const onClickAdd = () => alert('Добавлено в корзину')
const onClickFavourite = () => alert('Добавлено в избранное')
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      imageUrl="/sneakers/sneakers-1.jpg"
      title="Мужские Кроссовки Nike Blazer Mid Suede"
      :price="5000"
      :isAdded="false"
      :isFavourite="false"
      :onClickAdd="onClickAdd"
      :onClickFavourite="onClickFavourite"
    />
  </div>
</template>
