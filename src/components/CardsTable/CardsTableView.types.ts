import type {Card, CardStatus} from "../../api/Card/card.types.ts";
import type {ChangeEvent} from "react";

export interface CardsTableViewProps {
    cards: Card[]
    page: number
    pageSize: number
    totalPages: number
    isFetching: boolean
    getCardStatus: (card: Card) => CardStatus
    onBlockCard: (cardId: number) => void
    onFreezeCard: (cardId: number) => void
    onPreviousPage: () => void
    onNextPage: () => void
    onPageSizeChange: (event: ChangeEvent<HTMLSelectElement>) => void
}