import IButtonProps from "./button.type"
import {StyledButton} from "./styles"

function Button({children, variant = "muted", ...props}: IButtonProps) {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;
