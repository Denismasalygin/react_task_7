import { createFileRoute } from '@tanstack/react-router'

function QuestionPage() {
  return (
      <main>
        <h1>Вопросы и ответы</h1>
        <p>Здесь будут собраны ответы на часто задаваемые вопросы.</p>
      </main>
  )
}

export const Route = createFileRoute('/question')({
  component: QuestionPage,
})