import aboutImage from "../assets/Neet/neet-about.jpeg";
import heroImage from "../assets/Neet/neet-hero.png";
import testimonialImage from "../assets/Neet/testimonial.jpeg"
import testimonialImage2 from "../assets/Neet/testimonial2.jpeg"
import testimonialImage3 from "../assets/Neet/testimonial3.jpeg"

const neetData = {
  /* ================= HERO ================= */
  hero: {
    title: "Focused NEET Coaching for Future Doctors",
    subtitle:
      "Concept-driven learning, expert faculty, and proven strategies to help students succeed in NEET.",
    ctaPrimary: "Enroll Now",
    ctaSecondary: "Book Free Counselling",
    image: heroImage,
  },

  /* ================= ABOUT ================= */
  about: {
    title: "About Our NEET Training Institute",
    description: [
      "Our NEET training institute is dedicated to helping students achieve their dream of becoming doctors. We focus on building strong conceptual foundations combined with disciplined preparation and continuous evaluation.",
      "With experienced faculty, structured study plans, and a student-centric approach, we guide aspirants through every stage of NEET preparation — from fundamentals to final revision.",
    ],
    image: aboutImage,
  },

  /* ================= STATS ================= */
  stats: [
    { value: "5000+", label: "Students Trained" },
    { value: "1200+", label: "NEET Selections" },
    { value: "10+", label: "Years of Experience" },
    { value: "95%", label: "Parent Satisfaction" },
  ],

  /* ================= COURSES ================= */
  courses: {
    title: "Our Programs",
    items: [
      {
        title: "Foundation Program",
        description: "Build strong fundamentals for early NEET aspirants.",
        icon: "foundation",
      },
      {
        title: "Crash Course",
        description: "Intensive revision and exam-focused preparation.",
        icon: "crash",
      },
      {
        title: "Repeater Batch",
        description: "Designed for students repeating NEET with higher goals.",
        icon: "repeater",
      },
      {
        title: "Integrated Program",
        description: "School + NEET preparation under one structured plan.",
        icon: "integrated",
      },
    ],
  },

  /* ================= METHODOLOGY ================= */
  methodology: {
    title: "Our Teaching Methodology",
    items: [
      {
        title: "Concept-Based Learning",
        description:
          "Strong emphasis on understanding core concepts rather than rote memorization.",
      },
      {
        title: "Daily Practice & Assignments",
        description:
          "Regular problem-solving sessions to improve speed, accuracy, and confidence.",
      },
      {
        title: "Weekly Tests & Analysis",
        description:
          "Frequent assessments with detailed performance analysis to track progress.",
      },
      {
        title: "Doubt Clearing Sessions",
        description:
          "Dedicated time for one-on-one and group doubt-solving with faculty.",
      },
      {
        title: "Personal Mentorship",
        description:
          "Individual guidance to help students manage time, stress, and exam strategy.",
      },
    ],
  },

  /* ================= FACULTY ================= */
  faculty: {
    title: "Expert Faculty & Dedicated Mentors",
    description:
      "Our faculty team consists of experienced subject experts who understand the NEET exam pattern and student psychology. Mentors work closely with students to ensure academic progress and emotional support throughout the preparation journey.",
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: {
    title: "Why Choose Our NEET Institute",
    items: [
      {
        title: "Experienced Faculty",
        description:
          "Highly qualified teachers with years of NEET coaching experience.",
      },
      {
        title: "Structured Curriculum",
        description:
          "Well-planned syllabus coverage aligned with the latest NEET pattern.",
      },
      {
        title: "Proven Results",
        description:
          "Consistent track record of student selections in top medical colleges.",
      },
      {
        title: "Individual Attention",
        description:
          "Limited batch sizes to ensure personalized guidance for every student.",
      },
    ],
  },

  /* ================= TESTIMONIALS ================= */
  testimonials: {
    title: "What Our Students Say",
    items: [
      {
        id: "neet-1",
        title: "A. Karthika",
        description:
          "The structured coaching and regular tests helped me qualify NEET with confidence.",
        image: testimonialImage,
      },
      {
        id: "neet-2",
        title: "S. Priya (Parent)",
        description:
          "The faculty provided excellent guidance and personal attention throughout the preparation.",
        image: testimonialImage2,
      },
      {
        id: "neet-3",
        title: "R. Vishnu",
        description:
          "Doubt-clearing sessions and mentoring made a huge difference in my repeat attempt.",
        image: testimonialImage3,
      },
    ],
  },

  /* ================= FINAL CTA ================= */
  finalCTA: {
    title: "Start Your NEET Journey With Confidence",
    subtitle:
      "Admissions are now open for upcoming batches. Get expert guidance and begin your preparation today.",
    cta: "Contact Us",
  },
};

export default neetData;
