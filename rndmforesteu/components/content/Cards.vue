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

    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
}
@media only screen and (max-width: 600px) {
    .cards {
        flex-direction: column;
    }
}
</style>