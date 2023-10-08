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
      className="relative grid h-screen  w-full place-items-center overflow-hidden"
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
        <motion.h1 className="z-5 pb-48 pl-96 text-3xl font-bold text-white md:text-7xl">
          Some facts from nasa..........
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
  );
}
