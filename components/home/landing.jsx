'use client'
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  const variants = {
    jump: {
      y: [0, -8],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }
  return (
    <>

      <div id="about" className="z-10 w-full max-w-5xl my-10 px-5 xl:px-0 flex flex-row items-center">
        <motion.div variants={variants}
          animate={"jump"} className="w-1/3">
          <Image
            src="/octopus.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </motion.div>
        <div className="w-2/3">
          <div className="m-auto">
            <p
              className="mt-6 animate-fade-up text-center text-violet-950 opacity-0  text-5xl md:text-8xl"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              Hi, My name is Aqua!
            </p>
            <p
              className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <Balancer>
                I am going to teach you why we need to save water and how to do it!
              </Balancer>
            </p>
            <Link href="#timeline">
              <motion.button
                className="flex animate-fade-up  justify-center items-center w-2/3 p-2 m-auto my-10 px-10 min-w-max text-sm text-center rounded-full backdrop-blur-sm transition-all md:text-base bg-blue-800/20 hover:bg-blue-800/80"

              >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" height="30" className="inline text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
                </svg>
              </motion.button>
            </Link>

          </div>

        </div>
        {/* <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Meet your AI Jeopardy expert</Balancer>
        </h1>
         */}
      </div >
    </>
  )
}