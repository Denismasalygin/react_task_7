import { AuthButton } from '../AuthButton/AuthButton'
import { NavigationLink } from '../NavigationLink/NavigationLink'
import { navigationLinks } from '../../constants/navigationLinks'
import styles from './DesktopHeader.module.scss'

export function DesktopHeader() {
    return (
        <header className={styles.navigation}>
            <div className={styles.left}>
                <img
                    src={`${import.meta.env.BASE_URL}icons/HeaderIcon.svg`}
                    alt="Логотип TipMinder"
                />

                <NavigationLink
                    to={navigationLinks.home.path}
                    label={navigationLinks.home.label}
                />
            </div>

            <nav className={styles.center} aria-label="Основная навигация">
                {Object.entries(navigationLinks)
                    .filter(([key]) => key !== 'home' && key !== 'login')
                    .map(([key, link]) => (
                        <NavigationLink
                            key={key}
                            to={link.path}
                            label={link.label}
                        />
                    ))}
            </nav>

            <div className={styles.right}>
                <AuthButton />
            </div>
        </header>
    )
}
