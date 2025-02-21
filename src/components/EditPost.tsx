"use client"

import PostForm from "@/components/post-form"
import useStore from "@/store/useStore";
import { IPost } from "@/types/post.type"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditPost() {

    const router = useRouter();
    const { id } = router.query;
    const { fetchPostById } = useStore();
    const [post, setPost] = useState<IPost>();

    console.log(id, post)
    useEffect(() => {
        fetchPostById(Number(id)).then((post) => setPost(post));
    }, [fetchPostById, id]);

    const handleSubmit = (post: IPost) => {
        console.log(post)
    }

    return (
        <PostForm post={post} onSubmit={handleSubmit} />
    )
}

