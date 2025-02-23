"use client"

import PostForm from "@/components/post-form"
import useStore from "@/store/useStore";
import {IPost} from "@/types/post.type"
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import useToast from "@/hooks/useToast";

export default function EditPost() {
    const router = useRouter();
    const {id} = router.query;
    const {fetchPostById, editPost} = useStore();
    const [post, setPost] = useState<IPost>();
    const {addToast} = useToast();

    useEffect(() => {
        if (id) {
            fetchPostById(Number(id)).then((post) => setPost(post));
        }
    }, [fetchPostById, id]);

    const handleSubmit = (post: IPost) => {
        editPost(Number(id), post);
        router.push("/");
        addToast('success', 'Post updated successfully');
    }

    return (
        <PostForm post={post} onSubmit={handleSubmit}/>
    )
}

