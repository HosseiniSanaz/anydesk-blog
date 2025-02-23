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
    default: ({ onClick, children }: { onClick: () => void; children?: React.ReactNode }) => (
        <button onClick={onClick}>{children}</button>
    ),
}));

jest.mock('@/components/ui/button', () => ({
    __esModule: true,
    default: ({ onClick, children }: { onClick: () => void; children?: React.ReactNode }) => (
        <button onClick={onClick}>{children}</button>
    ),
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
        const deleteButton = screen.getByRole('button');
        expect(deleteButton).toBeInTheDocument();
    });

    it('opens confirmation modal when delete button is clicked', () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByRole('button');
        
        fireEvent.click(deleteButton);
        
        expect(screen.getByText('Delete Post')).toBeInTheDocument();
        expect(screen.getByText('Are you sure you want to delete this post?')).toBeInTheDocument();
    });

    it('closes modal when cancel is clicked', () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByRole('button');
        
        fireEvent.click(deleteButton);
        
        const cancelButton = screen.getByText('Cancel');
        fireEvent.click(cancelButton);
        
        // Modal should be closed
        expect(screen.queryByText('Delete Post')).not.toBeInTheDocument();
    });

    it('deletes post and shows success message when confirm is clicked', () => {
        render(<DeleteAction postId={postId} />);
        const deleteButton = screen.getByRole('button');
        
        fireEvent.click(deleteButton);
        
        const confirmButton = screen.getByText('Delete');
        fireEvent.click(confirmButton);
        
        // Verify all actions were called
        expect(mockDeletePost).toHaveBeenCalledWith(postId);
        expect(mockAddToast).toHaveBeenCalledWith('success', 'Post deleted successfully');
        expect(mockPush).toHaveBeenCalledWith('/');
    });
});