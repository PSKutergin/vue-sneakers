<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const favourites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://9c50affb1ee38946.mokky.dev/favourites?_relations=items`
    )

    favourites.value = data.map((obj) => obj.item)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold mb-8">Мои закладки</h2>
  <div class="mt-10">
    <CardList :items="favourites" is-favorites />
  </div>
</template>
