"use client"

import PostForm from "@/components/post-form"
import {IPost} from "@/types/post.type"
import useStore from "@/store/useStore";
import {useRouter} from "next/router";
import useToast from "@/hooks/useToast";
import {useCallback} from "react";
export default function CreatePost() {
    const {createPost, loading} = useStore();
    const router = useRouter();
    const {addToast} = useToast();

    const handleSubmit = useCallback((post: Omit<IPost, "id" | "userId">) => {
        createPost(post);
        router.push("/");
        addToast('success', 'Post created successfully');
    }, [createPost, router, addToast]);

    return (
        <PostForm onSubmit={handleSubmit} loading={loading}/>
    )
}

