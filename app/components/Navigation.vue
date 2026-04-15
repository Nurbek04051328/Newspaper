<template>
  <div class="flex items-center gap-3">
    <button>
      <LucideTextAlignStart/>
    </button>
    <nav class="w-full">
      <ul class="flex items-center justify-between">
        <li v-for="item in menu" :key="item?.link">
          <NuxtLink 
            :to="item?.link" 
            class="uppercase oswald text-lg font-semibold opacity-60 hover:opacity-100"
          >
            {{ item?.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <button>
      <LucideSearch/>
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { menu } from '~/constants/navigation.data';
</script>

<style>

</style>