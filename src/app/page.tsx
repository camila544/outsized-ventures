"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <motion.div
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
        <h1 className="mt-20 md:mt-32 text-white text-2xl md:text-5xl font-bold tracking-tight">
          THIS FUND IS NOT FOR EVERYONE.
        </h1>
        <p className="mt-10 max-w-md md:max-w-3xl text-white text-sm md:text-lg leading-relaxed">
          This game we play isn&apos;t pretty. It&apos;s fast, messy, and merciless. But one thing we can promise: if you are in, we are in — all gas no brakes.
        </p>
      </div>
    </>
  );
}
