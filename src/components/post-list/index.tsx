import type React from "react"
import Link from "next/link"
import { PostGrid, PostCard, PostHeader, PostTitle, PostBody, DeleteButton } from "./styles"
import IPostListProps from "./post-list.type"


const PostList: React.FC<IPostListProps> = ({ posts, onDelete }) => {
    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
        e.preventDefault()
        onDelete(id)
    }
    return (
        <PostGrid>
            {posts.map((post) => (
                <Link href={`/post/${post.id}`}>
                    <PostCard key={post.id}>
                        <PostHeader>
                            <PostTitle>
                                {post.title}
                            </PostTitle>
                            <DeleteButton onClick={(e) => handleDelete(e, post.id)}>
                                <span className="material-icons">delete</span>
                            </DeleteButton>
                        </PostHeader>
                        <PostBody>{post.body}</PostBody>
                    </PostCard>
                </Link>
            ))}
        </PostGrid>
    )
}

export default PostList

