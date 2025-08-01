<script setup lang="ts">
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const config = useRuntimeConfig()

// Reactive path based on current route
const path = computed(() => {
  const base = config.app.baseURL.replace(/\/$/, '')
  const cleanedPath = route.path.replace(new RegExp(`^${base}\/`), '')
  return (!cleanedPath || cleanedPath === '/')
    ? '/index'
    : withLeadingSlash(cleanedPath)
})
console.log('Looking for content at', path.value)
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
  