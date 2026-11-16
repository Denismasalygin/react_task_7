import styles from './Footer.module.scss'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span className={styles.logo}>TipMinder</span>

            <span className={styles.copyright}>
                2022 Все права защищены
            </span>
        </footer>
    )
}