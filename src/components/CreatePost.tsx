"use client"

import PostForm from "@/components/post-form"
import { IPost } from "@/types/post.type"

export default function CreatePost() {

    const handleSubmit = (post: IPost) => {
        console.log(post)
    }

    return (
        <PostForm onSubmit={handleSubmit} />
    )
}

