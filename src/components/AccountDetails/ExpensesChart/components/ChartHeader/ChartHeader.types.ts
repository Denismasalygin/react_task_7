import type {Dispatch, SetStateAction} from "react";
import type {Period} from "../../ExpensesChart.types.ts";

export interface ChartHeaderProps {
    period: Period
    setPeriod: Dispatch<SetStateAction<Period>>
}