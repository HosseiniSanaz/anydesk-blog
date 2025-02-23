import type React from "react"
import Link from "next/link"
import {PostBody, PostCard, PostGrid, PostHeader, PostTitle} from "./styles"
import IPostListProps from "./post-list.type"
import DeleteAction from "@/components/delete-action"
import Empty from "./Empty";

const PostList: React.FC<IPostListProps> = ({posts}) => {
    if (posts.length === 0) {
        return <Empty />
    }
    return (
        <PostGrid>
            {posts.map((post) => (
                <PostCard key={post.id}>
                    <PostHeader>
                        <Link href={`/post/${post.id}`}>
                            <PostTitle>
                                {post.title}
                            </PostTitle>
                        </Link>
                        <DeleteAction postId={post.id}/>
                    </PostHeader>
                    <PostBody>{post.body}</PostBody>
                </PostCard>

            ))}
        </PostGrid>
    )
}

export default PostList

