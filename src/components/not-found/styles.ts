import Link from "next/link";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
`;

const HomeButton = styled(Link)`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;

  &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondary};
      filter: brightness(0.9);
  }
`
export { NotFoundContainer, NotFoundTitle, NotFoundMessage, HomeButton };
