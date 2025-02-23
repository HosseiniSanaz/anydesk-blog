import {IPost} from '@/types/post.type';

export type PostFormData = Required<Pick<IPost, "title" | "body">> & {
    id?: number
    userId?: number
}
interface IPostFormProps {
    post?: IPost;
    loading?: boolean;
    onSubmit: (post: PostFormData) => void;
}

export default IPostFormProps;
