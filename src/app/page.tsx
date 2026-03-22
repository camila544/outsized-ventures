import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-2 md:px-4">
      <Image src="/star.svg" alt="Star" width={40} height={40} className="mb-6" />
      <h1 className="text-white font-bold tracking-tight text-3xl md:text-6xl max-w-3xl">
        THIS FUND IS NOT FOR EVERYONE.
      </h1>
      <p className="text-white mt-6 text-sm md:text-base max-w-xl leading-relaxed">
        This game we play isn&apos;t pretty. It&apos;s fast, messy, and merciless. But one thing we can promise: if you are in, we are in — all gas no brakes.
      </p>
    </div>
  );
}
