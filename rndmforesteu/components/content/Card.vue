<template>
    <div class="card col-span-1 flex flex-col justify-end">
        <div class="text-lg font-bold">
            <slot />
        </div>
        <slot name="description" />
    </div>
</template>

<style scoped>
.card {    
    border: 2px solid #00000000;    
    border-radius: 2rem;
    padding: 2rem;
    min-height: 12rem;
    background: #eeeeee;
    cursor: pointer;
}
.card:hover {
    border: 2px solid black; 
}
</style>