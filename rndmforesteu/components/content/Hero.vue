<script setup>
  defineProps({
    image: {
      type: String,
      default: '/img/smart.webp'
    }
  })
</script>

<template>
    <section v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
      <h1 class="text-4xl"><slot /></h1>
      <!--slot name="description" /-->
    </section>
</template>

