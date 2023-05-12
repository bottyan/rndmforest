<script setup>
  defineProps({
    image: {
      type: String,
      default: '/img/smart.webp'
    }
  })
</script>

<template>
    <section class="hero" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
      <h1 class="text-4xl"><slot /></h1>
      <!--slot name="description" /-->
    </section>
</template>

<style scoped>
.hero {
    height: 100vh;
    padding: 2rem;
}
</style>
