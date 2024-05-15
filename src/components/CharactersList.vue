<template>
    <div class="characters-container">
        <CharacterItem v-for="character in props.characters" :key="character.id" :character="character"></CharacterItem>
    </div>
</template>

<script lang="ts" setup>
import CharacterItem from '@/components/CharacterItem.vue'
import type { ICharacter } from "@/interfaces/ICharacter"


const props = defineProps<{
    characters: ICharacter[]
}>()
</script>

<style scoped>
.characters-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
     padding: 2rem 0px;;
    }

    


</style>