import { create } from "zustand"
import { getPosts } from "@/services/api"
import { IPost } from "@/types/post.type";

interface Store {
  posts: IPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  fetchPostById: (id: number) => Promise<IPost>;
  deletePost: (id: number) => Promise<void>;
  editPost: (id: number, post: IPost) => Promise<void>;
  createPost: (post: IPost) => Promise<void>;
}

const useStore = create<Store>((set, get) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null })
    try {
      const posts = await getPosts()
      set({ posts, loading: false })
    } catch (error) {
      set({ error: "Failed to fetch posts", loading: false })
    }
  },
  fetchPostById: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const post = get().posts.find((post: IPost) => post.id === id);
      if (!post) {
        throw new Error('Post not found');
      }
      set({ loading: false });
      return post;
    } catch (error) {
      set({ error: "Failed to find post", loading: false });
      throw error;
    }
  },
  deletePost: async (id: number) => {
    set({ loading: true, error: null });
    try {
      const posts = get().posts.filter((post: IPost) => post.id !== id);
      set({ posts, loading: false }); 
    } catch (error) {
      set({ error: "Failed to delete post", loading: false });
      throw error;
    }
  },
  editPost: async (id: number, post: IPost) => {
    set({ loading: true, error: null });
    try {
      const posts = get().posts;
      const index = posts.findIndex((post: IPost) => post.id === id);
      if (index !== -1) {
        posts[index] = post;
      }
      set({ posts, loading: false });
    } catch (error) {
      set({ error: "Failed to edit post", loading: false });
      throw error;
    }
  },
  createPost: async (post: IPost) => {
    set({ loading: true, error: null });
    try {
      const posts = [...get().posts, { ...post, id: get().posts.length + 1 }];
      set({ posts, loading: false });
    } catch (error) {
      set({ error: "Failed to create post", loading: false });
      throw error;
    }
  }
}))

export default useStore

