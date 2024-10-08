"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        logo: string;
        bg: string;
        name: string;
        place: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "120s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="min-w-[300px] max-w-screen relative bg-slate-100 rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-2  md:w-[350px]"
                        style={{
                            backgroundImage: `url(${item.bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        key={item.name}
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent rounded-2xl"
                            aria-hidden="true"
                        ></div>
                        <blockquote className="min-h-[150px]">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                {/* {item.quote} */}
                            </span>
                            <div className="z-20 absolute bottom-4 left-4 mt-6 flex flex-row items-center">
                                <span className="">
                                    <span className=" text-md line-clamp-1 font-semibold leading-[1.6] text-gray-400">
                                        {item.name}
                                    </span>
                                    <span className=" text-sm line-clamp-1 leading-[1.6] text-gray-400 font-normal">
                                        {item.place}
                                    </span>
                                </span>
                            </div>
                            <div className="z-20 absolute bottom-4 right-4">
                                <Avatar>
                                    <AvatarImage src={item.logo} sizes="xl" />
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
