import { getMarkdownFiles, getMarkdown, markdownToHtml } from "@/app/lib/markdown-util"

export function generateStaticParams() {
    const posts = getMarkdownFiles("blog-posts");
  
    return posts.map((post) => ({
        id: post,
    }));
  }

  interface PostProps {
    id: string
  }

  export default async function Page({ params }:{ params: PostProps }) {
    const htmlContent = await markdownToHtml(getMarkdown(`blog-posts/${params.id}.md`).content);
    return (
      <div dangerouslySetInnerHTML={{ __html:htmlContent}}>
      </div>
    );
  }