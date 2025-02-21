import styled from "styled-components"

const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const StyledTextField = styled.input`
  padding: 8px 16px;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.input};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.input};
  }
`

const Label = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
`

const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
`

const HelperText = styled.p`
  color: ${({ theme }) => theme.colors.text};
`

export { StyledTextField, Label, Error, HelperText, StyledTextFieldContainer }
