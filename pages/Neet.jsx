import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import neetData from "../data/neet";
import TestimonialsCard from "../components/ui/TestimonialsCard";
import facultyImage from "../assets/Neet/neet-faculty.jpeg";

/* ================= ICONS ================= */
const COURSE_ICONS = {
  foundation: (
    <>
      <path d="M12 3l9 4.5-9 4.5L3 7.5 12 3z" />
      <path d="M3 10.5v6l9 4.5 9-4.5v-6" />
    </>
  ),
  crash: <path d="M13 3v10h7l-8 8-8-8h7V3z" />,
  repeater: <path d="M12 8v4l3 3M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" />,
  integrated: (
    <>
      <path d="M3 4h18v4H3z" />
      <path d="M3 10h18v10H3z" />
    </>
  ),
};

/* ================= STATS ================= */
const AnimatedStat = ({ value, label, start }) => {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);

  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (!start) return;
    const controls = animate(count, numeric, { duration: 1.6 });
    return () => controls.stop();
  }, [start, numeric, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      className="flex flex-col items-center"
    >
      <h3 className="text-4xl md:text-5xl font-semibold">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </h3>
      <p className="mt-2 text-sm text-neutral-400">{label}</p>
    </motion.div>
  );
};

const StatsSection = ({ stats }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
    >
      {stats.map((item, i) => (
        <AnimatedStat key={i} {...item} start={inView} />
      ))}
    </div>
  );
};

/* ================= NEET PAGE ================= */
const Neet = () => {
  const navigate = useNavigate();
  const {
    hero,
    about,
    stats,
    courses,
    methodology,
    faculty,
    whyChoose,
    testimonials,
    finalCTA,
  } = neetData;

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <img
          src={hero.image}
          className="absolute inset-0 w-full h-full object-cover"
          alt={hero.title}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {hero.title}
            </h1>

            <p className="max-w-2xl mx-auto md:mx-0 text-lg text-neutral-200 mb-8">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-black px-8 py-3 rounded-full font-medium"
              >
                {hero.ctaPrimary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">{about.title}</h2>
            {about.description.map((t, i) => (
              <p key={i} className="text-neutral-600 mb-4">
                {t}
              </p>
            ))}
          </div>
          <img
            src={about.image}
            className="rounded-xl h-[360px] w-full object-cover"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-neutral-900 text-white">
        <StatsSection stats={stats} />
      </section>

      {/* COURSES */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-neutral-50">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* SECTION TITLE */}{" "}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16"
          >
            {" "}
            {courses.title}{" "}
          </motion.h2>{" "}
          {/* CARDS */}{" "}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {" "}
            {courses.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className=" group relative rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] "
              >
                {" "}
                {/* ICON BADGE */}{" "}
                <div className=" mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:scale-110 ">
                  {" "}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    {COURSE_ICONS[item.icon]}{" "}
                  </svg>{" "}
                </div>{" "}
                {/* CONTENT */}{" "}
                <h4 className="text-lg font-semibold mb-3 group-hover:text-black">
                  {" "}
                  {item.title}{" "}
                </h4>{" "}
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {" "}
                  {item.description}{" "}
                </p>{" "}
                {/* HOVER LINE */}{" "}
                <span className=" absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full " />{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* METHODOLOGY */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            {methodology.title}
          </h2>

          <div className="grid md:grid-cols-5 gap-10">
            {methodology.items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-28 px-6 bg-indigo-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center
               bg-white p-10 md:p-14 rounded-3xl shadow"
        >
          {/* TEXT CONTENT */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {faculty.title}
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-6">
              {faculty.description}
            </p>

            <ul className="space-y-3 text-sm text-neutral-700">
              <li>• Experienced NEET faculty with strong subject expertise</li>
              <li>• Regular mentoring & performance tracking</li>
              <li>• Focus on concept clarity and exam strategy</li>
              <li>• Dedicated doubt-clearing and revision sessions</li>
            </ul>
          </div>

          {/* FACULTY IMAGE */}
          <div className="relative">
            <img
              src={facultyImage}
              alt="Expert Faculty"
              className="rounded-2xl w-full h-[320px] object-cover"
            />

            {/* IMAGE BADGE */}
            <div
              className="
          absolute -bottom-6 left-1/2 -translate-x-1/2
          bg-black text-white px-6 py-2 rounded-full text-sm font-medium
          shadow-lg
        "
            >
              Expert Faculty Team
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-28 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-16">
            {whyChoose.title}
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.items.map((item, i) => (
              <div
                key={i}
                className="bg-neutral-800 p-7 rounded-2xl hover:-translate-y-2 transition hover:bg-neutral-700"
              >
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            {testimonials.title}
          </h2>
          <TestimonialsCard items={testimonials.items} />
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="py-28 px-6 bg-neutral-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">{finalCTA.title}</h2>

          <p className="text-neutral-400 max-w-2xl mx-auto mb-10">
            {finalCTA.subtitle}
          </p>

          <button
            onClick={() => navigate("/contact?from=neet")}
            className="bg-white text-black px-10 py-3 rounded-full font-medium"
          >
            {finalCTA.cta}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Neet;
