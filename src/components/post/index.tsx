import { useRouter } from "next/router"
import useStore from "@/store/useStore";
import { IPost } from "@/types/post.type";
import { useEffect, useState } from "react";
import { PostContainer, PostHeader, PostTitle, PostBody, ButtonContainer, EditButton, BackButton } from "./styles";
import DeleteAction from "../delete-action";
import Loading from "@/components/ui/loading";


const Post: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { fetchPostById, loading } = useStore();
    const [post, setPost] = useState<IPost | null>();

    useEffect(() => {
        if(id) {
            fetchPostById(Number(id)).then((post) => setPost(post));
        }
    }, [fetchPostById, id]);

    if (loading) {
        return <Loading />
    }

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