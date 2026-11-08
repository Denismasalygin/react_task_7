import {useEffect} from 'react'
import {
    createRootRoute,
    Outlet,
    useNavigate,
} from '@tanstack/react-router'

import {Header} from '../components/header/components/Header/Header'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundRedirect,
})

function NotFoundRedirect() {
    const navigate = useNavigate()

    useEffect(() => {
        void navigate({
            to: '/',
            replace: true,
        })
    }, [navigate])

    return null
}

function RootComponent() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}