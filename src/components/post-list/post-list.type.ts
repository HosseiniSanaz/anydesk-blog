import { IPost } from "@/types/post.type";

interface IPostListProps {
    posts: IPost[]
    onDelete: (id: number) => void
  }
  export default IPostListProps;