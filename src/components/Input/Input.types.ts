export interface InputProps {
    id: string
    label: string
    type: 'text' | 'password' | 'email'
    value: string
    placeholder?: string
    required?: boolean
    onChange: (value: string) => void
}