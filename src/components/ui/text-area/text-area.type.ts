import {TextareaHTMLAttributes} from "react"

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
    error?: string
    helperText?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    required?: boolean
}

export default ITextAreaProps
