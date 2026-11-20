import { DesktopHeader } from './components/DesktopHeader/DesktopHeader'
import { MobileHeader } from './components/MobileHeader/MobileHeader'
import styles from './Header.module.scss'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.desktopHeader}>
                <DesktopHeader />
            </div>

            <div className={styles.mobileHeader}>
                <MobileHeader />
            </div>
        </div>
    )
}