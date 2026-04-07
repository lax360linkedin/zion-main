import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, memo } from "react";
import builderData from "../data/builders";
import TestimonialsCard from "../components/ui/TestimonialsCard";

/* ================= Animated Stat ================= */
const AnimatedStat = memo(({ value, label, start }) => {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.ceil(numeric / 40);

    const timer = setInterval(() => {
      current += step;
      if (current >= numeric) {
        setCount(numeric);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, numeric]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl md:text-5xl font-semibold">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="mt-2 text-xs md:text-sm text-neutral-400">{label}</p>
    </div>
  );
});

/* ================= Stats Section ================= */
const StatsSection = memo(({ stats }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
    >
      {stats.map((item, i) => (
        <AnimatedStat key={i} {...item} start={start} />
      ))}
    </div>
  );
});

/* ================= Builder Page ================= */
const Builder = () => {
  const navigate = useNavigate();

  const { hero, about, stats, services, projects, testimonials, whyChoose } =
    builderData;

  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <img
          src={hero.image}
          alt={hero.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {hero.title}
            </h1>

            <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-neutral-200 mb-8">
              {hero.subtitle}
            </p>

            <button
              onClick={() => navigate("/contact?from=builders")}
              className="bg-white text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {about.title}
            </h2>
            {about.description.map((text, i) => (
              <p key={i} className="text-neutral-600 mb-4 leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          <img
            src={about.image}
            alt={about.title}
            className="rounded-xl w-full h-[260px] sm:h-[360px] object-cover"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 bg-neutral-900 text-white">
        <StatsSection stats={stats} />
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          {/* SECTION HEADING */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            Our Services
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {services.items.map((item, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-2 rounded-2xl overflow-hidden border transition hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 md:h-full w-full object-cover"
                />

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600">{item.description}</p>

                  <div className="mt-6 h-[2px] w-0 bg-black group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 md:py-24 px-6 bg-neutral-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
            Our Projects
          </h2>
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-medium">
                  {project.location}
                </div>
              </div>

              {/* <div className="p-5">
                <h4 className="text-lg font-semibold">{project.name}</h4>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.items.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-800 p-7 rounded-2xl hover:-translate-y-2 transition"
            >
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 px-6 bg-gradient-to-b from-white to-neutral-100">
        <div className="max-w-6xl mx-auto">
          <TestimonialsCard items={testimonials.items} />
        </div>
      </section>

      {/* TAKE NEXT STEP */}
      <section className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Build Your Dream Property?
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
            Talk to our team about your residential or commercial project. We’ll
            guide you from planning to completion.
          </p>

          <button
            onClick={() => navigate("/contact?from=builders")}
            className="bg-white text-black px-10 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Zion Builders
          </button>
        </div>
      </section>
    </main>
  );
};

export default Builder;
