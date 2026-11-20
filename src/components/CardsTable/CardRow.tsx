import clsx from 'clsx'
import styles from './Style/CardsTable.module.scss'
import { CardStatus } from '../../api/Card/card.types.ts'
import {useCardsTable} from "./Hooks/useCardsTable.ts";
import type {CardRowProps} from "./CardRowProps.types.ts";

export function CardRow({ card, index }: CardRowProps) {
    const {getCardStatus, onBlockCard, onFreezeCard} = useCardsTable()

    const status = getCardStatus(card)

    const handleBlock = () => {
        onBlockCard(card.id)
    }

    const handleFreeze = () => {
        onFreezeCard(card.id)
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
                        <img src={`${import.meta.env.BASE_URL}icons/lock.svg`} alt="" />
                    </button>

                    <button
                        type="button"
                        className={styles.actionButton}
                        title="Заморозить карту"
                        aria-label="Заморозить карту"
                        onClick={handleFreeze}
                    >
                        <img src={`${import.meta.env.BASE_URL}icons/freeze.svg`}alt="" />
                    </button>
                </div>
            </td>
        </tr>
    )
}