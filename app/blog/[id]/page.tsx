import { getMarkdownFiles } from "@/app/lib/markdown-util"

export function generateStaticParams() {
    const posts = getMarkdownFiles("blog-posts");
  
    return posts.map((post) => ({
        id: post,
    }));
  }

  interface PostProps {
    id: string
  }

  export default function Page({ params }:{ params: PostProps }) {
    return (
      <div>
        <p>{params.id}</p>
      </div>
    );
  }