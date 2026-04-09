import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DressCarouselProps {
  images: { src: string; width: number; height: number }[];
  name: string;
}

export function DressCarousel({ images, name }: DressCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (images.length <= 1) {
    return (
      <img
        src={images[0]?.src}
        alt={name}
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div class="relative h-full w-full">
      <img
        src={images[currentIndex].src}
        alt={`${name} ${currentIndex + 1}/${images.length}`}
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <button
        onClick={goToPrevious}
        class="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition-opacity opacity-0 group-hover:opacity-100 hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        class="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-md transition-opacity opacity-0 group-hover:opacity-100 hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            class={`h-1.5 w-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}