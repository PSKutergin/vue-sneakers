<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import axios from 'axios'

import Header from './components/Header.vue'
import CardList from './components/CardList.vue'
// import Drawer from './components/Drawer.vue'

const items = ref([])
const filters = reactive({
  sortBy: 'title',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = (event) => {
  filters.searchQuery = event.target.value
}

const fetchFavorites = async () => {
  try {
    const { data: favourites } = await axios.get(`https://9c50affb1ee38946.mokky.dev/favourites`)

    items.value = items.value.map((item) => {
      const favorite = favourites.find((favorite) => favorite.parentId === item.id)

      if (!favorite) {
        return item
      }

      return { ...item, isFavorite: true, favoriteId: favorite.id }
    })
  } catch (error) {
    console.log(error)
  }
}

const addToFavourite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id
      }

      item.isFavorite = true

      const { data } = await axios.post(`https://9c50affb1ee38946.mokky.dev/favourites`, obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false

      await axios.delete(`https://9c50affb1ee38946.mokky.dev/favourites/${item.favoriteId}`)

      item.favoriteId = null
    }
  } catch (error) {
    console.log(error)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }

    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }

    const { data } = await axios.get(`https://9c50affb1ee38946.mokky.dev/items`, {
      params
    })
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchItems()
  await fetchFavorites()
})
watch(filters, fetchItems)
</script>

<template>
  <!-- <Drawer /> -->
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex gap-4">
          <select class="py-2 px-3 rounded-md outline-none" @change="onChangeSelect">
            <option value="name">По названию</option>
            <option value="price">По цене (возрастанию)</option>
            <option value="-price">По цене (убыванию)</option>
          </select>

          <div class="relative">
            <img src="/search.svg" alt="Search" class="absolute top-3 left-3" />
            <input
              @input="onChangeSearchInput"
              type="text"
              class="border rounded-md pr-4 pl-10 py-2 outline-none focus:border-gray-400"
              placeholder="Поиск..."
            />
          </div>
        </div>
      </div>

      <div class="mt-10">
        <CardList :items="items" @addToFavourite="addToFavourite" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
