"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ProjectSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  projectTitle: string;
  priority?: boolean;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProjectSlider = ({ images, projectTitle, priority = false }: ProjectSliderProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("ProjectSlider");

  const handleNext = useCallback(() => {
    setPage(([currentPage]) => [(currentPage + 1) % images.length, 1]);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setPage(([currentPage]) => [currentPage === 0 ? images.length - 1 : currentPage - 1, -1]);
  }, [images.length]);

  const handleDotClick = useCallback(
    (index: number) => {
      setPage([index, index > page ? 1 : -1]);
    },
    [page]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
      const swipe = swipePower(offset.x, velocity.x);

      if (swipe < -swipeConfidenceThreshold) {
        handleNext();
      } else if (swipe > swipeConfidenceThreshold) {
        handlePrevious();
      }
    },
    [handleNext, handlePrevious]
  );

  const handleImageClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleModalNext = useCallback(() => {
    setPage(([currentPage]) => [(currentPage + 1) % images.length, 1]);
  }, [images.length]);

  const handleModalPrevious = useCallback(() => {
    setPage(([currentPage]) => [currentPage === 0 ? images.length - 1 : currentPage - 1, -1]);
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          handleModalClose();
          break;
        case "ArrowRight":
          handleModalNext();
          break;
        case "ArrowLeft":
          handleModalPrevious();
          break;
      }
    },
    [isModalOpen, handleModalClose, handleModalNext, handleModalPrevious]
  );

  // Dodaj event listener dla klawiszy
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [handleKeyDown]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className="group relative h-full w-full overflow-hidden rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Główny obraz */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
          >
            <Image
              src={images[page].src}
              alt={images[page].alt}
              width={550}
              height={500}
              className="h-full w-full cursor-pointer rounded-xl object-contain transition-transform duration-200 hover:scale-105"
              priority={priority && page === 0}
              loading={priority && page === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 50vw"
              onClick={handleImageClick}
            />
          </motion.div>
        </AnimatePresence>

        {/* Kontrolki nawigacji */}
        {images.length > 1 && (
          <>
            {/* Przyciski poprzednie/następne */}
            <div
              className={`absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
              <Button
                variant="secondary"
                size="icon"
                onClick={handlePrevious}
                className="bg-background/80 hover:bg-background/90 h-10 w-10 rounded-full backdrop-blur-sm"
                aria-label={t("previousImageProject", { project: projectTitle })}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleNext}
                className="bg-background/80 hover:bg-background/90 h-10 w-10 rounded-full backdrop-blur-sm"
                aria-label={t("nextImageProject", { project: projectTitle })}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Kropki nawigacyjne */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === page
                      ? "bg-primary scale-125"
                      : "bg-background/60 hover:bg-background/80"
                  }`}
                  aria-label={t("goToImage", { current: index + 1, total: images.length })}
                  aria-current={index === page ? "true" : "false"}
                />
              ))}
            </div>

            {/* Licznik zdjęć */}
            <div className="bg-background/80 absolute top-4 right-4 z-10 rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm">
              {page + 1} / {images.length}
            </div>
          </>
        )}

        {/* Wskaźnik kliknięcia */}
        <div className="bg-background/80 absolute right-4 bottom-4 z-10 rounded-full px-2 py-1 text-xs font-medium opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {t("clickToEnlarge")}
        </div>
      </div>

      {/* Modal z pełnym podglądem */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleModalClose}
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Przycisk zamknięcia */}
              <Button
                variant="secondary"
                size="icon"
                onClick={handleModalClose}
                className="bg-background/80 hover:bg-background/90 absolute -top-4 -right-4 z-10 h-10 w-10 rounded-full backdrop-blur-sm"
                aria-label={t("closePreview")}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Zdjęcie w pełnym rozmiarze */}
              <Image
                src={images[page].src}
                alt={images[page].alt}
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
                priority
              />

              {/* Kontrolki nawigacji w modalu */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleModalPrevious}
                    className="bg-background/80 hover:bg-background/90 absolute top-1/2 left-4 h-12 w-12 -translate-y-1/2 rounded-full backdrop-blur-sm"
                    aria-label={t("previousImage")}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleModalNext}
                    className="bg-background/80 hover:bg-background/90 absolute top-1/2 right-4 h-12 w-12 -translate-y-1/2 rounded-full backdrop-blur-sm"
                    aria-label={t("nextImage")}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>

                  {/* Licznik w modalu */}
                  <div className="bg-background/80 absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
                    {t("imageCounter", { current: page + 1, total: images.length })}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
