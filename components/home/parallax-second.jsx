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
            <div className="bg-gray-950/40  backdrop-blur-md max-w-lg space-y-4 px-10 py-6 mx-auto rounded-xl text-white z-20">
                <p>
                    NASA scientists have extensively studied the critical role that water plays in regulating Earth's climate. The planet's water cycle, also known as the hydrological cycle, involves the continuous movement of water between the atmosphere, land, and oceans. This cycle plays a pivotal role in maintaining the Earth's temperature and climate stability.
                </p>
                <p>
                    Water acts as a natural thermostat for our planet. When water evaporates from the Earth's surface, it absorbs heat, cooling the environment. This cooling effect helps regulate temperature extremes, preventing our planet from becoming too hot or too cold to support life.
                </p>
                <p>
                    Additionally, water vapor in the atmosphere acts as a greenhouse gas, trapping some heat and contributing to the natural greenhouse effect that keeps our planet warm enough to support life. NASA's research on Earth's climate and the water cycle is crucial for understanding climate change and its impacts, which have far-reaching consequences for ecosystems and societies worldwide.
                </p>
                <p>
                    In summary, water's role in regulating Earth's climate is a testament to its importance as a life-sustaining and climate-stabilizing element on our planet. NASA's ongoing research continues to deepen our understanding of this critical relationship.
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