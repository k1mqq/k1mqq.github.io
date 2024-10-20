import Image from "next/image";
import Links from "@/app/ui/links";
import Link from "next/link"

export default function Home() {
  return (
    <div style={{ height: "2000px" }}>
      <div className="flex items-center justify-center">
        <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
          <Image
            src={`/myicon.png`}
            width={100}
            height={100}
            alt={"this is keemacurry"}
            className="mx-auto"
          ></Image>
          <h1 className="p-2 text-xl text-center border-b-2">k1mq/きーまかれぇ</h1>
          <li className="p-3">セキュリティを少々</li>
          <li className="p-3">CTFチームに入りたいと思ってはいる</li>
          <li className="p-3">アイコン探し中</li>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
          <Link href="/blog" className=""><h1 className="p-2 text-xl border-b-2 hover:border-cyan-500/80 transition ease-in">Blog</h1></Link>
          <p className="p-3">まだなし！</p>
      </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
          <h1 className="text-xl border-b-2 p-2">History</h1>
          <div className="flex p-3">
            <p>2024/10</p>
            <p className="text-right mx-auto mr-0">k1mq is here!が公開</p>
          </div>
          <div className="flex p-3">
            <p>2024/09</p>
            <p className="text-right mx-auto mr-0">バグバウンティで初の報酬金を獲得</p>
          </div>
        </div>
      </div>

      
      <Links />
    </div>
  );
}
