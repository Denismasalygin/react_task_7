import type { ChangeEvent } from 'react'
import type { InputProps } from './Input.types'

export function Input({
    id,
    label,
    type,
    value,
    placeholder,
    required,
    onChange,
}: InputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>

            <input
                id={id}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}