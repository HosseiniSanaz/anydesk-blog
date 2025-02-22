import { IPost } from '@/types/post.type';

type CreatePostData = Omit<IPost, "id" | "userId">
type EditPostData = IPost

interface IPostFormProps {
  post?: IPost;
  loading?: boolean;
  onSubmit: (post: CreatePostData | EditPostData) => void;
}

export default IPostFormProps;