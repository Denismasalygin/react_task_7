import { createFileRoute } from '@tanstack/react-router'

function HomePage() {
  return (
      <main>
        <h1>React Task 7</h1>
        <p>Главная страница работает!</p>
      </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
