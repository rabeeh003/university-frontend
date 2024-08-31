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
    </div>
  );
}

const testimonials = [
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "Jamia mahiriyya",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "kmic",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "vmic",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "Jamia mahiriyya",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "kmic",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "vmic",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "Jamia mahiriyya",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "kmic",
    place: "calicut, ramanattukara",
  },
  {
    logo:"/jmiclogo.jfif",
    bg:"/jmicbg.jfif",
    name: "vmic",
    place: "calicut, ramanattukara",
  }
  
];
