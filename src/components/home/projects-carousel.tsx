"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const height = 400;
const width = (16 / 9) * height;

const ProjectsCarousel = () => {
  const [md, setMd] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      requestAnimationFrame(() => setMd(window.innerWidth < 768));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex w-full cursor-grab justify-center gap-12 select-none"
      style={{ height: md ? 300 : height }}
    >
      <Carousel
        className="w-full"
        orientation="horizontal"
        opts={{
          align: "center",
          loop: true,
          dragFree: true,
        }}
        plugins={[WheelGesturesPlugin({ forceWheelAxis: "y" })]}
      >
        <CarouselContent className="-ml-12">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center pl-12"
              style={{ flexBasis: md ? "100%" : width }}
            >
              <div
                className="flex w-full items-center justify-center bg-zinc-950/[0.2]"
                style={{ height: md ? 300 : height }}
              >
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
