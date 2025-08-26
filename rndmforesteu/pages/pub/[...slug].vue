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
      <!--ContentDoc>
        <template #not-found> <h1 class="red">Document not found</h1> </template>
      </ContentDoc-->
      <ContentDoc v-slot="{ doc }">
        <div v-if="doc">
          <article>
            <h1>{{ doc.title }}</h1>
            <h2>{{ doc.label }}</h2>
            <ContentRenderer :value="doc" />
          </article>
        </div>
        <div v-else> <h1 class="red">Document not found</h1></div>
      </ContentDoc>
    </main>
</template>

<style lang="scss">
  .red {
    color: red;
  }
</style>
  