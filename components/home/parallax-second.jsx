import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
import React, { useRef } from "react";
import Image from "next/image";

export default function ParallaxBg() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const image3Y = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);




    return (
        <div
            ref={ref}
            className="w-full  bg-gray-700  h-screen overflow-hidden  relative grid place-items-center"
        >
            <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300 z-20">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                    earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                    sit dolores odio excepturi facilis laboriosam officiis dolorem,
                    nobis reprehenderit molestiae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                    earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                    sit dolores odio excepturi facilis laboriosam officiis dolorem,
                    nobis reprehenderit molestiae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                    earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                    sit dolores odio excepturi facilis laboriosam officiis dolorem,
                    nobis reprehenderit molestiae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                    earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                    sit dolores odio excepturi facilis laboriosam officiis dolorem,
                    nobis reprehenderit molestiae.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
                    earum nobis quasi repellat. Amet facere nulla dolorum accusantium
                    sit dolores odio excepturi facilis laboriosam officiis dolorem,
                    nobis reprehenderit molestiae.
                </p>
            </div>
            <motion.div style={{ y: image1Y }}
                className="absolute left-20 bottom-5 z-5"
            >
                <Image
                    src="/thermometer.png"
                    width='250'
                    height='250' />
            </motion.div>
            <motion.div style={{ y: image2Y }}
                className="absolute left-25 top-7 z-5"
            >
                <Image
                    src="/hot.png"
                    width='250'
                    height='250' />
            </motion.div>
            <motion.div style={{ y: image3Y }}
                className="absolute bottom-25 right-10 z-5"
            >
                <Image
                    src="/sandwatch.png"
                    width='250'
                    height='250' />
            </motion.div>
        </div>
    )
}