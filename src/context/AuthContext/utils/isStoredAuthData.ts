import {isAuthUser} from "./isAuthUser.ts";
import type {StoredAuthData} from "../authStorage.ts";


export function isStoredAuthData(value: unknown): value is StoredAuthData {
    if (typeof value !== 'object' || value === null) {
        return false
    }

    const data = value as Record<string, unknown>

    return (
        isAuthUser(data.user) &&
        typeof data.accessToken === 'string' &&
        typeof data.refreshToken === 'string'
    )
}