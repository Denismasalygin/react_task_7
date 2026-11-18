import type {AccountSummaryItem} from "../AccountSummaryCards.types.ts";

export const accountSummaryItems = {
    username: {
        label: 'Имя пользователя',
        title: 'Александр',
        action: 'Профиль',
    },
    card: {
        label: 'Карта',
        title: '1921 0120 0120 0120',
        action: 'Все счета',
    },
    tipsTransferred: {
        label: 'Тип платежа',
        title: 'Александр',
        action: 'Подробнее',
    },
    tipsAmount: {
        label: 'Сумма',
        title: '100₽ (2030-12-31)',
        action: 'Подробнее',
    },
    gptPaid: {
        label: 'Оплачено',
        title: '200₽ (2030-12-31)',
        action: 'Подробнее',
    },
    tipsProcessing: {
        label: 'В обработке',
        title: '200₽ (2030-12-31)',
        action: 'Подробнее',
    },
} satisfies Record<string, AccountSummaryItem>