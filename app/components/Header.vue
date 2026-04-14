<template>
  <header>
    <div>
      <b>DEVY'S PUBLIC HOUSE</b>
      <div>BEERS * BOURBONS  * BREAD</div>
      <hr>
      <div>Los Angeles - Montreal - New York</div>
    </div>

    <div>
      <h1>HOLLYWOOD FACTORY</h1>
      <time>{{ date }}</time>
    </div>

    <div>
      <div>
        <div>Telephone is here</div>
        <div>
          <b>$18.90</b>
          <span>Los Angeles |  Mostrilos</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>

const date = formattedDate(new Date())


</script>