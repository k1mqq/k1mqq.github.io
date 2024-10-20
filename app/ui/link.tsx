export default function Link() {
    return (
        <div className="flex items-center justify-center">
          <div className="w-full md:w-2/4 m-5 p-4 bg-gray-100/10 rounded-lg border backdrop-blur-lg shadow-lg border-gray-100/50 text-slate-100">
            <a href="https://x.com/k1mq_" className="m-3">
              <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">X(Twitter)</p>
            </a>
            <a href="https://github.com/k1mqq" className="m-3">
              <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">Github</p>
            </a>
            <p className="mx-auto text-right text-sm">まとめるほどたくさんリンクなかった</p>
          </div>
        </div>
      )
}