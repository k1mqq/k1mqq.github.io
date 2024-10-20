import Link from "next/link";

import { getMarkdownFiles } from "@/app/lib/markdown-util";

// import type { GetStaticProps, NextPage } from "next";

export default function Home() {
    const markdownFiles = getMarkdownFiles("blog-posts");

    return (
    <div className="container">
      <h1>記事一覧</h1>
      <ul>
        {markdownFiles.map((slug, i) => {
          return (
            <li key={i}>
              <Link href={`/blog/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}