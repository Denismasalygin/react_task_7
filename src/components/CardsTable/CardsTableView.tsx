import styles from './Style/CardsTable.module.scss'
import { CardRow } from './CardRow'
import type { CardsTableViewProps } from './CardsTableView.types.ts'
import { PageControls } from './PageControls'
import { PageSizeSelect } from './PageSizeSelect'
import {useCardsTable} from "./Hooks/useCardsTable.ts";

export function CardsTableView({ cards }: CardsTableViewProps) {
    const { page, pageSize } = useCardsTable()

    return (
        <section className={styles.container}>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>&#8470;</th>
                        <th>Номер карты</th>
                        <th>Статус</th>
                        <th>Действительна до</th>
                        <th>Действия</th>
                    </tr>
                    </thead>

                    <tbody>
                    {cards.map((card, index) => (
                        <CardRow
                            key={card.id}
                            card={card}
                            index={page * pageSize + index + 1}
                        />
                    ))}

                    {cards.length === 0 && (
                        <tr>
                            <td colSpan={5}>Карты не найдены</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <PageSizeSelect />
                <PageControls />
            </div>
        </section>
    )
}