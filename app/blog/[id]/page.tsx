import {
  getMarkdownFiles,
  getMarkdown,
  markdownToHtml,
} from "@/app/lib/markdown-util";

export function generateStaticParams() {
  const posts = getMarkdownFiles("blog-posts");

  return posts.map((post) => ({
    id: post,
  }));
}

interface PostProps {
  id: string;
}

export default async function Page({ params }: { params: PostProps }) {
  const htmlContent = await markdownToHtml(
    getMarkdown(`blog-posts/${params.id}.md`).content
  );
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg backdrop-blur-lg shadow-lg border-gray-100/30 text-slate-100">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </div>
  );
}
