<template>
  <div class="border-y border-neutral-300 py-1 mt-7 overflow-hidden">
    <div class="bg-[#fedfef] p-1">
      <div class="marquee-wrapper">
        <div class="marquee-content">
          <div 
            v-for="(movie, index) in movies"
            :key="`movie-1-${index}`" 
            class="flex items-center gap-2 whitespace-nowrap"
          >
            <div class="mr-2"> | </div>
            <span class="font-bold">
              {{ movie?.primaryTitle }}
            </span>
            <div class="font-bold bg-[#f7b2d5] p-1">
              {{ movie?.rating?.aggregateRating || 'N/A'}}
            </div>
          </div>
        </div>
        <div class="marquee-content" aria-hidden="true">
          <div 
            v-for="(movie, index) in movies"
            :key="`movie-2-${index}`" 
            class="flex items-center gap-2 whitespace-nowrap"
          >
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

    </div>

  </div>
</template>
<script lang="ts" setup>
import type { IImdbMoviesResponse } from '~/types/movie';

const {data} = await useFetch<IImdbMoviesResponse>('https://api.imdbapi.dev/titles')
console.log(data.value);

  const movies = data.value?.titles || []

</script>

<style scoped>
  .marquee-wrapper {
    display: flex;
    gap: 1rem;
    /* animation: scroll 30s linear infinite; */
    will-change: transform;
  }

  .marquee-content {
    display: flex;
    gap: 1rem;
    flex-shrink: 0;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

</style>