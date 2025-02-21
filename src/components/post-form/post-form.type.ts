import { IPost } from '@/types/post.type';
interface IPostFormProps {
    post?: IPost;
    onSubmit: (post: IPost) => void;
  }

export default IPostFormProps;