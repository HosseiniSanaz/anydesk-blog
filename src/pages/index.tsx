import Image from "next/image";
import useStore from "@/store/useStore";
import { useEffect } from "react";
import PostList from "@/components/post-list";

export default function Home() {
  const { posts, fetchPosts } = useStore()

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])


  return (
    <div
      className={`items-center justify-items-center `}
    >
      <PostList posts={posts} onDelete={() => {}} />
      <footer className="row-start-3 flex flex-row gap-6 flex-wrap items-center justify-center">
          <a href="https://www.linkedin.com/in/hosseinisanaz/" target="_blank" rel="noopener noreferrer">
            © 2025 Powered by <b>Sanaz</b>
          </a>
          <Image src="/logo.png" alt="Anydesk Logo" width={72} height={18} />
      </footer>
    </div>
  );
}
