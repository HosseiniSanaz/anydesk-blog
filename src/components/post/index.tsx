import { useRouter } from "next/router"
import useStore from "@/store/useStore";
import { IPost } from "@/types/post.type";
import { useEffect, useState } from "react";
import { PostContainer, PostHeader, PostTitle, PostBody, ButtonContainer, EditButton, BackButton } from "./styles";
import DeleteAction from "../delete-action";
const Post: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { fetchPostById } = useStore();
    const [post, setPost] = useState<IPost | null>(null);

    useEffect(() => {
        fetchPostById(Number(id)).then((post) => setPost(post));
    }, [fetchPostById, id]);


    return (
        <PostContainer>
            <BackButton href="/">
                <span className="material-icons">arrow_back</span>
                Posts
            </BackButton>
            <PostHeader>
                <PostTitle>{post?.title}</PostTitle>
                <ButtonContainer>
                    <DeleteAction postId={Number(id)} />
                    <EditButton onClick={() => router.push(`/post/${id}/edit`)}>
                        <span className="material-icons">edit</span>
                    </EditButton>
                </ButtonContainer>
            </PostHeader>
            <PostBody>
                {post?.body}
            </PostBody>
        </PostContainer>
    )
}

export default Post;