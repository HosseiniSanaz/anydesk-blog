import {Error, HelperText, Label, StyledTextArea, StyledTextFieldContainer} from "./styles"
import ITextAreaProps from "./text-area.type"

function TextArea({label, error, helperText, ...props}: ITextAreaProps) {
    return (
        <StyledTextFieldContainer>
            <Label>{label}</Label>
            <StyledTextArea {...props} />
            {error && <Error>{error}</Error>}
            {helperText && <HelperText>{helperText}</HelperText>}
        </StyledTextFieldContainer>

    )
}

export default TextArea
