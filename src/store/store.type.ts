import { IPost } from "@/types/post.type";

interface IStore {
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

export default IStore;