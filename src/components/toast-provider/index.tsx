import React, {createContext, useContext, useState} from 'react';
import ToastManager from '@/components/ui/toast';
import {IToast} from '../ui/toast/toast.type';

const ToastContext = createContext<{ addToast: (type: string, message: string) => void } | undefined>(undefined);

export const ToastProvider = ({children}: { children: React.ReactNode }) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    const addToast = (type = 'info', message: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prevToasts: IToast[]) => [...prevToasts, {
            id,
            message,
            type: type as 'success' | 'error' | 'warning' | 'info',
            onClose: () => removeToast(id)
        }]);
    };

    const removeToast = (id: string) => {
        setToasts((prevToasts: IToast[]) => prevToasts.filter((toast: IToast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{addToast}}>
            {children}
            <ToastManager toasts={toasts} removeToast={removeToast}/>
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
