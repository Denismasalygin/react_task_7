import { createContext } from 'react'
import type { ChangeEvent } from 'react'
import type { Card, CardStatus } from '../../../api/Card/card.types.ts'

interface PaginationContextValue {
    page: number
    pageSize: number
    totalPages: number
    isFetching: boolean
    onPreviousPage: () => void
    onNextPage: () => void
    onPageSizeChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

interface CardActionsContextValue {
    getCardStatus: (card: Card) => CardStatus
    onBlockCard: (cardId: number) => void
    onFreezeCard: (cardId: number) => void
}

export type CardsTableContextValue =
    PaginationContextValue & CardActionsContextValue

export const CardsTableContext =
    createContext<CardsTableContextValue | null>(null)