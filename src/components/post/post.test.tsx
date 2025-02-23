import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import useStore from '@/store/useStore';
import Post from './index';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

// Mock the next/router
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

// Mock the store
jest.mock('@/store/useStore');

// Mock the Loading component
jest.mock('@/components/ui/loading', () => {
    return function MockLoading() {
        return <div data-testid="loading">Loading...</div>;
    };
});

// Mock the DeleteAction component
jest.mock('@/components/delete-action', () => {
    return function MockDeleteAction() {
        return <div data-testid="delete-action">Delete Action</div>;
    };
});

describe('Post Component', () => {
    const mockRouter = {
        query: { id: '1' },
        push: jest.fn(),
    };

    const mockPost = {
        id: 1,
        title: 'Test Post',
        body: 'Test post body content',
        userId: 1,
    };

    const mockStore = {
        fetchPostById: jest.fn(),
        loading: false,
    };

    const renderWithTheme = (component: React.ReactNode) => {
        return render(
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        );
    };

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
        (useStore as unknown as jest.Mock).mockReturnValue(mockStore);
        mockStore.loading = false;

        mockStore.fetchPostById.mockImplementation(() =>
            new Promise((resolve) => {
                mockStore.loading = true;
                setTimeout(() => {
                    mockStore.loading = false;
                    resolve(mockPost);
                }, 10);
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render loading state initially', () => {
        mockStore.loading = true;
        renderWithTheme(<Post />);
        expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    it('should not fetch post if no id is provided', () => {
        const routerWithoutId = {
            ...mockRouter,
            query: {},
        };
        (useRouter as jest.Mock).mockReturnValue(routerWithoutId);

        renderWithTheme(<Post />);
        expect(mockStore.fetchPostById).not.toHaveBeenCalled();
    });

    it('should fetch and display post data', async () => {
        const { rerender } = renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockStore.fetchPostById).toHaveBeenCalledWith(1);
        });

        await waitFor(() => {
            expect(mockStore.loading).toBe(false);
        });

        rerender(
            <ThemeProvider theme={theme}>
                <Post />
            </ThemeProvider>
        );

        const title = await screen.findByText('Test Post');
        const body = await screen.findByText('Test post body content');

        expect(title).toBeInTheDocument();
        expect(body).toBeInTheDocument();
    });

    it('should navigate back when back button is clicked', async () => {
        renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockStore.fetchPostById).toHaveBeenCalled();
        });

        const backButton = await screen.findByText('Posts');
        fireEvent.click(backButton);

        expect(mockRouter.push).toHaveBeenCalledWith('/');
    });

    it('should navigate to edit page when edit button is clicked', async () => {
        renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockStore.fetchPostById).toHaveBeenCalledWith(1);
        });

        await screen.findByText('Test Post');

        const editButton = await screen.findByTestId('edit-button');
        fireEvent.click(editButton);

        expect(mockRouter.push).toHaveBeenCalledWith('/post/1/edit');
    });

    it('should redirect to 404 page when post is not found', async () => {
        mockStore.fetchPostById.mockRejectedValue(new Error('Post not found'));
        renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockRouter.push).toHaveBeenCalledWith('/404');
        });
    });

    it('should render delete action component', async () => {
        renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockStore.fetchPostById).toHaveBeenCalled();
        });

        const deleteAction = await screen.findByTestId('delete-action');
        expect(deleteAction).toBeInTheDocument();
    });

    it('should handle empty post data gracefully', async () => {
        mockStore.fetchPostById.mockResolvedValue(null);
        renderWithTheme(<Post />);

        await waitFor(() => {
            expect(mockStore.fetchPostById).toHaveBeenCalled();
        });

        expect(screen.queryByText('Test Post')).not.toBeInTheDocument();
        expect(screen.queryByText('Test post body content')).not.toBeInTheDocument();
    });
});
