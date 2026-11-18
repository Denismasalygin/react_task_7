import type { Transaction } from './transaction.types.ts'
import {createRandomGenerator} from "./utils/createRandomGenerator.ts";
import {getRandomDate} from "./utils/getRandomDate.ts";
import {getCountries} from "../Countries/getCountries.ts";

const TRANSACTIONS_COUNT = 60

export async function getTransactions(
    userId: number,
): Promise<Transaction[]> {
    const countries = await getCountries();

    if (countries.length === 0) {
        throw new Error('Не удалось получить список стран');
    }

    const random = createRandomGenerator(userId);

    const transactions = Array.from(
        { length: TRANSACTIONS_COUNT },
        (_, index): Transaction => {
            const countryIndex = Math.floor(random() * countries.length);

            const amount = Math.floor(random() * 49901) + 100;

            return {
                id: index + 1,
                date: getRandomDate(random),
                country: countries[countryIndex],
                amount,
            }
        },
    )

    return transactions.sort(
        (first, second) =>
            new Date(second.date).getTime() -
            new Date(first.date).getTime(),
    )
}
