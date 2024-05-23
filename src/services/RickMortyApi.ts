import type { IApiResponse } from "@/interfaces/IApiResponse"
import type { ICharacter } from "@/interfaces/ICharacter"


export default class RickMortyApi {
    static async getCharacters(url: string): Promise<IApiResponse> {
        const response = await fetch(url) 
        if(!response.ok) {
            throw new Error(`FAILED TO GET CHARACTERS`)
        }
        const data: IApiResponse = await response.json()
        data.results = data.results.map((el: ICharacter) => {
            return {
                id: el.id,
                image: el.image,
                name: el.name,
                species: el.species,
                status: el.status,
                episode: el.episode[0],
                location: {
                    name: el.location.name
                }
            }
        })
        return data
    }

    static async getNameOfEpisode(url: string): Promise<string> {
        const response = await fetch(url)
       
        if(!response.ok) {
            throw new Error('FAILED TO LOAD THE NAME OF EPISODE')
        }
        const data = await response.json()
        const episodeName: string = data.name
        return episodeName
    }
}