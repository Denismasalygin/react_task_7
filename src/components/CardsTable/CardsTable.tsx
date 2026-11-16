import { useState, type ChangeEvent } from 'react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getCards } from '../../api/Card/cards.ts'
import { Loader } from '../Loader/Loader'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage.tsx'
import { CardsTableView } from './CardsTableView'
import { CardStatus } from '../../api/Card/card.types.ts'
import type { Card } from '../../api/Card/card.types.ts'
import {CardsTableProvider} from "./Context/CardsTableProvider.tsx";

export function CardsTable() {
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)

    const [cardStatuses, setCardStatuses] = useState<
        Record<number, CardStatus>
    >({})

    const {
        data,
        isPending,
        isError,
        error,
        isFetching,
    } = useQuery({
        queryKey: ['cards', page, pageSize],
        queryFn: () =>
            getCards({
                limit: pageSize,
                skip: page * pageSize,
            }),
        placeholderData: keepPreviousData,
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
    })

    const cards = data?.cards ?? []
    const total = data?.total ?? 0
    const totalPages = Math.ceil(total / pageSize)

    const getCardStatus = (card: Card): CardStatus => {
        return cardStatuses[card.id] ?? card.status
    }

    const updateCardStatus = (cardId: number, status: CardStatus) => {
        setCardStatuses((previous) => ({
            ...previous,
            [cardId]: status,
        }))
    }

    const handleBlockCard = (cardId: number) => {
        updateCardStatus(cardId, CardStatus.ERROR)
    }

    const handleFreezeCard = (cardId: number) => {
        updateCardStatus(cardId, CardStatus.SUSPENDED)
    }

    const handlePreviousPage = () => {
        setPage(page - 1)
    }

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePageSizeChange = (
        event: ChangeEvent<HTMLSelectElement>,
    ) => {
        setPageSize(Number(event.target.value))
        setPage(0)
    }

    if (isPending) {
        return <Loader message="Загрузка карт..." />
    }

    if (isError) {
        return (
            <ErrorMessage
                message={
                    error instanceof Error
                        ? error.message
                        : 'Произошла ошибка при загрузке карт'
                }
            />
        )
    }

    return (
        <CardsTableProvider
            value={{
                page,
                pageSize,
                totalPages,
                isFetching,
                onPreviousPage: handlePreviousPage,
                onNextPage: handleNextPage,
                onPageSizeChange: handlePageSizeChange,
                getCardStatus,
                onBlockCard: handleBlockCard,
                onFreezeCard: handleFreezeCard,
            }}
        >
            <CardsTableView cards={cards}/>
        </CardsTableProvider>
    )
}
