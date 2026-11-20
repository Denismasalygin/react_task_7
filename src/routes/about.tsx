import { useEffect } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuth } from '../context/AuthContext/useAuth.ts'
import {TransactionsTable} from "../components/AccountDetails/TransactionsTable/TransactionsTable.tsx";
import ExpensesChart from "../components/AccountDetails/ExpensesChart/ExpensesChart.tsx";
import {useTransactions} from "../api/Transaction/hooks/useTransactions.ts";
import styles from './about.module.scss'
import {AccountSummaryCards} from "../components/AccountDetails/AccountSummaryCards/AccountSummaryCards.tsx";
import {accountSummaryItems} from "../components/AccountDetails/AccountSummaryCards/Constants/accountSummary.ts";

function AboutPage() {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            void navigate({
                to: '/login',
                replace: true,
            })
        }
    }, [isAuthenticated, navigate])

    const {
        data,
        isPending,
        isError,
        error,
    } = useTransactions(user?.id, isAuthenticated);

    if (!isAuthenticated || !user) {
        return <main>Перенаправление на страницу входа...</main>
    }

    if (isPending) {
        return <main>Загрузка операций...</main>
    }

    if (isError) {
        return <main>{error.message}</main>
    }

    return (
        <main className={styles.dashboard}>
            <h1 className={styles.title}>Детали счёта</h1>

            <div className={styles.content}>
                <AccountSummaryCards items={accountSummaryItems}/>

                <div className={styles.contentGrid}>
                    <section className={styles.chart}>
                        <ExpensesChart transactions={data}/>
                    </section>

                    <section className={styles.table}>
                        <TransactionsTable transactions={data}/>
                    </section>
                </div>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/about')({
    component: AboutPage,
})
