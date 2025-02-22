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

export {NotFoundContainer, NotFoundTitle, NotFoundMessage};
