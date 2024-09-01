"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function CollegeSection() {
  return (
    <div className="  flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "Jamia mahiriyya islamic college",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/kottumala-college.jpeg",
    bg:"/kottumala-college.jpeg",
    name: "kottumala islamic complex",
    place: "malappuram, Kalambadi",
  },
  {
    logo:"/kmic-logo.jpeg",
    bg:"/kmic.jpeg",
    name: "KMIC",
    place: "palakkad, theyyottuchira",
  },
  {
    logo:"/iga-koolivayal.jpeg",
    bg:"/iga-koolivayal-1.jpeg",
    name: "Imam Gazzali Academy",
    place: "wayanad, koolivayal",
  },
  
];
