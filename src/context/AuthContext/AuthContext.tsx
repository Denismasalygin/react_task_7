import { useState, type ReactNode } from 'react'
import { AuthContext } from './authContext.ts'
import type { AuthUser } from './auth.types.ts'
import {getStoredAuthData, removeStoredAuthData, saveAuthData, type StoredAuthData} from "./authStorage.ts";


interface AuthProviderProps {
    children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [authData, setAuthData] = useState<StoredAuthData | null>(getStoredAuthData)

    const login = (user: AuthUser, accessToken: string, refreshToken: string) => {
        const session: StoredAuthData = {
            user,
            accessToken,
            refreshToken,
        }

        saveAuthData(session)
        setAuthData(session)
    }

    const logout = () => {
        removeStoredAuthData()
        setAuthData(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user: authData?.user ?? null,
                accessToken: authData?.accessToken ?? null,
                refreshToken: authData?.refreshToken ?? null,
                isAuthenticated: authData !== null,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}