import { createFileRoute } from '@tanstack/react-router'

function PriceListPage() {
  return (
      <main>
        <h1>Прайс-лист</h1>
        <p>Здесь будет представлен список услуг и их стоимость.</p>
      </main>
  )
}

export const Route = createFileRoute('/price-list')({
  component: PriceListPage,
})