import { createFileRoute } from '@tanstack/react-router'

function AboutPage() {
    return (
        <main>
            <h1>О нас</h1>
            <p>Информация о компании.</p>
        </main>
    )
}

export const Route = createFileRoute('/about')({
    component: AboutPage,
})