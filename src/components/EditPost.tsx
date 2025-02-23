"use client"

import PostForm from "@/components/post-form"
import useStore from "@/store/useStore";
import {IPost} from "@/types/post.type"
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import useToast from "@/hooks/useToast";
import { PostFormData } from "./post-form/post-form.type";

export default function EditPost() {
    const router = useRouter();
    const {id} = router.query;
    const {fetchPostById, editPost, loading} = useStore();
    const [post, setPost] = useState<IPost>();
    const {addToast} = useToast();

    useEffect(() => {
        if (id) {
            fetchPostById(Number(id))
            .then((post) => setPost(post))
            .catch(() => {
                router.push('/404')
            });;
        }
    }, [fetchPostById, id, router]);

    const handleSubmit = (updatedPost: PostFormData) => {
        if (!post?.id) {
            addToast('error', 'Post is not found');
            return;
        }
        editPost(post.id, {
            ...updatedPost,
            id: post.id,
            userId: post.userId
        })
        router.push(`/post/${post.id}`);
        addToast('success', 'Post updated successfully');
    }

    return (
        <PostForm post={post} onSubmit={handleSubmit} loading={loading}/>
    )
}

