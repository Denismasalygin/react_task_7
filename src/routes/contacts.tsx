import { createFileRoute } from '@tanstack/react-router'

function ContactsPage() {
  return (
      <main>
        <h1>Контакты</h1>
        <p>Здесь будет размещена контактная информация.</p>
      </main>
  )
}

export const Route = createFileRoute('/contacts')({
  component: ContactsPage,
})