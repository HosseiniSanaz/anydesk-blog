import Post from "@/components/post"

export default function PostDetail() {

  return (
    <Post />
  ); 
}

// export async function getStaticPaths() {
//   const posts = await getPosts()
//   return {
//     paths: posts.map((post: IPost) => ({ params: { id: post.id.toString() } })),
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const { fetchPostById } = useStore()
//   const post = await fetchPostById(Number(params.id))
//   return {
//     props: {
//       post,
//     },
//   }
// }