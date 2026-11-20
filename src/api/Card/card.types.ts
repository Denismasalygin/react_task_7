export enum CardStatus {
    ERROR = 'Ошибка',
    ACTIVE = 'Активно',
    EXPIRED = 'Истекший',
    SUSPENDED = 'Приостановленный',
}

export interface Card {
    id: number
    cardNumber: string
    cardExpire: string
    status: CardStatus
}

export interface CardsResponse {
    users: {
        id: number
        bank?: {
            cardNumber?: string
            cardExpire?: string
        }
    }[]
    total: number
    skip: number
    limit: number
}

export interface GetCardsParams {
    limit: number
    skip: number
}

export interface GetCardsResult {
    cards: Card[]
    total: number
}