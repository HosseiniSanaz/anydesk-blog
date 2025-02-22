interface IToast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
    duration?: number;
}

interface IToastManager {
    toasts: IToast[];
    removeToast: (id: string) => void;
}

export type {IToast, IToastManager};
