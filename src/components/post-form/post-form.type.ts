import { IPost } from '@/types/post.type';
interface IPostFormProps {
    post?: Omit<IPost, 'id'> & { id?: number };
    onSubmit: (post: IPost) => void;
  }

export default IPostFormProps;