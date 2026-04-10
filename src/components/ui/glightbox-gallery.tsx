import { useEffect, useRef } from 'react';

interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  title?: string;
}

interface GLightboxGalleryProps {
  images: GalleryImage[];
  containerClass?: string;
  children: React.ReactNode;
}

export function GLightboxGallery({ images, containerClass = '', children }: GLightboxGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const initGLightbox = async () => {
      const GLightbox = (await import('glightbox')).default;
      await import('glightbox/dist/css/glightbox.css');
      
      galleryRef.current = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
        preload: true,
        gallery: '[data-glightbox]',
        zoomable: true,
        dragSwipe: true,
      });
    };

    initGLightbox();

    return () => {
      galleryRef.current?.destroy();
    };
  }, []);

  const cloneChildren = () => {
    const childArray = Array.isArray(children) ? children : [children];
    return childArray.map((child, i) => {
      if (!images[i]?.src) return child;
      return (
        <a
          key={i}
          href={images[i].src}
          className="glightbox"
          data-glightbox={`title: ${images[i].title || ''}; desc: ${images[i].alt}`}
        >
          {child}
        </a>
      );
    });
  };

  return (
    <div ref={containerRef} className={containerClass}>
      {cloneChildren()}
    </div>
  );
}
