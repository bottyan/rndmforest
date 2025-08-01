<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const path = route.path.replace(new RegExp(`^${config.app.baseURL}`), '') || '/index'

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

  