import { useQuery } from '@tanstack/react-query'
import {getTransactions} from "../transaction.ts";

export function useTransactions(
    userId: number | undefined,
    isAuthenticated: boolean,
) {
    return useQuery({
        queryKey: ['transactions', userId],
        queryFn: () => {
            if (userId === undefined) {
                throw new Error('Пользователь не авторизован')
            }

            return getTransactions(userId)
        },
        enabled: isAuthenticated && userId !== undefined,
    })
}
