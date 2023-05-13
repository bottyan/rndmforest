<template>
    <div class="card p-6 border bg-white dark:bg-black dark:border-gray-700 rounded">
        <slot />
        <slot name="description" />
    </div>
</template>

<style scoped>
.card {
    flex-grow:1;
}
</style>