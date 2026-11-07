import { createFileRoute } from '@tanstack/react-router'

function DashboardPage() {
  return (
      <main>
        <h1>Общее состояние</h1>
        <p>Здесь будет общая информация о состоянии системы.</p>
      </main>
  )
}

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})
