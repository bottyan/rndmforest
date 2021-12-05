<template>
  <div class="simple-paragraph"><slot></slot></div>
</template>

<script>
  export default {
    props: [],
  }
</script>

<style scoped lang="scss">
  .simple-paragraph {
    margin: 2rem 2rem 0 2rem;
    max-width: 60rem;
  }
</style>