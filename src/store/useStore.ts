import { create } from "zustand"
import { getPosts } from "@/services/api"
import { IPost } from "@/types/post.type";

interface Store {
  posts: IPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  fetchPostById: (id: number) => Promise<IPost>;
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
  }
}))

export default useStore

