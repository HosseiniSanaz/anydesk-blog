"use client"

import type React from "react"
import {useEffect, useState} from "react"
import {ButtonContainer, Form, Header} from "./styles"
import IPostFormProps from "./post-form.type"
import Button from "@/components/ui/button"
import {useRouter} from "next/navigation"
import TextField from "@/components/ui/text-field"
import TextArea from "../ui/text-area"

const PostForm: React.FC<IPostFormProps> = ({post, onSubmit, loading}) => {
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body || "")
    const router = useRouter();

    useEffect(() => {
        setTitle(post?.title || "")
        setBody(post?.body || "")
    }, [post])

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        onSubmit({
            id: post?.id ?? undefined,
            userId: post?.userId ?? undefined,
            title,
            body
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Header>
                {post?.id ? `Edit post #${post.id}` : "Create new post"}
            </Header>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
                required/>
            <TextArea
                label="Description"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Post Body"
                required/>
            <ButtonContainer>
                <Button variant="muted" disabled={loading} onClick={() => router.back()}>Cancel</Button>
                <Button variant="primary" loading={loading} type="submit" disabled={!title.trim() || !body.trim()}>
                    {post?.id ? "Update" : "Submit"}
                </Button>
            </ButtonContainer>
        </Form>
    )
}

export default PostForm

