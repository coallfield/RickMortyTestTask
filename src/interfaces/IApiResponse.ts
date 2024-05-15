import type { ICharacter } from "./ICharacter";
import type { IResponseInfo } from "./IResponseInfo";
export interface IApiResponse {
    info: IResponseInfo,
    results: ICharacter[]
}