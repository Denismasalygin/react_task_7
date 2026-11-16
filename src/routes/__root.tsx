import {useEffect} from 'react'
import {
    createRootRoute,
    Outlet,
    useNavigate,
} from '@tanstack/react-router'

import {Header} from '../components/header/Header.tsx'
import {navigationLinks} from "../components/header/constants/navigationLinks.ts";
import {Footer} from "../components/header/components/Footer/Footer.tsx";
import styles from './__root.module.scss'

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: NotFoundRedirect,
})

function NotFoundRedirect() {
    const navigate = useNavigate()

    useEffect(() => {
        void navigate({
            to: navigationLinks.home.path,
            replace: true,
        })
    }, [navigate])

    return null
}

function RootComponent() {
    return (
        <div className={styles.app}>
            <Header/>

            <main className={styles.main}>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}