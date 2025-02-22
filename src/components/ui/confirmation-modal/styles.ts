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
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`;

const ModalMessage = styled.p`
  margin-bottom: 24px;
  color: #666;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const CancelButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: none;
  color: #666;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #333;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #dc2626;
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #b91c1c;
  }
`;

export {ModalContainer, ModalMessage, ModalOverlay, ModalTitle, ButtonContainer, CancelButton, DeleteButton}
