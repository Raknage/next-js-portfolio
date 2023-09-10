import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { relative } from "path";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toni Haila | Portfolio",
  description: "Stuff I do",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-codgray text-orange-100`}>
        <div className="absolute right-[0] top-[6rem] -z-10 h-1/5 w-1/2 rounded-full bg-orange-400 blur-[10rem] md:right-[10%] md:w-1/3"></div>
        <div className="absolute left-[0] top-[0rem] -z-10 h-1/5 w-1/2 rounded-full bg-teal-400 blur-[10rem] md:left-[10%] md:w-1/3"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
