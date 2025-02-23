import { styled } from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${({theme}) => theme.colors.disabled};
  display: flex;
  align-items: center;
  padding: 2px;

  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`
export {Button}