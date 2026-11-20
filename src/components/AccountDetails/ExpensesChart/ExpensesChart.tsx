import { useMemo, useState } from 'react'
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import styles from './ExpensesChart.module.scss'
import type {ExpensesChartProps, Period} from "./ExpensesChart.types.ts";
import {getChartData} from "./utils/getChartData/getChartData.ts";
import {CustomActiveDot} from "./components/CustomActiveDot/CustomActiveDot.tsx";
import ChartHeader from "./components/ChartHeader/ChartHeader.tsx";

function ExpensesChart({ transactions }: ExpensesChartProps) {
    const [period, setPeriod] = useState<Period>('day');

    const chartData = useMemo(
        () => getChartData(transactions, period),
        [transactions, period],
    )

    return (
        <section className={styles.wrapper}>
            <ChartHeader
                period={period}
                setPeriod={setPeriod}
            />

            <div className={styles.chart}>
                {chartData.length === 0 ? (
                    <p className={styles.emptyMessage}>Нет данных для отображения</p>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: 20, bottom: 10, left: 10 }}
                        >
                            <defs>
                                <linearGradient
                                    id="expensesGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop offset="0%" stopColor="#F29B38" stopOpacity={0.35}/>
                                    <stop offset="100%" stopColor="#F29B38" stopOpacity={0}/>
                                </linearGradient>
                            </defs>

                            <CartesianGrid strokeDasharray="0" vertical={false}/>

                            <XAxis
                                dataKey="label"
                                tick={{fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <YAxis
                                tickFormatter={(value: number) =>
                                    new Intl.NumberFormat('ru-RU', {
                                        notation: 'compact',
                                        maximumFractionDigits: 1,
                                    }).format(value)
                                }
                                tick={{ fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                            />

                            <Area
                                dataKey="amount"
                                type="monotone"
                                stroke="#F29B38"
                                strokeWidth={2}
                                fill="url(#expensesGradient)"
                                dot={false}
                                activeDot={<CustomActiveDot />}
                                isAnimationActive={true}
                                animationDuration={700}
                                animationEasing="ease-in-out"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </section>
    )
}

export default ExpensesChart