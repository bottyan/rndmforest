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

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})

// TODO: Design example

</script>

<template>
    <main>
      <!--LIST
      <ContentList path="/pub" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
        </div>
      </ContentList>
      NAVIGATION
      <nav>
        <AppNavigation :navigation-tree="navigation" />
      </nav>
      REST
      -->
      <ContentDoc/>
    </main>
</template>

  
