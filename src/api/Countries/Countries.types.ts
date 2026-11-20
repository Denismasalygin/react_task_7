export interface UsersResponse {
    users: DummyUser[]
}

interface DummyUser {
    id: number
    address: {
        country: string
    }
}