import type { Code } from "@/types/code";

export function getCodesFromStorage(): Code[]{
    const userCodes: Code[] = [];
    const userCodesJson: string | null = localStorage.getItem("userCodes")

    if(userCodesJson){
   userCodes.push(JSON.parse(userCodesJson))
        return userCodes
    }

    return userCodes
}


export function setCodesToStorage(userCodes: Code[]){
    localStorage.setItem("userCodes", JSON.stringify(userCodes))
}