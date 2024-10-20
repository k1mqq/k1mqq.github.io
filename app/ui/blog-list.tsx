import Link from "next/link";

import { getMarkdownFiles } from "@/app/lib/markdown-util";

export default function BlogList() {
  const markdownFiles = getMarkdownFiles("blog-posts");
  return (
    <div className="p-2">
      {markdownFiles.map((slug, i) => {
        return (
          <div
            key={i}
            className="mx-auto my-2 p-4 rounded-lg border shadow-lg border-gray-100/30 text-slate-100"
          >
            <Link href={`/blog/${slug}`}>
              <div className="p-2 mx-auto border-b-2 hover:border-cyan-500/80 transition ease-in">
                {slug}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
