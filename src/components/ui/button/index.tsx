import IButtonProps from "./button.type"
import {StyledButton} from "./styles"

function Button({children, variant = "muted", loading, disabled, ...props}: IButtonProps) {
    return (
        <StyledButton 
            $variant={variant} 
            $loading={loading} 
            $disabled={disabled} 
            disabled={disabled}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button;
