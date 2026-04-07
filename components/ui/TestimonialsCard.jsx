import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialsCard = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!items?.length) return null;

  const activeItem = items[activeIndex];
  const rotations = useMemo(() => [4, -3, 6, -6], []);

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setDirection(1);
      setActiveIndex((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setDirection(-1);
      setActiveIndex((i) => i - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-[1fr_1fr]
          gap-10
          items-center
          max-w-4xl
          w-full
        "
        style={{ perspective: "1400px" }}
      >
        {/* IMAGE STACK */}
        <div className="relative mx-auto w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px]">
          <AnimatePresence initial={false} custom={direction}>
            {items.map((item, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 rounded-xl overflow-hidden shadow-xl bg-neutral-200"
                  initial={{
                    x: offset * 20,
                    scale: 0.85,
                    rotateZ: rotations[index % 4],
                    opacity: isActive ? 1 : 0.5,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  animate={
                    isActive
                      ? {
                          x: [offset * 20, direction * -200, 0],
                          scale: [0.85, 1.05, 1],
                          rotateZ: [rotations[index % 4], 0],
                          opacity: 1,
                          zIndex: 100,
                        }
                      : {
                          x: offset * 20,
                          scale: 0.85,
                          rotateZ: rotations[index % 4],
                          opacity: 0.5,
                        }
                  }
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left px-4 md:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">{activeItem.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                “{activeItem.description}”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center md:justify-start gap-3">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === items.length - 1}
              className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
