import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteAction from './index';
import useStore from '@/store/useStore';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/navigation';

// Mock the hooks
jest.mock('@/store/useStore', () => ({
    __esModule: true,
    default: jest.fn()
}));
jest.mock('@/hooks/useToast', () => ({
    __esModule: true,
    default: jest.fn()
}));
jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));

// Mock the UI components
jest.mock('@/components/ui/icon-button', () => ({
    __esModule: true,
    default: ({ onClick, dataTestId }: { onClick: () => void; dataTestId?: string }) => (
        <button onClick={onClick} data-testid={dataTestId}>
            <span className="material-icons">delete</span>
        </button>
    ),
}));

jest.mock('@/components/ui/confirmation-modal', () => ({
    __esModule: true,
    default: ({ isOpen, onClose, onConfirm, title, message }: any) => 
        isOpen ? (
            <div data-testid="confirmation-modal">
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onClose}>Cancel</button>
                <button onClick={onConfirm}>Delete</button>
            </div>
        ) : null
}));

describe('DeleteAction Component', () => {
    const mockDeletePost = jest.fn();
    const mockAddToast = jest.fn();
    const mockPush = jest.fn();
    const postId = 1;

    beforeEach(() => {
        // Setup mocks
        (useStore as unknown as jest.Mock).mockReturnValue({
            deletePost: mockDeletePost
        });
        (useToast as unknown as jest.Mock).mockReturnValue({
            addToast: mockAddToast
        });
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders delete button', () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByTestId('delete-action');
        expect(deleteButton).toBeInTheDocument();
    });

    it('opens confirmation modal when delete button is clicked', async () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByTestId('delete-action');
        
        fireEvent.click(deleteButton);
        
        const modal = screen.getByTestId('confirmation-modal');
        expect(modal).toBeInTheDocument();
        expect(screen.getByText('Delete Post')).toBeInTheDocument();
        expect(screen.getByText('Are you sure you want to delete this post?')).toBeInTheDocument();
    });

    it('closes modal when cancel is clicked', () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByTestId('delete-action');
        
        fireEvent.click(deleteButton);
        
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);
        
        // Modal should be closed
        expect(screen.queryByTestId('confirmation-modal')).not.toBeInTheDocument();
    });

    it('deletes post and shows success message when confirm is clicked', async () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByTestId('delete-action');
        
        fireEvent.click(deleteButton);
        
        const confirmButton = screen.getByText('Delete');
        fireEvent.click(confirmButton);
        
        // Verify all actions were called
        expect(mockDeletePost).toHaveBeenCalledWith(postId);
        expect(mockAddToast).toHaveBeenCalledWith('success', 'Post deleted successfully');
        expect(mockPush).toHaveBeenCalledWith('/');
    });
});