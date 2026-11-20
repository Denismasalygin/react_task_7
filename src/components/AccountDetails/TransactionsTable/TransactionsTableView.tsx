import styles from './TransactionsTable.module.scss'
import { TransactionRow } from './TransactionRow'
import type { TransactionsTableViewProps } from './TransactionsTableView.types.ts'

export function TransactionsTableView({transactions}: TransactionsTableViewProps) {
    return (
        <section className={styles.container}>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Локация</th>
                        <th>Сумма</th>
                    </tr>
                    </thead>

                    <tbody>
                    {transactions.map((transaction) => (
                        <TransactionRow
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}

                    {transactions.length === 0 && (
                        <tr>
                            <td colSpan={3}>Операции не найдены</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    )
}