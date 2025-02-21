"use client"

import PostForm from "@/components/post-form"
import { IPost } from "@/types/post.type"
import useStore from "@/store/useStore";
import { useRouter } from "next/router";
export default function CreatePost() {
    const { createPost } = useStore();
    const router = useRouter();
    const handleSubmit = (post: IPost) => {
        createPost(post);
        router.push("/");
    }

    return (
        <PostForm onSubmit={handleSubmit} />
    )
}

