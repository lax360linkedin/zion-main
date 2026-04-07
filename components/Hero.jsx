import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Videos
import buildersVideo from "../assets/videos/mixkit-office-and-apartment-buildings-2065-full-hd.mp4";
import neetVideo from "../assets/videos/mixkit-turning-the-pages-by-night-17384-hd-ready.mp4";
import educationVideo from "../assets/videos/mixkit-girl-walking-to-school-5886-hd-ready.mp4";

// Slide data
const slides = [
  {
    brand: "builders",
    title: "Building Tomorrow",
    subtitle: "Premium Living & Commercial Spaces",
    bio: "We create high-quality residential and commercial spaces with precision, trust, and long-term value.",
    video: buildersVideo,
    route: "/builders",
  },
  {
    brand: "neet",
    title: "Future Doctors Start Here",
    subtitle: "Focused NEET Coaching with Results",
    bio: "Expert faculty and proven strategies designed to help students crack NEET with confidence.",
    video: neetVideo,
    route: "/neet",
  },
  {
    brand: "education",
    title: "Study Abroad Made Simple",
    subtitle: "Overseas Education & University Admissions",
    bio: "We guide students through university selection, applications, and visa processes for top study destinations like the USA, UK, Canada, Australia, and Europe.",
    video: educationVideo,
    route: "/education",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="relative w-full overflow-hidden h-[100svh] min-h-[600px]">
      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.video
          key={current.brand}
          src={current.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-white"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            {current.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-medium opacity-90 mb-4">
            {current.subtitle}
          </p>

          <p className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed mb-8">
            {current.bio}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(current.route)}
            className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold tracking-wide"
          >
            Explore
          </motion.button>
        </motion.div>
      </div>

      {/* Left Arrow (Tablet & Desktop only) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-4xl opacity-70 hover:opacity-100 transition"
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>

      {/* Right Arrow (Tablet & Desktop only) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex items-center justify-center absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-4xl opacity-70 hover:opacity-100 transition"
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
