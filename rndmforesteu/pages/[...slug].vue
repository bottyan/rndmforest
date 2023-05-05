<script setup>
  const catsQuery = queryContent('/pub/')
  /*
  // If you'd prefer to pass along raw `QueryBuilderParams`:
  const catsQuery = {
    where: [
      { _path: /^\/cats/ },
    ],
  }
  */
  // TODO: document driven example: https://dev.to/ceceliacreates/document-driven-mode-in-nuxt-content-v2-42em
  // TODO: fix navigation
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
      <ContentNavigation v-slot="{ navigation }" :query="catsQuery">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
      REST
      <ContentDoc />
    </main>
</template>

  