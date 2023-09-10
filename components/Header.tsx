"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50">
      <motion.div
        className="fixed left-1/2 top-0 h-20 w-full rounded-none border-b-[1px] border-starship-400 border-opacity-80 bg-kumera-600/25 shadow-lg shadow-black backdrop-blur-3xl md:left-1/2 md:top-6 md:h-14 md:w-1/2 md:min-w-fit md:rounded-full md:border md:px-5"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}>
        <nav className="">
          <ul className="flex h-20 flex-wrap items-center justify-evenly gap-2 md:h-14 md:min-w-fit md:flex-nowrap">
            {links.map((link) => {
              return (
                <li
                  key={link.hash}
                  className="rounded-full border px-2 ring-desert-600 transition-all hover:text-starship-500 hover:ring">
                  <Link href={link.hash}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
