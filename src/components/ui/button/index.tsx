import IButtonProps from "./button.type"
import { StyledButton } from "./styles"

function Button({ children, ...props }: IButtonProps) {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;