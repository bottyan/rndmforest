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
  