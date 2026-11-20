import styles from './Style/CardsTable.module.scss'
import {useCardsTable} from "./Hooks/useCardsTable.ts";

export function PageControls() {
    const {page, totalPages, isFetching, onPreviousPage, onNextPage} = useCardsTable()

    return (
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
    )
}