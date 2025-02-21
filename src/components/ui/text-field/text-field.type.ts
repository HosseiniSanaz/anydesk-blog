import { HTMLAttributes } from "react"

interface ITextFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: string
    error?: string
    helperText?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    required?: boolean
    type?: string
}

export default ITextFieldProps 