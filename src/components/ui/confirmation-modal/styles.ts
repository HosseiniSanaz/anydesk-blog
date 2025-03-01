import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const ModalTitle = styled.h2`
  font-size: ${({theme}) => theme.fontSizes.lg};
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({theme}) => theme.colors.text};

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin-bottom: 8px;
  }
`;

const ModalMessage = styled.p`
  margin-bottom: 24px;
  color: ${({theme}) => theme.colors.textLight};
  line-height: 1.5;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    margin-bottom: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export {ModalContainer, ModalMessage, ModalOverlay, ModalTitle, ButtonContainer}
