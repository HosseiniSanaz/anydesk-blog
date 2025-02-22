import {ButtonHTMLAttributes} from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "muted";
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

export default IButtonProps;
