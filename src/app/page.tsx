"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        className="absolute z-20"
        style={{ top: "35%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 0,
        }}
      >
        <Image src="/star.svg" alt="Star" width={80} height={76} priority />
      </motion.div>
      <div className="absolute z-20 text-center px-4" style={{ top: "55%", left: "50%", transform: "translateX(-50%)" }}>
        <h1 className="text-white text-2xl md:text-5xl font-bold tracking-tight">
          THIS FUND IS NOT FOR EVERYONE.
        </h1>
        <p className="mt-6 max-w-md md:max-w-3xl text-white text-sm md:text-lg leading-relaxed">
          This game we play isn&apos;t pretty. It&apos;s fast, messy, and merciless. But one thing we can promise: if you are in, we are in — all gas no brakes.
        </p>
      </div>
    </>
  );
}
