"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Curriculum",
    description:
      "The Junior College Syllabus is a way of keeping up with modern education methods by including modern physical education and knowledge of Arabic, Urdu, English and Malayalam languages ​​along with in-depth study in Darsee books which we continue to follow in the religious field. The syllabus has continuous assessment methods such as assignments, projects, and collections for the effectiveness of the study subjects.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Curriculum
      </div>
    ),
  },
  {
    title: "Exams",
    description:
      "All examinations in religious subjects are conducted by the examination board under coordination. Secondary 4th and 8th Higher Secondary 3rd and 7th classes will be common exams.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        /> */}
        Exams
      </div>
    ),
  },
  {
    title: "Junior Fest",
    description:
      "Jamia Junior Fests are the platform for students to showcase their talents. The junior fests held in the past years in more than 100 categories are noteworthy.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Junior Fest
      </div>
    ),
  },
  {
    title: "Sajda",
    description:
      "Sajda is an association of junior college students (STUDENTS ASSOCIATION OF JAMIA NOORIYYA FOR DEVOTED ACTIVITIES).Sajda is active on the campuses in the Da’wa, Adarsham, Sargam and publishing wings.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Sajada
      </div>
    ),
  },
];
export function DetailsSection() {
  return (
    <div className="h-screen">
      <StickyScroll content={content} />
    </div>
  );
}
