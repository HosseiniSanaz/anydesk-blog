import React from 'react';
import {ButtonContainer, ModalContainer, ModalMessage, ModalOverlay, ModalTitle} from './styles';
import {IConfirmationModalProps} from './confirmation-modal.type';
import Button from '@/components/ui/button';

const ConfirmationModal = ({isOpen, onClose, onConfirm, title, message}: IConfirmationModalProps) => {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
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
