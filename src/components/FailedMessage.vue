<template>

<div class="error-message">
    <div class="error-message__message"><slot></slot></div>
</div>
</template>


<style scoped>
.error-message {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
    .error-message__message {
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(255, 152, 0);
        padding: 20px;
        font-size: 4rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        z-index: 1000;
    }
    @media(max-width: 410px) {
        .error-message__message {
            font-size: 3rem;
        }
    }
</style>