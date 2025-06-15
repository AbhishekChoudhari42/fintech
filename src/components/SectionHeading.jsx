'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function SectionHeading({ text }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="flex items-center space-x-4 mb-4">
      {/* Animated Blue Line */}
      <motion.div
        className="h-[2px] bg-blue-500"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { width: 0 },
          visible: { width: 50 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Delayed Text Reveal */}
      <motion.h2
        className="text-md font-light text-blue-500"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.5, duration: 0.2, ease: "easeOut" }}
      >
        {text}
      </motion.h2>
    </div>
  );
}
