import type { AccountSummaryCardsProps } from './AccountSummaryCards.types.ts'
import styles from './AccountSummaryCards.module.scss'

export function AccountSummaryCards({ items }: AccountSummaryCardsProps) {
    return (
        <div className={styles.cards}>
            {Object.entries(items).map(([key, item]) => (
                <article className={styles.card} key={key}>
                    <span className={styles.label}>
                        {item.label}
                    </span>

                    <h3 className={styles.title}>
                        {item.title}
                    </h3>

                    <span className={styles.action}>
                        {item.action}
                        <img
                            src={`${import.meta.env.BASE_URL}icons/Arrow.svg`}
                            alt="Иконка стрелоки"
                        />
                    </span>
                </article>
            ))}
        </div>
    )
}