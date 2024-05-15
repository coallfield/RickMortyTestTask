<template>
    <div class="header">
        <div class="header-title">
            <div class="header-title__title">
                The Rick and Morty API
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header {
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-title__title {
        color: rgb(32, 35, 41);
        font-weight: 900;
        font-size: 5.625rem;
        text-align: center;
    }
    @media (max-width: 590px) {
        .header-title__title {
            font-size: 4.5rem;
        }
    }
    @media (max-width: 420px) {
        .header-title__title {
            font-size: 3.5rem;
        }
    }

</style>