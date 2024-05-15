export interface ICharacter {
    id: number,
    image: string,
    name: string,
    species: string,
    status: string,
    episode: string,
    location: {
        name: string
    }
}