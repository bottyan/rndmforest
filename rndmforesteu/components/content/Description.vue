<template>
    <div class="paragraph description">
        <slot />
    </div>
</template>

<style scoped>
.description {
    color: var(--color-neutral-gray);   
    font-family: 'Merriweather';
    font-weight: 700;
    font-size: 1.75rem;

    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
}
</style>