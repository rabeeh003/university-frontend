import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";

export function HeroSection() {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-80 md:-top-30"
        fill="white"
      />
      <div className="m-auto p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Jamia Juniar College <br /> Co-ordinarion.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        The concept of Junior Colleges was approved by the meeting held at Chelari Samasthalaya on 9.2.2010. The system is managed by the Coordination of Jami&apos;ah Junior Colleges headquartered at Jami&apos;ah Nooriya.
        </p>
      </div>
    </div>
  );
}
