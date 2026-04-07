import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import educationData from "../data/education";

/* ================= STATS ================= */
const AnimatedStat = ({ value, label, start }) => {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);

  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (!start) return;
    const controls = animate(count, numeric, { duration: 1.5 });
    return () => controls.stop();
  }, [start, numeric, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      className="flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-5xl font-semibold">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </h3>
      <p className="mt-2 text-xs md:text-sm text-neutral-400">{label}</p>
    </motion.div>
  );
};

const StatsSection = ({ stats }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
    >
      {stats.map((s, i) => (
        <AnimatedStat key={i} {...s} start={inView} />
      ))}
    </div>
  );
};

/* ================= EDUCATION PAGE ================= */
const Education = () => {
  const navigate = useNavigate();

  const {
    hero,
    about,
    stats,
    services,
    countries,
    whyChoose,
    admissions,
    studentTrust,
  } = educationData;

  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <img
          src={hero.image}
          className="absolute inset-0 w-full h-full object-cover"
          alt={hero.title}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 text-white text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              {hero.title}
            </h1>

            <p className="max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-neutral-200 mb-8">
              {hero.subtitle}
            </p>

            <button
              onClick={() => navigate("/contact?from=education")}
              className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {hero.ctaPrimary}
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {about.title}
            </h2>

            {about.description.map((t, i) => (
              <p key={i} className="text-neutral-600 mb-4 leading-relaxed">
                {t}
              </p>
            ))}
          </div>

          <img
            src={about.image}
            alt="About"
            className="rounded-2xl h-[260px] sm:h-[360px] w-full object-cover"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24 bg-neutral-900 text-white">
        <StatsSection stats={stats} />
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="py-20 md:py-28 px-6 bg-indigo-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {countries.title}
          </h2>
        </div>

        <motion.div
          className="flex gap-4 md:gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...countries.items, ...countries.items].map((c, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-white rounded-full shadow hover:scale-110 transition text-sm md:text-base font-medium"
            >
              {c}
            </div>
          ))}
        </motion.div>
      </section>

      {/* STUDENT TRUST */}
      <section className="py-20 md:py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studentTrust.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 text-yellow-400">
                {"★".repeat(item.rating)}
              </div>
              <p className="text-neutral-600 mb-6">“{item.feedback}”</p>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-pink-600">{item.university}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ADMISSIONS */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {admissions.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className={`${item.bg} rounded-2xl p-6 shadow-sm hover:shadow-lg transition`}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-neutral-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 md:py-28 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-neutral-800 p-6"
            >
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-neutral-950 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Start Your Study Abroad Journey Today
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
            Our counsellors will help you choose the right country, university,
            and course based on your career goals.
          </p>

          <button
            onClick={() => navigate("/contact?from=education")}
            className="bg-white text-black px-10 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Zion Abroad
          </button>
        </div>
      </section>
    </main>
  );
};

export default Education;
