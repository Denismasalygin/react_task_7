import {formatAmount} from "./utils/formatAmount.ts";
import {formatDate} from "../ExpensesChart/utils/formatDate.ts";
import type {TransactionRowProps} from "./TransactionRowProps.types.ts";

export function TransactionRow({ transaction }: TransactionRowProps) {
    return (
        <tr>
            <td>{formatDate(transaction.date)}</td>
            <td>{transaction.country}</td>
            <td>{formatAmount(transaction.amount)}</td>
        </tr>
    )
}