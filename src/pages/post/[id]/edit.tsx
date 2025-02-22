"use client"

import EditPost from "@/components/EditPost"
import { getPosts } from "@/services/api"
import { IPost } from "@/types/post.type"

export default function Edit() {

  return (
    <EditPost />
  )
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  try {
    const posts = await getPosts()
    const post = posts.find((post: IPost) => post.id === Number(params.id))
    
    if (!post) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        post,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map((post: IPost) => ({ params: { id: post.id.toString() } })),
    fallback: 'blocking',
  }
}