import type { ChangeEvent } from 'react'
import type { InputProps } from './Input.types'
import styles from './Input.module.scss'

export function Input({id, label, type, value, placeholder, required, onChange}: InputProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>

            <input
                className={styles.input}
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
