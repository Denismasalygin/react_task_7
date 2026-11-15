import styles from './CardsTable.module.scss'
import { CardRow } from './CardRow'
import type {CardsTableViewProps} from "./CardsTableView.types.ts";

const PAGE_SIZE_OPTIONS = [10, 20, 50]

export function CardsTableView({cards, page, pageSize, totalPages, isFetching, getCardStatus, onBlockCard, onFreezeCard, onPreviousPage, onNextPage, onPageSizeChange}: CardsTableViewProps) {
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
                            status={getCardStatus(card)}
                            onBlock={onBlockCard}
                            onFreeze={onFreezeCard}
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
                <div className={styles.pageSize}>
                    <span>Показывать по:</span>

                    <select value={pageSize} onChange={onPageSizeChange}>
                        {PAGE_SIZE_OPTIONS.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.pageControls}>
                    <button
                        type="button"
                        className={styles.pageButton}
                        disabled={page === 0 || isFetching}
                        onClick={onPreviousPage}
                        aria-label="Предыдущая страница"
                    >
                        &lt;
                    </button>

                    <span>{page + 1} / {Math.max(totalPages, 1)}</span>

                    <button
                        type="button"
                        className={styles.pageButton}
                        disabled={page >= totalPages - 1 || isFetching}
                        onClick={onNextPage}
                        aria-label="Следующая страница"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    )
}