import type {LoginCredentials} from "../../api/auth.types.ts";

export interface LoginFormProps {
    onSubmit: (credentials: LoginCredentials) => void
    isLoading: boolean
    error: string | null
}