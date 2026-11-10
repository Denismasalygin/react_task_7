import { AuthButton } from '../AuthButton/AuthButton'
import { NavigationLink } from '../NavigationLink/NavigationLink'
import { homeLink, navigationLinks } from '../../constants/navigationLinks'
import styles from './DesktopHeader.module.scss'

export function DesktopHeader() {
    return (
        <header className={styles.navigation}>
            <div className={styles.left}>
                <img
                    src="/icons/HeaderIcon.svg"
                    alt=""
                />

                <NavigationLink
                    to={homeLink.to}
                    label={homeLink.label}
                />
            </div>

            <nav className={styles.center} aria-label="Основная навигация">
                {navigationLinks.map(({ to, label }) => (
                    <NavigationLink
                        key={to}
                        to={to}
                        label={label}
                    />
                ))}
            </nav>

            <div className={styles.right}>
                <AuthButton />
            </div>
        </header>
    )
}
