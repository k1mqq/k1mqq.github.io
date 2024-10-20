import Panel from "@/app/ui/panel";
export default function Link() {
  return (
    <div className="flex items-center justify-center">
      <Panel>
        <a
          href="https://x.com/k1mq_"
          target="_blank"
          rel="noopener noreferrer"
          className="m-3"
        >
          <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">
            X(Twitter)
          </p>
        </a>
        <a
          href="https://github.com/k1mqq"
          target="_blank"
          rel="noopener noreferrer"
          className="m-3"
        >
          <p className="mx-auto text-center border-b-2 text-xl transition ease-in hover:border-cyan-500">
            Github
          </p>
        </a>
        <p className="mx-auto text-right text-sm">
          まとめるほどたくさんリンクなかった
        </p>
      </Panel>
    </div>
  );
}
