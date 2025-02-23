import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Header = styled.h3`
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({theme}) => theme.colors.secondary};
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`

export {Form, ButtonContainer, Header}
