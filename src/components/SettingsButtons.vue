<template>
    <div class="settings">
        <div class="settings__filter">
            <div class="settings__filter__input-select">
                <input 
                    v-bind:value="characterStore.inputName"
                    @input="characterStore.inputName = ($event.target as HTMLInputElement).value"
                    class="settings__filter__input" placeholder="Enter a name">
                <select @change="characterStore.selectedStatus = ($event.target as HTMLSelectElement).value" class="settings__filter__select">
                    <option selected disabled class="settings__filter__select__option">Select status</option>
                    <option value="alive" class="settings__filter__select__option">Alive</option>
                    <option value="dead" class="settings__filter__select__option">Dead</option>
                    <option value="unknown" class="settings__filter__select__option">Unknown</option>
                </select>
            </div>
            <AppButton class="settings__filter__button"  @click="findByFilter()">ACCEPT</AppButton>
        </div>
        <div class="settings__pagination">
            <AppButton class="settings__pagination__button" v-if="characterStore.responseInfo.prev" @click="prevPage()">PREV</AppButton>
            <AppButton class="settings__pagination__button" v-if="characterStore.responseInfo.next" @click="nextPage()">NEXT</AppButton>    
        </div>
    </div>

</template>


<script setup lang="ts">
import AppButton from "@/components/AppButton.vue"
import { useCharactersStore } from '@/stores/useCharactersStore';

const characterStore = useCharactersStore()


function nextPage() {
    characterStore.getCharacters(characterStore.responseInfo.next as string)
}
function prevPage() {
    characterStore.getCharacters(characterStore.responseInfo.prev as string)
}

function findByFilter() {
   characterStore.getCharacters(`https://rickandmortyapi.com/api/character/?name=${characterStore.inputName.toLowerCase()}&status=${characterStore.selectedStatus}`)
}

</script>


<style scoped>
 .settings {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 1.5rem 0px 0px 0px
    }
    .settings__pagination{
        display: flex;
        flex-direction: row;
        grid-gap: 10px;
    }
  

    .settings__filter {
        align-items: center;
        display: flex;
        flex-direction: column;
        grid-gap: 10px;
    }
    .settings__filter__input {
        font-size: 1.5rem;
        width: 240px;
        height: 60px;
        border: 1px solid rgb(255, 152, 0);
        background: none;
        color: white;
        outline: none;
        padding-left: 5px;
        border-radius: 10px;
    }
    .settings__filter__select {
        font-size: 1.5rem;
        width: 220px;
        height: 60px;
        border: 1px solid rgb(255, 152, 0);
        background: rgb(39, 43, 51);
        color: white;
        outline: none;
        padding-left: 5px;
        border-radius: 10px;
        cursor: pointer;
        
    }
   .settings__filter__select__option {
        color: white;
   }


.settings__filter__input-select {
    display: flex;
    flex-direction: row;
    grid-gap: 10px
}
.settings__filter__button {
  
    width: 470px; height: 60px;
}

.settings__pagination__button {
    width: 160px; height: 60px;
}

@media (max-width: 940px) {
    .settings {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        grid-gap: 25px
    }
    
}

@media (max-width: 500px) {
    .settings__filter__button {
        width: 280px;
    }
    .settings__filter__input {
        width: 140px;
        font-size: 1rem;
    }
    .settings__filter__select{
        width: 130px;
        font-size: 0.8rem;
    }
}
@media(max-width: 420px) {
    .settings__pagination__button {
        width: 140px;
    }
}

</style>