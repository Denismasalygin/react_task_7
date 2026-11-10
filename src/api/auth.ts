import type {AuthResponse, LoginCredentials} from './auth.types'

const AUTH_URL = 'https://dummyjson.com/auth/login'

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...credentials,
            expiresInMins: 30,
        }),
    })

    if (!response.ok) {
        throw new Error('Неверный логин или пароль')
    }

    return await response.json()
}