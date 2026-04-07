import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import  aboutImage  from "../assets/home/home-about.png";
import builders from "../assets/home/home-builders.png";
import neet from "../assets/home/home-neet.png";
import education from "../assets/home/home-education.png";  

const IMAGES = {
  group: aboutImage,
  builders: builders,
  neet: neet,
  education: education,
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full">
      {/* HERO */}
      <Hero />

      {/* ABOUT ZION */}
      <section className="py-24 md:py-28 px-6 bg-slate-50">
        <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center">
          <img
            src={IMAGES.group}
            alt="Zion Group"
            className="rounded-2xl w-full h-[240px] sm:h-[280px] md:h-[360px] object-cover"
          />

          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Zion Group — Building Trust Across Real Estate & Education
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Zion is a diversified group operating across real estate
              development, medical entrance coaching, and overseas education
              consultancy.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Whether it is investing in property, preparing for competitive
              examinations, or planning higher education abroad, Zion supports
              individuals and families with transparent guidance.
            </p>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="md:hidden bg-black text-white px-8 py-3 rounded-full font-medium"
            >
              Get Started
            </button>

            {/* DESKTOP BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="hidden md:inline-flex group relative h-14 items-center justify-center overflow-hidden rounded-full border-2 border-black font-medium"
            >
              <div className="inline-flex h-14 translate-x-0 items-center justify-center bg-white px-10 text-black transition-transform duration-300 group-hover:-translate-x-[150%]">
                Get Started
              </div>
              <div className="absolute inline-flex h-14 w-full translate-x-full items-center justify-center bg-black px-10 text-white transition-transform duration-300 group-hover:translate-x-0">
                Get Started
              </div>
            </button>
          </div>
        </motion.div>
      </section>

      {/* STORY SECTIONS */}
      <div className="relative">
        {/* BUILDERS */}
        <section className="relative min-h-screen lg:sticky lg:top-0 lg:h-screen bg-slate-100 px-6 py-20 md:py-0 grid place-content-center">
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center text-center md:text-left pb-16 md:pb-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Builders & Real Estate Development
              </h3>
              <p className="text-gray-700 mb-4">
                Zion develops premium residential and commercial properties with
                modern architecture and long-term value.
              </p>
              <p className="text-gray-700 mb-8">
                Projects are planned with attention to functionality,
                compliance, and sustainable growth.
              </p>

              {/* MOBILE */}
              <button
                onClick={() => navigate("/builders")}
                className="md:hidden bg-black text-white px-8 py-3 rounded-full font-medium"
              >
                Explore
              </button>

              {/* DESKTOP */}
              <button
                onClick={() => navigate("/builders")}
                className="
    hidden md:inline-flex
    group relative h-14 items-center justify-center
    overflow-hidden rounded-full
    border border-neutral-800
    font-medium tracking-wide
  "
              >
                {/* DEFAULT */}
                <div
                  className="
      inline-flex h-14 items-center justify-center
      bg-white px-10 text-neutral-900
      transition-transform duration-300 ease-out
      group-hover:-translate-x-[150%]
    "
                >
                  Explore
                </div>

                {/* HOVER */}
                <div
                  className="
      absolute inline-flex h-14 w-full items-center justify-center
      bg-gradient-to-r from-neutral-900 to-neutral-700
      px-10 text-white
      transition-transform duration-300 ease-out
      translate-x-full group-hover:translate-x-0
    "
                >
                  Explore
                </div>
              </button>
            </div>

            <img
              src={IMAGES.builders}
              alt="Builders"
              className="rounded-2xl w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
            />
          </motion.div>
        </section>
        {/* NEET */}
        <section className="relative min-h-screen lg:sticky lg:top-0 lg:h-screen bg-blue-50 px-6 py-20 md:py-0 grid place-content-center">
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center text-center md:text-left pb-16 md:pb-0">
            <img
              src={IMAGES.neet}
              alt="NEET Coaching"
              className="rounded-2xl w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
            />

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                NEET Medical Entrance Coaching
              </h3>
              <p className="text-gray-700 mb-4">
                Concept clarity, structured preparation, and disciplined
                mentoring for NEET aspirants.
              </p>
              <p className="text-gray-700 mb-8">
                Students receive exam-focused guidance and continuous academic
                support.
              </p>

              {/* MOBILE */}
              <button
                onClick={() => navigate("/neet")}
                className="md:hidden bg-black text-white px-8 py-3 rounded-full font-medium"
              >
                Explore
              </button>

              {/* DESKTOP */}
              <button
                onClick={() => navigate("/neet")}
                className="
    hidden md:inline-flex
    group relative h-14 items-center justify-center
    overflow-hidden rounded-full
    border border-neutral-800
    font-medium tracking-wide
  "
              >
                {/* DEFAULT */}
                <div
                  className="
      inline-flex h-14 items-center justify-center
      bg-white px-10 text-neutral-900
      transition-transform duration-300 ease-out
      group-hover:-translate-x-[150%]
    "
                >
                  Explore
                </div>

                {/* HOVER */}
                <div
                  className="
      absolute inline-flex h-14 w-full items-center justify-center
      bg-gradient-to-r from-neutral-900 to-neutral-700
      px-10 text-white
      transition-transform duration-300 ease-out
      translate-x-full group-hover:translate-x-0
    "
                >
                  Explore
                </div>
              </button>
            </div>
          </motion.div>
        </section>
        {/* ABROAD */}
        <section className="relative min-h-screen lg:sticky lg:top-0 lg:h-screen bg-amber-50 px-6 py-20 md:py-0 grid place-content-center">
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center text-center md:text-left pb-20 md:pb-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Overseas Education & Study Abroad
              </h3>
              <p className="text-gray-700 mb-4">
                End-to-end guidance for students planning higher education
                abroad.
              </p>
              <p className="text-gray-700 mb-8">
                University selection, applications, and visa support for global
                destinations.
              </p>

              {/* MOBILE */}
              <button
                onClick={() => navigate("/education")}
                className="md:hidden bg-black text-white px-8 py-3 rounded-full font-medium"
              >
                Explore
              </button>

              {/* DESKTOP */}
              <button
                onClick={() => navigate("/education")}
                className="
    hidden md:inline-flex
    group relative h-14 items-center justify-center
    overflow-hidden rounded-full
    border border-neutral-800
    font-medium tracking-wide
  "
              >
                {/* DEFAULT */}
                <div
                  className="
      inline-flex h-14 items-center justify-center
      bg-white px-10 text-neutral-900
      transition-transform duration-300 ease-out
      group-hover:-translate-x-[150%]
    "
                >
                  Explore
                </div>

                {/* HOVER */}
                <div
                  className="
      absolute inline-flex h-14 w-full items-center justify-center
      bg-gradient-to-r from-neutral-900 to-neutral-700
      px-10 text-white
      transition-transform duration-300 ease-out
      translate-x-full group-hover:translate-x-0
    "
                >
                  Explore
                </div>
              </button>
            </div>

            <img
              src={IMAGES.education}
              alt="Study Abroad"
              className="rounded-2xl w-full h-[220px] sm:h-[260px] md:h-[340px] object-cover"
            />
          </motion.div>
        </section>
        {/* WHY CHOOSE ZION */}
        <section className="relative min-h-screen lg:sticky lg:top-0 lg:h-screen bg-neutral-900 text-white px-6 grid place-content-center pt-20 pb-32 lg:pt-0 lg:pb-0">
          {" "}
          <motion.div className="max-w-6xl mx-auto">
            {" "}
            <h3 className="text-4xl font-bold text-center mb-16">
              {" "}
              Why Choose Zion{" "}
            </h3>{" "}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {" "}
              {[
                {
                  title: "Trusted Expertise",
                  desc: "Proven experience across real estate development and education consulting.",
                  icon: (
                    <path d="M12 3l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V7l8-4z" />
                  ),
                },
                {
                  title: "Transparent Process",
                  desc: "Clear communication, ethical practices, and structured guidance at every stage.",
                  icon: (
                    <path d="M12 8v4l3 3M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" />
                  ),
                },
                {
                  title: "Proven Outcomes",
                  desc: "Successful developments, strong academic results, and global admissions.",
                  icon: <path d="M3 12l2-2 4 4L19 4l2 2-12 12z" />,
                },
                {
                  title: "Long-Term Vision",
                  desc: "Decisions driven by sustainability, growth, and lasting value.",
                  icon: <path d="M12 6v6l4 2M4 20h16" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className=" group relative rounded-2xl border border-transparent [background: linear-gradient(#0f172a,#0f172a)_padding-box, conic-gradient( from_var(--border-angle), #38bdf8, #818cf8, #38bdf8, #0ea5e9, #38bdf8 )_border-box] animate-border transition-transform duration-300 hover:-translate-y-2 "
                >
                  {" "}
                  {/* INNER CARD */}{" "}
                  <div className="h-full rounded-2xl bg-neutral-800 p-8 text-center transition-shadow duration-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)] ">
                    {" "}
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-110 ">
                      {" "}
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        {" "}
                        {item.icon}{" "}
                      </svg>{" "}
                    </div>{" "}
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>{" "}
                    <p className="text-sm opacity-80 leading-relaxed">
                      {" "}
                      {item.desc}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </motion.div>{" "}
        </section>
      </div>
    </main>
  );
};

export default Home;
