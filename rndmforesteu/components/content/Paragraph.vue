<template>
    <div class="paragraph">
        <slot />
    </div>
</template>

<style scoped>
.paragraph {
    font-family: 'Roboto';
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
}
.paragraph::first-letter {
    initial-letter: 2;
    color: #8A2BE2;
}
</style>