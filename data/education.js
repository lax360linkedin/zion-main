import heroImage from "../assets/Education/education-hero.jpeg";
import aboutImage from "../assets/Education/education-about.jpeg";
import carrier from "../assets/Education/education-carrier.jpeg";
import support from "../assets/Education/education-support.jpeg";
import university from "../assets/Education/education-university.jpeg";
import visa from "../assets/Education/education-visa.jpeg";
const educationData = {
  /* ================= HERO ================= */
  hero: {
    title: "Study Abroad with Confidence",
    subtitle:
      "End-to-end overseas education guidance for students aspiring to study in top global universities.",
    ctaPrimary: "Book Free Counselling",
    ctaSecondary: "Explore Countries",
    image: heroImage,
  },

  /* ================= ABOUT ================= */
  about: {
    title: "About Zion Abroad Education",
    description: [
      "Zion Abroad Education is an overseas education consultancy supporting students who wish to study abroad.",
      "We provide career counseling, university selection, admissions support, visa assistance, and IELTS guidance.",
    ],
    image: aboutImage,
  },

  /* ================= STATS ================= */
  stats: [
    { value: "12+", label: "Study Destinations" },
    { value: "500+", label: "Students Guided" },
    { value: "200+", label: "University Tie-Ups" },
    { value: "98%", label: "Visa Success Rate" },
  ],

  /* ================= SERVICES ================= */
  services: {
    title: "Our Study Abroad Services",
    items: [
      {
        title: "Career Counselling",
        description:
          "Personalized guidance based on academic background, interests, and long-term goals.",
        image: carrier,
      },
      {
        title: "University Selection",
        description:
          "Shortlisting universities and programs across USA, UK, Canada, Australia, and Europe.",
        image: university,
      },
      {
        title: "Application Support",
        description:
          "Complete assistance with SOPs, LORs, documentation, and application submission.",
        image: support,
      },
      {
        title: "Visa & Pre-Departure",
        description:
          "Visa filing, mock interviews, financial guidance, and pre-departure briefing.",
        image: visa,
      },
    ],
  },

  /* ================= COUNTRIES (FIXED) ================= */
  countries: {
    title: "Top Study Destinations",
    items: [
      "USA",
      "UK",
      "Canada",
      "Australia",
      "Germany",
      "Ireland",
      "France",
      "Singapore",
      "New Zealand",
      "Netherlands",
    ],
  },

  /* ================= STUDENT TRUST ================= */
  studentTrust: {
    title: "Why Our Students Trust Us",
    items: [
      {
        name: "Enoch Kailay",
        university: "University of Galway",
        feedback:
          "They supported me throughout the entire journey from admissions to visa. Highly recommended.",
        rating: 5,
      },
      {
        name: "Dharnesh Vijayakumar",
        university: "Brunel University London",
        feedback:
          "Even with a late intake, they managed everything quickly and professionally.",
        rating: 5,
      },
      {
        name: "Sanjay Kumar",
        university: "University of Birmingham",
        feedback:
          "Very transparent process and constant updates. I felt confident at every stage.",
        rating: 5,
      },
      {
        name: "Priya Natarajan",
        university: "University of Melbourne",
        feedback:
          "The counseling team helped me shortlist the right university based on my profile.",
        rating: 5,
      },
      {
        name: "Rahul Mehta",
        university: "University of Toronto",
        feedback:
          "From application to visa interview, everything was handled smoothly.",
        rating: 5,
      },
      {
        name: "Ananya Sharma",
        university: "King’s College London",
        feedback:
          "Professional guidance and fast responses. I would recommend them to anyone.",
        rating: 5,
      },
    ],
  },

  /* ================= ADMISSIONS (FIXED) ================= */
  admissions: {
    title: "End-To-End Admissions Guidance",
    items: [
      {
        title: "Expert Counselling",
        description:
          "Personalised guidance to choose the right course and university.",
        icon: "🎧",
        bg: "bg-blue-50",
      },
      {
        title: "Application Processing",
        description:
          "Hassle-free handling of applications, documents and offer letters.",
        icon: "📄",
        bg: "bg-pink-50",
      },
      {
        title: "Financial Guidance",
        description:
          "Tailored advice on tuition fees, education loans and scholarships.",
        icon: "💰",
        bg: "bg-sky-50",
      },
      {
        title: "Visa Assistance",
        description:
          "Expert support for visa filing and interview preparation.",
        icon: "🛂",
        bg: "bg-purple-50",
      },
      {
        title: "Pre-Departure Counselling",
        description:
          "Guidance on travel, accommodation and campus life abroad.",
        icon: "✈️",
        bg: "bg-indigo-50",
      },
      {
        title: "Post-Landing Support",
        description:
          "On-ground support even after students reach their destination.",
        icon: "🤝",
        bg: "bg-rose-50",
      },
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: {
    title: "Why Choose Us",
    items: [
      {
        title: "Transparent Guidance",
        description:
          "Honest counselling with no false promises or hidden charges.",
      },
      {
        title: "University-Focused Approach",
        description:
          "Program selection based on career outcomes, not commissions.",
      },
      {
        title: "Experienced Counsellors",
        description:
          "Certified counsellors with real-world overseas education expertise.",
      },
      {
        title: "End-To-End Support",
        description:
          "From counselling to campus arrival, we support every step.",
      },
    ],
  },

  /* ================= FINAL CTA ================= */
  finalCTA: {
    title: "Your Global Education Journey Starts Here",
    subtitle:
      "Connect with our counsellors and take the first step towards studying abroad.",
    cta: "Schedule Free Consultation",
  },
};

export default educationData;
