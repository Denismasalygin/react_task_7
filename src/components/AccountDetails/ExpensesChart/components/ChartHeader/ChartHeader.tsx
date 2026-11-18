import styles from './ChartHeader.module.scss'
import type {ChartHeaderProps} from "./ChartHeader.types.ts";

function ChartHeader({ period, setPeriod }: ChartHeaderProps) {
    const handleDayClick = () => {
        setPeriod('day');
    }

    const handleMonthClick = () => {
        setPeriod('month');
    }

    return (
        <div className={styles.header}>
            <h2 className={styles.title}>Расходы</h2>

            <div className={styles.periodSwitch}>
                <button
                    className={period === 'day' ? styles.activeButton : styles.button}
                    onClick={handleDayClick}
                    type="button"
                >
                    День
                </button>

                <button
                    className={period === 'month' ? styles.activeButton : styles.button}
                    onClick={handleMonthClick}
                    type="button"
                >
                    Месяц
                </button>
            </div>
        </div>
    )
}

export default ChartHeader