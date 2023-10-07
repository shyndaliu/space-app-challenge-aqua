'use client';
import Landing from "@/components/home/landing";
import TimeLine from "@/components/home/timeline";
import Image from "next/image";
import ParallaxBody from "@/components/home/parallax-first";
import ParallaxBg from "@/components/home/parallax-second";
import Parallax from "@/components/home/parallax-third";
import NasaVideo from "@/components/home/video";
import Globe from "@/components/home/globe";
import Footer from "@/components/home/footer";
import Test from "@/components/home/test";

export default async function Home() {
  //const session = await getServerSession(authOptions);
  return (
    <>
      <div className="-z-7 absolute top-0 left-0 w-full">
        <Image
          src="/wave.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}

        />
      </div>
      <Landing />
      <TimeLine />
      <ParallaxBody />
      <ParallaxBg />
      <Parallax />
      <Globe />
      <NasaVideo />
      <Test />
      <Footer />
    </>
  );
}
