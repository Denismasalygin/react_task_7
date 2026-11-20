import styles from './Style/CardsTable.module.scss'
import {useCardsTable} from "./Hooks/useCardsTable.ts";

const PAGE_SIZE_OPTIONS = [10, 20, 50]

export function PageSizeSelect() {
    const { pageSize, onPageSizeChange } = useCardsTable()

    return (
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
    )
}