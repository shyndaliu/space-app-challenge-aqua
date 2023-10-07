import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import React, { useRef } from "react";
import Image from "next/image";

export default function Parallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "160%"]);
    const image3Y = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);




    return (
        <div
            ref={ref}
            className="w-full  h-screen overflow-hidden  relative grid place-items-center"
        >
            <h1 className="absolute left-1/4 text-3xl text-gray-700">
                Some text.....
            </h1>
            <motion.div style={{ y: image3Y }}
                className="absolute top-12 z-5"
            >
                <Image
                    src="/ds1.png"
                    width='500'
                    height='500' />
            </motion.div>
            <motion.div style={{ y: image2Y }}
                className="absolute right-1/4 z-10"
            >
                <Image
                    src="/ds2.png"
                    width='200'
                    height='200' />
            </motion.div>
            <motion.div style={{ y: image1Y }}
                className="absolute left-1/4  z-15"
            >
                <Image
                    src="/ds3.png"
                    width='200'
                    height='200' />
            </motion.div>
        </div>
    )
}