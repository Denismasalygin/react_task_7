export interface LoginCredentials {
    username: string
    password: string
}

export interface AuthResponse {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    image: string
    accessToken: string
    refreshToken: string
}