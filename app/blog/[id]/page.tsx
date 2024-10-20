import { getMarkdownFiles } from "@/app/lib/markdown-util"

export function generateStaticParams() {
    const posts = getMarkdownFiles("blog-posts");
  
    return posts.map((post) => ({
        id: post,
    }));
  }

  export default function Page({ params }) {
    return (
      <div>
        <p>{params.post}</p>
      </div>
    );
  }