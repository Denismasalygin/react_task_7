import { Link, type ToOptions } from '@tanstack/react-router'
import type { MouseEventHandler } from 'react'
import styles from './NavigationLink.module.scss'

interface NavigationLinkProps {
    to: ToOptions['to']
    label: string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export function NavigationLink({to, label, onClick}: NavigationLinkProps) {
    return (
        <Link
            to={to}
            className={styles.link}
            activeProps={{ className: styles.active }}
            onClick={onClick}
        >
            {label}
        </Link>
    )
}
