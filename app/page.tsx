import Image from "next/image";

export default function Home() {
  return (
    <div style={{ height: "2000px" }}>
      <Image
        src={`/myicon.png`}
        width={100}
        height={100}
        alt={"this is keemacurry"}
      ></Image>
    </div>
  );
}
