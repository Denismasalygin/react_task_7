import {useAuth} from "../../../../context/AuthContext/useAuth.ts";
import {useNavigate} from "@tanstack/react-router";
import styles from "./AuthButton.module.scss";
import {navigationLinks} from "../../constants/navigationLinks.ts";
import {AUTH_BUTTON_LABELS} from "../../constants/authButton.ts";

export function AuthButton() {
    const { isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate({ to: navigationLinks.login.path })
    }

    const handleLogout = () => {
        logout()
        navigate({ to: navigationLinks.home.path })
    }

    return (
        <button
            type="button"
            onClick={isAuthenticated ? handleLogout : handleLogin}
            className={styles.authButton}
        >
            <img
                src="/icons/PersonIcon.svg"
                alt="Иконка пользователя"
            />
            <span className={styles.verticalLine}></span>
            {isAuthenticated
                ? AUTH_BUTTON_LABELS.logout
                : AUTH_BUTTON_LABELS.login}
        </button>
    )
}
