"use client"

import type React from "react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ButtonContainer, Form, Header } from "./styles"
import IPostFormProps from "./post-form.type"
import Button from "@/components/ui/button"
import { useRouter } from "next/navigation"
import TextField from "@/components/ui/text-field"
import TextArea from "../ui/text-area"
import useToast from "@/hooks/useToast"

const PostForm: React.FC<IPostFormProps> = ({ post, onSubmit, loading }) => {
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body || "")
    const router = useRouter();
    const { addToast } = useToast();

    const isEditing = useMemo(() => Boolean(post?.id), [post]);

    useEffect(() => {
        if (post) {
            setTitle(post.title || "")
            setBody(post.body || "")
        }
    }, [post])

    const handleSubmit = useCallback((e: React.FormEvent): void => {
        e.preventDefault();
        if (title.trim() === "" || body.trim() === "") {
            addToast('error', 'Please fill in all fields');
            return;
        }
        onSubmit({
            id: post?.id ?? undefined,
            userId: post?.userId ?? undefined,
            title,
            body
        })
    }, [onSubmit, post?.id, post?.userId, title, body])

    const handleCancel = useCallback((e: React.FormEvent): void => {
        e.preventDefault()
        router.back()
    }, [router])

    return (
        <Form onSubmit={handleSubmit}>
            <Header>
                {isEditing ? `Edit post #${post?.id}` : "Create new post"}
            </Header>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
                required />
            <TextArea
                label="Description"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Post Body"
                required />
            <ButtonContainer>
                <Button variant="muted" disabled={loading} onClick={handleCancel}>Cancel</Button>
                <Button variant="primary" loading={loading} type="submit" disabled={!title.trim() || !body.trim()}>
                    {isEditing ? "Update" : "Submit"}
                </Button>
            </ButtonContainer>
        </Form>
    )
}

export default PostForm

