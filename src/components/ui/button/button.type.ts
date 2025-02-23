import {ButtonHTMLAttributes} from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "muted";
    disabled?: boolean;
    loading?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default IButtonProps;
