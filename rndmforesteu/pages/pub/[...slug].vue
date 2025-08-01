<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
// Remove baseURL prefix and normalise root path
const base = config.app.baseURL.replace(/\/$/, '')
const cleanedPath = route.path.replace(new RegExp(`^${base}\/`), '')
const path = (!cleanedPath || cleanedPath === '/') ? '/index' : cleanedPath
console.log('Looking for content at', path)
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
  