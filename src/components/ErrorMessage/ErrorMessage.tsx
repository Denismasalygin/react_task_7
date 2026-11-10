import type { ErrorMessageProps } from './ErrorMessage.types'

export function ErrorMessage({ message }: ErrorMessageProps) {
    if (!message) {
        return null
    }

    return <p role="alert">{message}</p>
}