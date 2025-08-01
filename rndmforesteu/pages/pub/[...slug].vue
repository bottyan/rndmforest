<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const path = route.path.replace(new RegExp(`^${config.app.baseURL}`), '') || '/index'
</script>

<template>
    <main>
      <ContentDoc :path="path">
        <template #not-found> <h1 class="red">Document not found</h1> </template>
      </ContentDoc>
    </main>
</template>

<style lang="scss">
  .red {
    color: red;
  }
</style>
  