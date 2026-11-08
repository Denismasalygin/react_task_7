import {useAuth} from "../../../../context/AuthContext/useAuth.ts";
import {useNavigate} from "@tanstack/react-router";

export function AuthButton() {
    const { isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate({ to: '/login' })
    }

    const handleLogout = () => {
        logout()
        navigate({ to: '/' })
    }

    return (
        <button
            type="button"
            onClick={isAuthenticated ? handleLogout : handleLogin}
        >
            {isAuthenticated ? 'Выйти' : 'Войти'}
        </button>
    )
}
