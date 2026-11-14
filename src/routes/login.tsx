import { useMutation } from '@tanstack/react-query'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { loginUser } from '../api/auth'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { useAuth } from '../context/AuthContext/useAuth.ts'
import type { AuthUser } from '../context/AuthContext/auth.types.ts'
import {navigationLinks} from "../components/header/constants/navigationLinks.ts";

function LoginPage() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const loginMutation = useMutation({
        mutationFn: loginUser,

        onSuccess: (data) => {
            const user: AuthUser = {
                id: data.id,
                username: data.username,
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                image: data.image,
            }

            login(user, data.accessToken, data.refreshToken)

            navigate({to: navigationLinks.home.path,})
        },
    })

    const errorMessage =
        loginMutation.error instanceof Error
            ? loginMutation.error.message
            : null

    return (
        <LoginForm
            onSubmit={(credentials) => loginMutation.mutate(credentials)}
            isLoading={loginMutation.isPending}
            error={errorMessage}
        />
    )
}

export const Route = createFileRoute('/login')({
    component: LoginPage,
})