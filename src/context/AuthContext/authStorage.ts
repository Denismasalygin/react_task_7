import type {AuthUser} from "./auth.types.ts";
import {isStoredAuthData} from "./utils/isStoredAuthData.ts";


export interface StoredAuthData {
    user: AuthUser
    accessToken: string
    refreshToken: string
}

const AUTH_STORAGE_KEY = 'auth-session'

export function getStoredAuthData(): StoredAuthData | null {
    const savedData = localStorage.getItem(AUTH_STORAGE_KEY)

    if (!savedData) {
        return null
    }

    const parsedData: unknown = JSON.parse(savedData)

    if (isStoredAuthData(parsedData)) {
        return parsedData
    }

    removeStoredAuthData()
    return null
}

export function saveAuthData(data: StoredAuthData): void {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data))
}

export function removeStoredAuthData(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY)
}