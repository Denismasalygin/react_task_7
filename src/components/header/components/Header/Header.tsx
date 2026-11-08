import { Link } from '@tanstack/react-router'
import { AuthButton } from '../AuthButton/AuthButton'
import { homeLink, navigationLinks } from '../../constants/navigationLinks'
import styles from './Header.module.scss'

export function Header() {
    return (
        <nav className={styles.navigation}>
            <div className={styles.left}>
                <img
                    src="/icons/HeaderIcon.svg"
                    alt=""
                />
                <Link
                    to={homeLink.to}
                    className={styles.link}
                    activeProps={{className: styles.active}}
                >
                    {homeLink.label}
                </Link>
            </div>

            <div className={styles.center}>
                {navigationLinks.map(({to, label}) => (
                    <Link
                        key={to}
                        to={to}
                        className={styles.link}
                        activeProps={{ className: styles.active }}
                    >
                        {label}
                    </Link>
                ))}
            </div>

            <div className={styles.right}>
                <AuthButton />
            </div>
        </nav>
    )
}