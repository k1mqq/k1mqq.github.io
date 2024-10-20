import Link from "next/link"

export default function Links() {
    return (
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/30 text-slate-100">
          <Link href="/link" className=""><h1 className="p-2 text-xl border-b-2 hover:border-cyan-500/80 transition ease-in">Link</h1></Link>
            <a href="https://x.com/k1mq_" target="_blank" rel="noopener noreferrer" className="m-3">
              <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">X(Twitter)</p>
            </a>
            <a href="https://github.com/k1mqq" target="_blank" rel="noopener noreferrer" className="m-3">
              <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">Github</p>
            </a>
            <p className="mx-auto text-right text-sm">まとめるほどたくさんリンクなかった</p>
          </div>
        </div>
      )
}