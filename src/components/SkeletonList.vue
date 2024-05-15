<template>
    <div  class="skeleton-list">
            <div v-for="s in 20" :key="s" class="skeleton-item"></div>
        </div>
</template>

<style scoped>
.skeleton-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 0px;
    ;
}

.skeleton-item {
    animation: fade 2s infinite;
    width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
}

@keyframes fade {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>