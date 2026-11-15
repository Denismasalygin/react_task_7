import { createFileRoute } from '@tanstack/react-router'
import { CardsTable } from '../components/CardsTable/CardsTable'
import styles from './dashboard.module.scss'

function DashboardPage() {
    return (
        <main className={styles.Dashboard}>
            <h1 className={styles.DashboardName}>Карты</h1>

            <CardsTable />
        </main>
    )
}

export const Route = createFileRoute('/dashboard')({
    component: DashboardPage,
})
