import type React from "react"
import Link from "next/link"
import {PostBody, PostCard, PostGrid, PostHeader, PostTitle} from "./styles"
import IPostListProps from "./post-list.type"
import DeleteAction from "@/components/delete-action"

const PostList: React.FC<IPostListProps> = ({posts}) => {

    return (
        <PostGrid>
            {posts.map((post) => (
                <Link href={`/post/${post.id}`}>
                    <PostCard key={post.id}>
                        <PostHeader>
                            <PostTitle>
                                {post.title}
                            </PostTitle>
                            <DeleteAction postId={post.id}/>
                        </PostHeader>
                        <PostBody>{post.body}</PostBody>
                    </PostCard>
                </Link>
            ))}
        </PostGrid>
    )
}

export default PostList

