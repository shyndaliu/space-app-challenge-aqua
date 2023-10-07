'use client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";
import TimeLine from "@/components/home/timeline";
import Image from "next/image";
import ParallaxBody from "@/components/home/fullw";

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
    </>
  );
}
