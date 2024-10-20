import BlogList from "@/app/ui/blog-list";

// import type { GetStaticProps, NextPage } from "next";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/30 text-slate-100">
        <h1>記事一覧</h1>
        <BlogList/>
      </div>
    </div>
  );
}
