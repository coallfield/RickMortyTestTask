<template>
    <div class="footer">
        <div class="footer-info">
            <div class="footer-info__made-by">
                Made by Vadim Fisunov
            </div>
            <div class="social-links">
                <a class="social-links__link" href="https://github.com/coallfield">GitHub</a>
                <a class="social-links__link" href="https://vk.com/id448165428">VK</a>
                <a class="social-links__link" href="https://t.me/coallfield">Telegram</a>
            </div>
        </div>
    </div>
</template>



<style scoped>
    .footer {
        background: rgb(32, 35, 41);
        color: rgb(158, 158, 158);
        padding: 4.5rem 0px;
        min-height: calc(120px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-info__made-by {
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        text-align: center;
    }
    .social-links {
        display: flex;
        flex-direction: row;
        grid-gap: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .social-links__link {
        color: white;
        text-decoration: underline;
    }
</style>