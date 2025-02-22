import {useEffect} from 'react';
import {ToastContainer, ToastMessage} from './style';
import {IToast, IToastManager} from './toast.type';

const Toast = ({id, message, type, onClose, duration = 2000}: IToast) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <ToastMessage type={type} id={id}>
            {message}
        </ToastMessage>
    );
};

const ToastManager = ({toasts, removeToast}: IToastManager) => {
    return (
        <ToastContainer>
            {toasts.map((toast) => (
                <Toast
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </ToastContainer>
    );
};

export default ToastManager;
