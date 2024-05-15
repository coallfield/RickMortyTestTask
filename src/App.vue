<template>
  <div class="app">
      <AppHeader class="app__header"></AppHeader>
      <HomeView class="app__main"></HomeView>
      <AppFooter class="app__footer"></AppFooter>
  </div>
 

</template>


<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HomeView from './components/HomeView.vue'
import AppFooter from './components/AppFooter.vue'
</script>


<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
    color: hsla(0, 0%, 0%, 0.8);
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
}

.app {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app__footer {
  margin-top: auto;
}
</style>
