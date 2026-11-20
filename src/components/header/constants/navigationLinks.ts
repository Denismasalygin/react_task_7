import type { ToOptions } from '@tanstack/react-router'

interface NavigationLink {
    label: string
    path: ToOptions['to']
}

export const navigationLinks = {
    home: {
        label: 'TipMinder',
        path: '/',
    },
    about: {
        label: 'О счёте',
        path: '/about',
    },
    dashboard: {
        label: 'Общее состояние',
        path: '/dashboard',
    },
    priceList: {
        label: 'Прайс-лист',
        path: '/price-list',
    },
    question: {
        label: 'Вопросы и ответы',
        path: '/question',
    },
    contacts: {
        label: 'Контакты',
        path: '/contacts',
    },
    login: {
        label: 'Войти',
        path: '/login',
    },
} satisfies Record<string, NavigationLink>
