import type {Transaction} from "../../../../../api/Transaction/transaction.types.ts";
import {formatDate} from "../formatDate.ts";
import type {Period} from "../../ExpensesChart.types.ts";
import type {ChartItem} from "./chartData.types.ts";

export function getChartData(
    transactions: Transaction[],
    period: Period,
): ChartItem[] {
    const groupedTransactions = new Map<string, number>();

    transactions.forEach((transaction) => {
        const date = new Date(transaction.date);

        const key =
            period === 'day'
                ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
                : `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

        const currentAmount = groupedTransactions.get(key) ?? 0;

        groupedTransactions.set(key, currentAmount + transaction.amount);
    })

    return Array.from(groupedTransactions.entries())
        .sort(([firstKey], [secondKey]) => firstKey.localeCompare(secondKey))
        .map(([key, amount]) => {
            const [year, month, day] = key.split('-').map(Number);
            const date = new Date(year, month - 1, day ?? 1);

            return {
                key,
                label:
                    period === 'day'
                        ? formatDate(date)
                        : date.toLocaleDateString('ru-RU', {
                            month: 'short',
                            year: 'numeric',
                        }),
                amount,
            }
        })
}