"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { Button } from "../ui/button";

export function AdmitionSection() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                <Highlight className="text-white">
                    Admition Started
                </Highlight>
            </motion.h1>
            <motion.h3
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-xl px-4 md:text-2xl lg:text-3xl font-semibold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mt-2 "
            >
                Admission now open for Jamia Junior College Secondary and Senior Secondary Courses.
            </motion.h3>
            <div className="w-full flex justify-center gap-2 mt-2">
                <a
                    href="https://jjc.jamianooriya.in/wp-content/uploads/2024/03/pros2024.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">Prospectus</Button>
                </a>
                <Button variant="secondary">Apply Now</Button>
            </div>

        </HeroHighlight>
    );
}
