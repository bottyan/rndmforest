<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
// Remove baseURL prefix and normalise root path
const base = config.app.baseURL.replace(/\/$/, '')
const cleanedPath = route.path.replace(new RegExp(`^${base}\/`), '')
const path = (!cleanedPath || cleanedPath === '/') ? '/index' : cleanedPath

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
      <ContentDoc :path="path" />
    </main>
</template>

  