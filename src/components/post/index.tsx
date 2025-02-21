import { useRouter } from "next/router"
import useStore from "@/store/useStore";
import { IPost } from "@/types/post.type";
import { useEffect, useState } from "react";
import { PostContainer, PostHeader, PostTitle, PostBody, ButtonContainer, IconButton, BackButton } from "./styles";
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
                    <IconButton>
                        <span className="material-icons">delete</span>
                    </IconButton>
                    <IconButton onClick={() => router.push(`/post/${id}/edit`)}>
                        <span className="material-icons">edit</span>
                    </IconButton>
                </ButtonContainer>
            </PostHeader>
            <PostBody>
                {post?.body}
            </PostBody>
        </PostContainer>
    )
}

export default Post;