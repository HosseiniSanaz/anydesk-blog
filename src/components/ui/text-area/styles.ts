import styled from "styled-components"

const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const StyledTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  width: 100%;
  min-height: 150px;
  resize: vertical;
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
export { StyledTextArea, Label, Error, HelperText, StyledTextFieldContainer }