import {useRouter} from "next/router"
import useStore from "@/store/useStore";
import {IPost} from "@/types/post.type";
import {useEffect, useState} from "react";
import {ButtonContainer, PostBody, PostContainer, PostHeader, PostTitle} from "./styles";
import DeleteAction from "../delete-action";
import Loading from "@/components/ui/loading";
import IconButton from "../ui/icon-button";


const Post: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;
    const {fetchPostById, loading} = useStore();
    const [post, setPost] = useState<IPost | null>();

    useEffect(() => {
        if (id) {
            fetchPostById(Number(id))
            .then((post) => setPost(post))
            .catch(() => {
                router.push('/404')
            });
        }
    }, [fetchPostById, id, router]);

    if (loading) {
        return <Loading/>
    }

    return (
        <PostContainer>
            <IconButton icon="arrow_back" onClick={() => router.push("/")}>Posts</IconButton>
      
            <PostHeader>
                <PostTitle>{post?.title}</PostTitle>
                <ButtonContainer>
                    <DeleteAction postId={Number(id)}/>
                    <IconButton icon="edit" onClick={() => router.push(`/post/${id}/edit`)}/>
                </ButtonContainer>
            </PostHeader>
            <PostBody>
                {post?.body}
            </PostBody>
        </PostContainer>
    )
}

export default Post;
