import {useEffect, useState} from 'react'
import styles from './MobileHeader.module.scss'

import {MobileMenu} from "../MobileMenu/MobileMenu.tsx";
import {NavigationLink} from "../NavigationLink/NavigationLink.tsx";
import {navigationLinks} from "../../constants/navigationLinks.ts";

export function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((previousState) => !previousState)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        if (!isMenuOpen) {
            return
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeMenu()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [isMenuOpen])

    return (
        <>
        <header className={styles.header}>
            <div className={styles.left}>
                <img
                    src="/icons/HeaderIcon.svg"
                    alt="Логотип TipMinder"
                    className={styles.icon}
                />

                <NavigationLink
                    to={navigationLinks.home.path}
                    label={navigationLinks.home.label}
                />
            </div>

            <button
                type="button"
                className={styles.burgerButton}
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
            >
                <img
                    src="/icons/BurgerIcon.svg"
                    alt="Иконка меню"
                />
            </button>
        </header>
            {isMenuOpen && <MobileMenu onClose={closeMenu} />}
        </>
    )
}
