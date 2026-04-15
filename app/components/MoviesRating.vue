<template>
  <div class="border-y border-neutral-300 py-1 mt-7">
    <div class="bg-[#fedfef] p-1">
      <div v-for="movie in movies" class="flex items-center gap-2">
        <div class="mr-2"> | </div>
        <span class="font-bold">
          {{ movie?.primaryTitle }}
        </span>
        <div class="font-bold bg-[#f7b2d5] p-1">
          {{ movie?.rating?.aggregateRating || 'N/A'}}
        </div>
      </div>

    </div>

  </div>
</template>
<script lang="ts" setup>
import type { IImdbMoviesResponse } from '~/types/movie';

const {data} = await useFetch<IImdbMoviesResponse>('https://api.imdbapi.dev/titles')
console.log(data.value);

  const movies = data.value?.titles || []

</script>