import { create } from "zustand"
import { getPosts } from "@/services/api"
import { IPost } from "@/types/post.type";

interface Store {
  posts: IPost[];
  loading: boolean;
  error: string | null
  fetchPosts: () => Promise<void>
}

const useStore = create<Store>((set) => ({
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
}))

export default useStore

