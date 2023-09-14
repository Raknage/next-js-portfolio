import Image from "next/image";
import React from "react";
import profilePic from "../public/DSC09234.jpg";

export default function Intro() {
  return (
    <section>
      <div className="mt-28 flex flex-col items-center justify-center">
        <Image
          src={profilePic}
          height={200}
          alt="Profile picture"
          placeholder="blur"
          className="rounded-full border-[10px] border-woodrush-400 shadow-md shadow-starship-300/50"></Image>
      </div>
    </section>
  );
}
