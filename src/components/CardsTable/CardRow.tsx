import clsx from 'clsx'
import styles from './CardsTable.module.scss'
import { CardStatus, type Card } from '../../api/Card/card.types.ts'

interface CardRowProps {
    card: Card
    index: number
    status: CardStatus
    onBlock: (cardId: number) => void
    onFreeze: (cardId: number) => void
}

export function CardRow({card, index, status, onBlock, onFreeze}: CardRowProps) {
    const handleBlock = () => {
        onBlock(card.id)
    }

    const handleFreeze = () => {
        onFreeze(card.id)
    }

    return (
        <tr>
            <td>{index}</td>
            <td>{card.cardNumber}</td>

            <td>
        <span
            className={clsx(styles.status, {
                [styles.error]: status === CardStatus.ERROR,
                [styles.active]: status === CardStatus.ACTIVE,
                [styles.expired]: status === CardStatus.EXPIRED,
                [styles.suspended]: status === CardStatus.SUSPENDED,
            })}
        >
          {status}
        </span>
            </td>

            <td>{card.cardExpire}</td>

            <td>
                <div className={styles.actions}>
                    <button
                        type="button"
                        className={styles.actionButton}
                        title="Заблокировать карту"
                        aria-label="Заблокировать карту"
                        onClick={handleBlock}
                    >
                        <img src="/icons/lock.svg" alt="" />
                    </button>

                    <button
                        type="button"
                        className={styles.actionButton}
                        title="Заморозить карту"
                        aria-label="Заморозить карту"
                        onClick={handleFreeze}
                    >
                        <img src="/icons/freeze.svg" alt="" />
                    </button>
                </div>
            </td>
        </tr>
    )
}