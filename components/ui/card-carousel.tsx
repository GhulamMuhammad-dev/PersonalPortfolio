"use client";

import { useState, useEffect } from "react";

interface CarouselItem {
  src?: string;
  alt?: string;
  content?: React.ReactNode;
}

interface CardCarouselProps {
  images: CarouselItem[];
  autoplayDelay?: number;
}

export function CardCarousel({
  images,
  autoplayDelay = 3000,
}: CardCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoplayDelay) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      autoplayDelay
    );
    return () => clearInterval(interval);
  }, [images.length, autoplayDelay]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 flex justify-center px-4"
          >
            {img.content ? (
              img.content
            ) : (
              <img
                src={img.src || ""}
                alt={img.alt || "carousel"}
                className="rounded-lg shadow-md"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
