import {useEffect, useState} from 'react'
import { Link } from '@tanstack/react-router'
import { homeLink } from '../../constants/navigationLinks'
import styles from './MobileHeader.module.scss'
import {MobileMenu} from "../MobileMenu/MobileMenu.tsx";

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
                    alt=""
                    className={styles.icon}
                />

                <Link
                    to={homeLink.to}
                    className={styles.link}
                    activeProps={{ className: styles.active }}
                >
                    {homeLink.label}
                </Link>
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
                    alt=""
                />
            </button>
        </header>
            {isMenuOpen && <MobileMenu onClose={closeMenu} />}
        </>
    )
}
