import { homeLink, navigationLinks } from '../../constants/navigationLinks'
import { NavigationLink } from '../NavigationLink/NavigationLink'
import { AuthButton } from '../AuthButton/AuthButton'

import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
    onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <nav
                id="mobile-navigation"
                className={styles.menu}
                aria-label="Мобильная навигация"
                onClick={(event) => event.stopPropagation()}
            >
                <NavigationLink
                    to={homeLink.to}
                    label={homeLink.label}
                    onClick={onClose}
                />

                {navigationLinks.map(({ to, label }) => (
                    <NavigationLink
                        key={to}
                        to={to}
                        label={label}
                        onClick={onClose}
                    />
                ))}

                <div className={styles.authButton}>
                    <AuthButton />
                </div>
            </nav>
        </div>
    )
}
