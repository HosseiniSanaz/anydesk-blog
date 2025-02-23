import useStore from "@/store/useStore";
import { useEffect, useMemo } from "react";
import PostList from "@/components/post-list";
import Loading from "@/components/ui/loading";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { getPosts } from "@/services/api";
import { IPost } from "@/types/post.type";
import Head from "next/head";


export default function Home(props: { posts: IPost[] }) {
    const { posts, loading, setPosts } = useStore()

    useEffect(() => {
        if (posts.length === 0) {
            setPosts(props.posts);
            // fetchPosts() // @TODO: uncomment this when we have a backend for CRUD operations
        }
    }, [setPosts, props.posts, posts]);


    const sortedPosts = useMemo(() => {
        return posts.sort((a, b) => b.id - a.id);
    }, [posts]);


    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Head>
                <title>AnyDesk Blog</title>
                <meta name="description" content="Stay up to date with the latest news" />
            </Head>
            <div>
                <PostList posts={sortedPosts} />
                <Footer />
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()
    return {
        props: {
            posts
        }
    }
}
