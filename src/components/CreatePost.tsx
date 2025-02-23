"use client"

import PostForm from "@/components/post-form"
import {IPost} from "@/types/post.type"
import useStore from "@/store/useStore";
import {useRouter} from "next/router";
import {useToast} from "./toast-provider";

export default function CreatePost() {
    const {createPost, loading} = useStore();
    const router = useRouter();
    const {addToast} = useToast();

    const handleSubmit = (post: Omit<IPost, "id" | "userId">) => {
        if (post.title.trim() === "" || post.body.trim() === "") {
            addToast('error', 'Please fill in all fields');
            return;
        }
        createPost(post);
        router.push("/");
        addToast('success', 'Post created successfully');
    }

    return (
        <PostForm onSubmit={handleSubmit} loading={loading}/>
    )
}

