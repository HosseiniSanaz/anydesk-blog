import React from 'react';
import {
    ModalOverlay,
    ModalContainer,
    ModalTitle,
    ModalMessage,
    ButtonContainer
} from './styles';
import { IConfirmationModalProps } from './confirmation-modal.type';
import Button from '../button';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }: IConfirmationModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalTitle>{title}</ModalTitle>
                <ModalMessage>{message}</ModalMessage>
                <ButtonContainer>
                    <Button onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        Delete
                    </Button>
                </ButtonContainer>
            </ModalContainer>
        </ModalOverlay>
    );
};

export default ConfirmationModal;