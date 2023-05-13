<template>
    <div class="cards">
        <slot />
    </div>
</template>

<style scoped>
.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: normal;
    align-content: normal;
    gap: 1rem;
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