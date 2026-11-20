import type {UsersResponse} from "./Countries.types.ts";

const USERS_URL = import.meta.env.VITE_USERS_URL;

export async function getCountries(): Promise<string[]> {
    const response = await fetch(
        `${USERS_URL}?limit=0&select=id,address`,
    )

    if (!response.ok) {
        throw new Error('Не удалось загрузить список стран');
    }

    const data: UsersResponse = await response.json();

    return [
        ...new Set(
            data.users
                .map((user) => user.address.country)
                .filter(Boolean),
        ),
    ];
}
