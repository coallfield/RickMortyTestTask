<template>

<button class="settings__button"><slot></slot></button>
                
</template>

<style scoped>
.settings__button {
        
        border-radius: 10px;
        background: none;
        font-size: 1.5rem;
        font-weight: 700;
        border: 1px solid rgb(255, 152, 0);
        cursor: pointer;
        transition: 0.3s ease 0s;
        color: white;
}
.settings__button:hover {
        background:rgb(255, 152, 0) ;
    }
</style>