"use client"
import { useEffect, useRef, useState } from 'react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

export default function InfiniteImageCarousel() {
  // Datos del carrusel - reemplaza con tus propias imágenes
  const images: CarouselImage[] = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Imagen+1',
      alt: 'Imagen 1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/33FF57/FFFFFF?text=Imagen+2',
      alt: 'Imagen 2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/3357FF/FFFFFF?text=Imagen+3',
      alt: 'Imagen 3',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/F333FF/FFFFFF?text=Imagen+4',
      alt: 'Imagen 4',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/33FFF3/FFFFFF?text=Imagen+5',
      alt: 'Imagen 5',
    },
  ];

  const [currentImages, setCurrentImages] = useState<CarouselImage[]>([...images, ...images]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0); 
  const speed = 1; // Ajusta la velocidad (píxeles por frame)
  const isPausedRef = useRef(false);

  // Efecto para la animación continua
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const containerWidth = container.scrollWidth / 2;

    const animate = () => {
      if (isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      position -= speed;
      
      // Reiniciar posición cuando llegamos al final
      if (-position >= containerWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Pausar al interactuar
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Galería Infinita</h2>
      
      <div
        ref={containerRef}
        className="flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {currentImages.map((image, index) => (
          <div key={`${image.id}-${index}`} className="flex-shrink-0 px-2">
            <div className="w-64 h-48 overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}