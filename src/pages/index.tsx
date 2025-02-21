import useStore from "@/store/useStore";
import { useEffect } from "react";
import PostList from "@/components/post-list";
import Loading from "@/components/ui/loading";
import Footer from "@/components/Footer";


export default function Home() {
  const { posts, fetchPosts, loading } = useStore()

  useEffect(() => {
    if(posts.length === 0) {
      fetchPosts()
    }
  }, [fetchPosts, posts])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <PostList posts={posts} />
      <Footer />  
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts()
//   console.log('posts',posts)
//   return {
//     props: {
//       posts,
//     },
//     revalidate: 120,
//   }
// }
