<template>
    <div class="character">
        <div class="character-image">
            <img class="character-image__image" :src="props.character.image">
        </div>
        <div class="character-info">
            <section class="name-status">
                <h2 class="name-status__name">{{ props.character.name }}</h2>
                <span class="name-status__status">
                    <span class="name-status__icon" 
                    :class="{'name-status__icon_red' : props.character.status === 'Dead', 
                            'name-status__icon_green': props.character.status === 'Alive', 
                            'name-status__icon_gray': props.character.status === 'unknown' 
                            }"></span>
                    {{ `${props.character.status.charAt(0).toUpperCase() + props.character.status.slice(1)} - ${props.character.species}` }}
                </span>
            </section>
            <section class="location">
                <div class="location__last">Last known location</div>
                <div class="location__name">{{ props.character.location.name }}</div>
            </section>
            <section class="episode">
                <div class="episode__first">First seen in: </div>
                <div class="episode__name">{{ episodeName }}</div>
            </section>
        </div>
    </div>

</template>

<script lang="ts" setup>
import type { ICharacter } from "@/interfaces/ICharacter"
import RickMortyApi from "@/services/RickMortyApi";
import { onMounted, ref } from "vue";

const episodeName = ref('')
const props = defineProps<{
    character: ICharacter
}>()

onMounted(async () => {
   episodeName.value = await RickMortyApi.getNameOfEpisode(props.character.episode)
})
</script>


<style scoped>
.character {
        width: 600px;
        height: 220px;
        display: flex;
        overflow: hidden;
        background: rgb(60, 62, 68);
        border-radius: 0.5rem;
        margin: 0.75rem;    
    }

    .character-image {
        flex: 2 1 0%;
        width: 100%;
    }

    .character-image__image {
        width: 100%;
        height: 100%;
        margin: 0px;
        opacity: 1;
        transition: opacity 0.5s ease 0s;
        object-position: center center;
        object-fit: cover;  
    }

    .character-info {
        flex: 3 1 0%;
        position: relative;
        padding: 0.75rem;
        color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column; 
    }

    .name-status {
        
        flex: 1, 1, 0%;
        justify-content: flex-start;
    }
    .location {
        flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }

    .name-status__icon {
        height: 0.5rem;
        width: 0.5rem;
        margin-right: 0.375rem;
   
        border-radius: 50%;
        
    }
    .name-status__status {
        display: flex;
        align-items: center;
        
        font-size: 16px;
        color: white;
        font-weight: 500;
    }

    .name-status__name {
        font-weight: 800;
        color: white;
    }

    .location__last {
        color: rgb(158, 158, 158);
        font-size: 16px;
        font-weight: 500;
    }
    .location__name {
        color: rgb(245, 245, 245);
        font-size: larger;
    }

    .episode__first {
        color: rgb(158, 158, 158);
        font-size: 16px;
        font-weight: 500;
    }
    .episode__name {
        color: rgb(245, 245, 245);
        font-size: larger;
    }

    .name-status__icon_red {
        background: red;
    }
    .name-status__icon_green {
        background: green;
    }
    .name-status__icon_gray {
        background: gray;
    }



    @media(max-width: 420px) {
        .character {
            flex-direction: column;
           
        height: initial;
        width: 100%;
        }
    }
</style>