import type { Metadata } from "next";
import Image from "next/image";
import { Roboto_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OUTSIZED VENTURES",
  description: "Outsized Ventures is an early stage VC fund based in London that partners with founders pushing the boundaries of science and technology to solve the world's greatest challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className="relative w-screen h-[100svh] md:h-screen overflow-hidden"
          style={{
            backgroundImage: "url('/ov_texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#000",
          }}
        >
          {children}
          <footer className="absolute inset-x-0 bottom-0 z-30 px-4 pb-4">
            <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
              <nav>
                <ul className="flex flex-wrap items-center gap-4 md:gap-6">
                  <li>
                    <Link href="/team" className="text-sm md:text-base underline-offset-4 hover:underline text-white">
                      Team
                    </Link>
                  </li>
                  <li>
                    <a href="https://auth.fundrbird.com/" target="_blank" className="text-sm md:text-base underline-offset-4 hover:underline text-white">
                      FUND I
                    </a>
                  </li>
                  <li>
                    <a href="https://tally.so/r/mebxje" target="_blank" className="text-sm md:text-base underline-offset-4 hover:underline text-white">
                      FUND II
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/447897033943" target="_blank" className="text-sm md:text-base underline-offset-4 hover:underline text-white">
                      Reach out.
                    </a>
                  </li>
                </ul>
              </nav>
              <span className="text-xs md:text-sm text-white">© OUTSIZED VENTURES. All rights reserved.</span>
            </div>
          </footer>
          <div className="absolute top-4 left-4 z-30">
            <Link href="/">
              <Image src="/outsizedlogo.svg" alt="Outsized Ventures Logo" width={35} height={91} />
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
