import Link from "next/link";

import { getMarkdownFiles } from "@/app/lib/markdown-util";

// import type { GetStaticProps, NextPage } from "next";

export default function Home() {
  const markdownFiles = getMarkdownFiles("blog-posts");

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
        <h1>記事一覧</h1>
        <ul>
          {markdownFiles.map((slug, i) => {
            return (
              <div key={i} className="mx-auto my-2 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
                <Link href={`/blog/${slug}`} ><div className="p-2 mx-auto border-b-2 hover:border-cyan-500/80 transition ease-in">{slug}</div></Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
