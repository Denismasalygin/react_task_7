import { useContext } from 'react'
import { CardsTableContext } from '../Context/CardsTableContext.ts'

export function useCardsTable() {
    const context = useContext(CardsTableContext)

    if (!context) {
        throw new Error(
            'useCardsTable должен использоваться внутри CardsTableProvider',
        )
    }

    return context
}