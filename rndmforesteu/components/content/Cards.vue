<template>
    <div class="cards grid grid-flow-row-dense sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <slot />
    </div>
</template>

<style scoped>
.cards {
    padding: 1rem;

    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
}
@media only screen and (max-width: 600px) {
    .cards {
        flex-direction: column;
        padding: 0.5rem;
    }
}
</style>