import { Link } from '@tanstack/react-router'
import { AuthButton } from '../AuthButton/AuthButton'
import styles from './Header.module.scss'
import {navigationLinks} from "../../constants/navigationLinks.ts";

export function Header() {
    return (
        <nav className={styles.navigation}>
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

            <AuthButton />
        </nav>
    )
}