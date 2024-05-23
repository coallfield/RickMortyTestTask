import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICharacter } from '@/interfaces/ICharacter'
import RickMortyApi from '@/services/RickMortyApi'
import type { IResponseInfo } from '@/interfaces/IResponseInfo'

export const useCharactersStore = defineStore('characters', () => {
  
  const responseInfo = ref<IResponseInfo>({} as IResponseInfo)
  const characters = ref<ICharacter[]>([])
  const inputName = ref('')
  const selectedStatus = ref('')
  const isLoading = ref(false)
  const errorMessage = ref('')

  const getCharacters = async (url: string) => {
    isLoading.value = true
    try {
      const response = await RickMortyApi.getCharacters(url)
      setCharacters(response.results)
      setResponseInfo(response.info)
    } catch (error) {
        if(error instanceof Error) {
          errorMessage.value = error.message
        }
        setTimeout(() => {
          errorMessage.value = ''
        }, 1500)
    } finally {
      isLoading.value = false
    }
      
  }


  const getNameOfEpisode = async (url: string): Promise<string> => {
    try {
      const response = await RickMortyApi.getNameOfEpisode(url)
      return response
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
      }
      return `${url.slice(32).replace(/\//g, ' ')}`
    }
  }

  const setCharacters = (data: ICharacter[]) => {
      characters.value = data
  }
  const setResponseInfo = (data: IResponseInfo) => {
    responseInfo.value = data
  }

  return { getCharacters, getNameOfEpisode, characters, responseInfo, inputName, selectedStatus, isLoading, errorMessage }
})
