import {useAuth} from "../../../../context/AuthContext/useAuth.ts";
import {useNavigate} from "@tanstack/react-router";
import styles from "./AuthButton.module.scss";

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
            className={styles.authButton}
        >
            <img
                src="/icons/PersonIcon.svg"
                alt=""
            />
            <span className={styles.verticalLine}></span>
            {isAuthenticated ? 'Выйти' : 'Войти'}
        </button>
    )
}
