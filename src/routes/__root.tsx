import { createRootRoute, Outlet } from '@tanstack/react-router'

import { Header } from '../components/header/Header.tsx'

export const Route = createRootRoute({
    component: RootComponent,
})

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