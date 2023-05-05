<template>
    <main>
      <h1>Page</h1>
      <ContentDoc>
        <template #not-found> <h1 class="red">Document not found</h1> </template>
      </ContentDoc>
    </main>
</template>

<style lang="scss">
  .red {
    color: red;
  }
</style>
  