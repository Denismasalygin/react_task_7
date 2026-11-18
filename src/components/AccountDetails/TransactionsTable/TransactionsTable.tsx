import { TransactionsTableView } from './TransactionsTableView'
import type {TransactionsTableProps} from "./TransactionsTableProps.types.ts";

export function TransactionsTable({transactions}: TransactionsTableProps) {
    return <TransactionsTableView transactions={transactions} />
}