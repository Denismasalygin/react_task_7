import type {LoginCredentials} from "../../api/Auth/auth.types.ts";

export interface LoginFormProps {
    onSubmit: (credentials: LoginCredentials) => void
    isLoading: boolean
    error: string | null
}