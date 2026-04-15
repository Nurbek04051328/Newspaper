<template>
  <header class="grid grid-cols-[1fr_3fr_1fr] items-center">
    <div class="flex gap-2 items-center">
      <NuxtImg 
        src="/images/logo.svg"
        width="90"
        height="90"
      />
      <div class="w-max">
        <b class="text-xl font-semibold oswald">DEVY'S PUBLIC HOUSE</b>
        <div class="opacity-70 font-medium oswald">BEERS * BOURBONS  * BREAD</div>
        <hr class="text-neutral-300 my-1">
        <div class="text-sm">Los Angeles - Montreal - New York</div>
      </div>
    </div>

    <div class="">
      <div class="text-center mx-auto py-3 text-center border-y border-solid border-neutral-300 w-max px-12">
        <h1 class="text-4xl font-light mb-2">HOLLYWOOD FACTORY</h1>
        <time class="opacity-50">{{ date }}</time>
      </div>
    </div>

    <div class="flex justify-end">
      <div class="flex items-center gap-5 border-b border-b-neutral-300 w-max">
        <div>
          <div class="oswald text-xl font-light mb-1">Telephone is here</div>
          <div class="flex items-center gap-3">
            <b>$18.90</b>
            <span> | </span>
            <span class="text-[.6rem] leading-snug">Los Angeles <br/>  Mostrilos</span>
          </div>
        </div>
  
        <NuxtImg 
          src="/images/vintage-phone.png" 
          width="100" 
          height="100"
          class="grayscale-100 saturate-0"
        />
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>

const date = formattedDate(new Date())


</script>