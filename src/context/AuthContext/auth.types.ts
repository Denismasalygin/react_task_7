export interface AuthUser {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    image: string
}

export interface AuthContextType {
    user: AuthUser | null
    accessToken: string | null
    refreshToken: string | null
    isAuthenticated: boolean
    login: (
        user: AuthUser,
        accessToken: string,
        refreshToken: string,
    ) => void
    logout: () => void
}