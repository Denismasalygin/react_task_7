import {useState, type FormEvent} from 'react'
import type {LoginFormProps} from "./LoginForm.types.ts";
import {Input} from "../Input/Input.tsx";
import {ErrorMessage} from "../ErrorMessage/ErrorMessage.tsx";

export function LoginForm({onSubmit, isLoading, error}: LoginFormProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        onSubmit({username, password})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Вход в аккаунт</h1>

            <Input
                id="username"
                label="Логин"
                type="text"
                value={username}
                onChange={setUsername}
                placeholder="Введите логин"
                required
            />

            <Input
                id="password"
                label="Пароль"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Введите пароль"
                required
            />

            <ErrorMessage message={error} />

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Выполняется вход...' : 'Войти'}
            </button>
        </form>
    )
}