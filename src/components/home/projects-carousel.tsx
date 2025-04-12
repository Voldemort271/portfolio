"use client";

import React, {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

const height = 400;
const width = (16 / 9) * height;

interface Props {
  setIndex: Dispatch<SetStateAction<number>>;
  length: number;
  parent: Element | null;
}

const ProjectsCarousel = ({ parent, setIndex, length }: Props) => {
  const [md, setMd] = useState(true);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setIndex(api.selectedScrollSnap());
    });
    console.log(api.selectedScrollSnap());
  });

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
      className="flex w-full justify-center gap-12 select-none"
      style={{ height: md ? 300 : height }}
    >
      <Carousel
        className="w-full"
        orientation="horizontal"
        opts={{
          align: "center",
          loop: true,
          skipSnaps: true,
        }}
        setApi={setApi}
        plugins={[WheelGesturesPlugin({ forceWheelAxis: "y", target: parent })]}
      >
        <CarouselContent className="-ml-12">
          {Array.from({ length }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center pl-12"
              style={{ flexBasis: md ? "100%" : width }}
            >
              <div
                className="flex w-full items-center justify-center bg-zinc-950/[0.2]"
                style={{ height: md ? 300 : height }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
