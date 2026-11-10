import type { ToOptions } from '@tanstack/react-router'

interface NavigationLink {
    label: string
    to: ToOptions['to']
}

export const homeLink: NavigationLink = {
    label: 'TipMinder',
    to: '/',
}

export const navigationLinks: NavigationLink[] = [
    {
        label: 'О нас',
        to: '/about',
    },
    {
        label: 'Общее состояние',
        to: '/dashboard',
    },
    {
        label: 'Прайс-лист',
        to: '/price-list',
    },
    {
        label: 'Вопросы и ответы',
        to: '/question',
    },
    {
        label: 'Контакты',
        to: '/contacts',
    },
]
