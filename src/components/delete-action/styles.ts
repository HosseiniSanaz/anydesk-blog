import styled from "styled-components";

const DeleteButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: #a09e9e;
  display: flex;
  align-items: center;
  padding: 2px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export { DeleteButton }