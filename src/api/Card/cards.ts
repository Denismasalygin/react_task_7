import type {CardsResponse, GetCardsParams, GetCardsResult} from './card.types.ts'
import { CardStatus } from './card.types.ts'

const CARDS_URL = '/api/users'

const statuses: CardStatus[] = [
    CardStatus.ACTIVE,
    CardStatus.ERROR,
    CardStatus.EXPIRED,
    CardStatus.SUSPENDED,
]

export async function getCards({limit, skip}: GetCardsParams): Promise<GetCardsResult> {
    const response = await fetch(
        `${CARDS_URL}?limit=${limit}&skip=${skip}`,
    )

    if (!response.ok) {
        throw new Error('Не удалось загрузить список карт')
    }

    const data: CardsResponse = await response.json()

    const cards = data.users
        .filter((user) => user.bank?.cardNumber && user.bank?.cardExpire)
        .map((user) => ({
            id: user.id,
            cardNumber: user.bank!.cardNumber!,
            cardExpire: user.bank!.cardExpire!,
            status: statuses[user.id % statuses.length],
        }))

    return {
        cards,
        total: data.total,
    }
}