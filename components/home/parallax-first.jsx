import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxBody() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

    return (
        <div
            ref={ref}
            className="w-full h-screen overflow-hidden  relative grid place-items-center"
        >


            <motion.div
                className="absolute inset-0 z-0"

                style={{
                    backgroundImage: `url(/ls1.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <motion.div style={{ y: textY }}>
                <motion.h1
                    className="font-bold text-white text-3xl md:text-7xl pl-96 pb-48 z-5"
                >
                    Some facts from nasa..........!!
                </motion.h1>
            </motion.div>
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `url(/ls2.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>
    )
}