"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Form, ButtonContainer, Header } from "./styles"
import IPostFormProps from "./post-form.type"
import { StyledButton } from "@/components/ui/button/styles"
import { useRouter } from "next/navigation"
import TextField from "@/components/ui/text-field"
import TextArea from "../ui/text-area"

const PostForm: React.FC<IPostFormProps> = ({ post, onSubmit }) => {
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body || "")
    const router = useRouter();

    useEffect(() => {
        setTitle(post?.title || "")
        setBody(post?.body || "")
    }, [post])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            id: post?.id ?? null,
            userId: post?.userId ?? 1,
            title,
            body
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Header>
                {post?.id ? `Edit post #${post.id}` : "Create new post"}
            </Header>
            <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" required />
            <TextArea label="Description" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Post Body" required />
            <ButtonContainer>
                <StyledButton variant="muted" onClick={() => router.back()}>Cancel</StyledButton>
                <StyledButton variant="primary" type="submit" disabled={!title || !body}>
                    {post?.id ? "Update" : "Submit"}
                </StyledButton>
            </ButtonContainer>
        </Form>
    )
}

export default PostForm

