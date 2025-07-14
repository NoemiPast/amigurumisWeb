"use client"
import { useEffect, useRef, useState } from 'react';
import { CarouselImage, CAROUSEL_IMAGES } from '../REUTILIZABLES/ImagenesCarrusel';

export default function InfiniteImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const [currentImages] = useState<CarouselImage[]>([...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES]);
  
  // Configuración mejorada del carrusel
  const CAROUSEL_SPEED = 1.5;
  const IMAGE_WIDTH = 384; // w-96 (96 * 4 = 384px)
  const GAP = 24; // px-6 (6 * 4 = 24px)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const singleLoopWidth = (IMAGE_WIDTH + GAP) * CAROUSEL_IMAGES.length;

    const animate = () => {
      if (isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      position -= CAROUSEL_SPEED;
      
      if (-position >= singleLoopWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section className="w-full overflow-hidden py-12">
      <h2 
        className="text-3xl font-bold mb-5 text-center text-gray-500 font-serif">
        Nuestros productos
      </h2>
      
      <div
        ref={containerRef}
        className="flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-live="polite"
      >
        {currentImages.map((image, index) => (
          <div 
            key={`${image.id}-${index}`} 
            className="flex-shrink-0 px-6 transition-all duration-500 hover:scale-110 hover:z-10"
          >
            <div className="w-96 h-72 overflow-hidden rounded-xl shadow-xl bg-white border-2 border-white hover:border-amber-200">
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-contain p-4"
                loading="lazy"
                width={384}
                height={288}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}