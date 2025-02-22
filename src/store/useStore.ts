import {create} from "zustand"
import {getPosts} from "@/services/api"
import {IPost} from "@/types/post.type";

interface Store {
    posts: IPost[];
    setPosts: (posts: IPost[]) => void;
    loading: boolean;
    error: string | null;
    fetchPosts: () => Promise<IPost[] | undefined>;
    fetchPostById: (id: number) => Promise<IPost>;
    deletePost: (id: number) => Promise<void>;
    editPost: (id: number, post: IPost) => Promise<void>;
    createPost: (post: Omit<IPost, "id" | "userId">) => Promise<void>;
}

const useStore = create<Store>((set, get) => ({
    posts: [],
    setPosts: (posts: IPost[]) => set({posts}),
    loading: false,
    error: null,
    fetchPosts: async () => {
        set({loading: true, error: null})
        try {
            const posts = await getPosts()
            setTimeout(() => {
                set({posts, loading: false})
            }, 1000);
            return posts;
        } catch (error) {
            set({error: "Failed to fetch posts", loading: false})
        }
    },
    fetchPostById: async (id: number) => {
        set({loading: true, error: null});
        try {
            let posts = get().posts;
            if (posts.length === 0) {
                posts = await getPosts();
            }
            const post = posts.find((post: IPost) => post.id === id);
            if (!post) {
                throw new Error('Post not found');
            }
            setTimeout(() => {
                set({loading: false});
            }, 1000);
            return post;
        } catch (error) {
            set({error: "Failed to find post", loading: false});
            throw error;
        }
    },
    deletePost: async (id: number) => {
        set({loading: true, error: null});
        try {
            const posts = get().posts.filter((post: IPost) => post.id !== id);
            setTimeout(() => {
                set({posts, loading: false});
            }, 1000);
        } catch (error) {
            set({error: "Failed to delete post", loading: false});
            throw error;
        }
    },
    editPost: async (id: number, post: IPost) => {
        set({loading: true, error: null});
        try {
            const posts = get().posts;
            const index = posts.findIndex((post: IPost) => post.id === id);
            if (index !== -1) {
                posts[index] = post;
            }
            setTimeout(() => {
                set({posts, loading: false});
            }, 1000);
        } catch (error) {
            set({error: "Failed to edit post", loading: false});
            throw error;
        }
    },
    createPost: async (post: Omit<IPost, "id" | "userId">) => {
        set({loading: true, error: null});
        try {
            const posts = [...get().posts, {...post, id: get().posts.length + 1, userId: 1}];
            setTimeout(() => {
                set({posts, loading: false});
            }, 1000);
        } catch (error) {
            set({error: "Failed to create post", loading: false});
            throw error;
        }
    }
}))

export default useStore

