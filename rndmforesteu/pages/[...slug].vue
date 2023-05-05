<script setup>

  const { data: navigation } = await useAsyncData('navigation', () => {
    return fetchContentNavigation()
  })

  // TODO: Design example
 
</script>

<template>
    <main>
      LIST
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
      <ContentDoc />
    </main>
</template>

  