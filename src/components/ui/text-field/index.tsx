import {Error, HelperText, Label, StyledTextField, StyledTextFieldContainer} from "./styles";
import ITextFieldProps from "./text-field.type";

function TextField({label, error, helperText, ...props}: ITextFieldProps) {
    return (
        <StyledTextFieldContainer>
            {label && <Label>{label}</Label>}
            <StyledTextField {...props} />
            {error && <Error>{error}</Error>}
            {helperText && <HelperText>{helperText}</HelperText>}
        </StyledTextFieldContainer>
    )
}

export default TextField;
