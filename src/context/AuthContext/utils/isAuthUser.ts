import type {AuthUser} from "../auth.types.ts";

export function isAuthUser(value: unknown): value is AuthUser {
    if (typeof value !== 'object' || value === null) {
        return false
    }

    const user = value as Record<string, unknown>

    return (
        typeof user.id === 'number' &&
        typeof user.username === 'string' &&
        typeof user.email === 'string' &&
        typeof user.firstName === 'string' &&
        typeof user.lastName === 'string' &&
        typeof user.image === 'string'
    )
}