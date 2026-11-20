import type {Transaction} from "../../../api/Transaction/transaction.types.ts";

export interface ExpensesChartProps {
    transactions: Transaction[]
}

export type Period = 'day' | 'month'