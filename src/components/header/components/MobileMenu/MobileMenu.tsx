import { navigationLinks } from '../../constants/navigationLinks'
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
                    to={navigationLinks.home.path}
                    label={navigationLinks.home.label}
                    onClick={onClose}
                />

                {Object.entries(navigationLinks)
                    .filter(([key]) => key !== 'home' && key !== 'login')
                    .map(([key, link]) => (
                        <NavigationLink
                            key={key}
                            to={link.path}
                            label={link.label}
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
