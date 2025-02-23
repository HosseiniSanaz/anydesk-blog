import { styled } from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({theme}) => theme.colors.disabled};
  display: flex;
  align-items: center;
  padding: 2px;
  gap: 4px;

  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    font-size: ${({theme}) => theme.fontSizes.md};
    .material-icons {
      font-size: ${({theme}) => theme.fontSizes.lg};
    }
  }
`
export {Button}