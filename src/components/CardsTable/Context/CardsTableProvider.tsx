import type { ReactNode } from 'react'
import { CardsTableContext } from './CardsTableContext.ts'
import type { CardsTableContextValue } from './CardsTableContext.ts'

interface CardsTableProviderProps {
    value: CardsTableContextValue
    children: ReactNode
}

export function CardsTableProvider({value, children}: CardsTableProviderProps) {
    return (
        <CardsTableContext.Provider value={value}>
            {children}
        </CardsTableContext.Provider>
    )
}