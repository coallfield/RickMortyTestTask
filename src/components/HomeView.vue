<template>
    <div class="main">
        <SettingsButtons></SettingsButtons>
        <CharactersList v-if="!characterStore.isLoading" :characters="characterStore.characters"></CharactersList>
        <SkeletonList v-else></SkeletonList>
        <FailedMessage v-if="characterStore.errorMessage">{{ characterStore.errorMessage }}</FailedMessage>
    </div>

</template>


<script lang="ts" setup>
import FailedMessage from "@/components/FailedMessage.vue"
import SkeletonList from "@/components/SkeletonList.vue"
import SettingsButtons from '@/components/SettingsButtons.vue'
import CharactersList from './CharactersList.vue';
import { onMounted } from 'vue';
import { useCharactersStore } from '@/stores/useCharactersStore';

const characterStore = useCharactersStore()

onMounted(() => {
    characterStore.getCharacters("https://rickandmortyapi.com/api/character/?page=1")
})

</script>

<style scoped>
    .main {
        
        background: rgb(39, 43, 51);
        min-height: 50vh;
    }
    
    
   
</style>