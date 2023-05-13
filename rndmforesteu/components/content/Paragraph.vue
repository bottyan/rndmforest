<template>
    <div class="paragraph">
        <slot />
    </div>
</template>

<style scoped>
.paragraph {
    font-family: 'Roboto';
    color: var(--color-neutral-gray);
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
}
.paragraph::first-letter {
    initial-letter: 2;
    color: var(--color-neutral-gray);
}
</style>