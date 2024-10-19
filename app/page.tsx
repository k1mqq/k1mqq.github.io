import Image from "next/image";
import { basePath } from "@/next.config.mjs" // 追加
const BASE_PATH = basePath ? basePath : "" // 追加


export default function Home() {
  
  return (
    <Image src={`${BASE_PATH}/myicon.png`} width={100} height={100} alt={"this is keemacurry"}></Image>
  );
}
