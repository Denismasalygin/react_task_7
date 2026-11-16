import { useState, type FormEvent } from 'react'
import type { LoginFormProps } from './LoginForm.types'
import { Input } from '../Input/Input'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import styles from './LoginForm.module.scss'

export function LoginForm({ onSubmit, isLoading, error }: LoginFormProps) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        onSubmit({username, password})
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Вход в аккаунт</h1>

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

            <button
                className={styles.submitButton}
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? 'Выполняется вход...' : 'Войти'}
            </button>
        </form>
    )
}
