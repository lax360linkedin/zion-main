import heroImage from "../assets/Builders/Hero.jpg";
import aboutImage from "../assets/Builders/about.jpg";
import servicesImage1 from "../assets/Builders/service1.jpg";
import commercial from "../assets/Builders/commericalservice.jpg";
import projectManagement from "../assets/Builders/projectManagementService.jpg";
import renovation from "../assets/Builders/RenovatingService.jpg";
import christina from "../assets/Testimonial/christina.jpg";
import jonas from "../assets/Testimonial/jonas-kakaroto.jpg";
import lance from "../assets/Testimonial/lance.jpg";
import y1 from "../assets/Builders/project/y1.jpeg";
import y2 from "../assets/Builders/project/y2.jpeg";
import y3 from "../assets/Builders/project/y3.jpeg";
import y4 from "../assets/Builders/project/y4.jpeg";
import y5 from "../assets/Builders/project/y5.jpeg";
import y6 from "../assets/Builders/project/y6.jpeg";
const builderData = {
  /* ================= HERO ================= */
  hero: {
    title: "Zion Builders & Promoters",
    subtitle:
      "Crafting residential, commercial, and mixed-use developments with quality construction, transparency, and timely delivery.",
    cta: "Enquire Now",
    image: heroImage,
  },

  /* ================= ABOUT ================= */
  about: {
    title: "About Zion Builders & Promoters",
    description: [
      "Zion Builders & Promoters is a trusted real estate development company specializing in residential, commercial, and mixed-use projects.",
      "Established in 2018, the company has grown steadily through customer satisfaction, ethical business practices, and innovative construction solutions.",
      "We transform ideas into well-planned living and working spaces that add long-term value for our clients and communities.",
    ],
    image: aboutImage,
  },

  /* ================= STATS ================= */
  stats: [
    { label: "Years of Experience", value: "25+" },
    { label: "Projects Completed", value: "9+" },
    { label: "Happy Customers", value: "500+" },
    { label: "Ongoing Developments", value: "4+" },
  ],

  /* ================= SERVICES ================= */
  services: {
    title: "Our Services",
    items: [
      {
        title: "Residential Construction",
        description:
          "End-to-end home construction services focused on quality, durability, and modern living.",
        image: servicesImage1,
      },
      {
        title: "Commercial Development",
        description:
          "Design and development of commercial spaces tailored for business growth.",
        image: commercial,
      },
      {
        title: "Project Management",
        description:
          "Transparent planning, execution, and timely delivery of construction projects.",
        image: projectManagement,
      },
      {
        title: "Renovation & Remodeling",
        description:
          "Transforming existing spaces with modern designs and improved functionality.",
        image: renovation,
      },
    ],
  },

  /* ================= PROJECTS ================= */
  projects: {
    title: "Yercaud Projects",
    items: [
      {
        name: "Hill & Valley View Resort Layout",
        location: "Yercaud",
        image: y1,
      },
      {
        name: "Lake View Layout",
        location: "Yercaud",
        image: y2,
      },
      {
        name: "Hill View Layout",
        location: "Yercaud",
        image: y3,
      },
      {
        name: "Semanatham Layout",
        location: "Yercaud",
        image: y4,
      },
      {
        name: "Premium Layout Development",
        location: "Yercaud",
        image: y5,
      },
       {
        name: "Premium Layout Development",
        location: "Yercaud",
        image: y6,
      },
    ],
  },

  /* ================= WHY CHOOSE ================= */
  whyChoose: {
    title: "Why Choose Zion Builders",
    items: [
      {
        title: "Quality Construction",
        description:
          "We use high-grade materials and strict quality checks at every stage.",
      },
      {
        title: "Transparent Process",
        description:
          "Clear documentation, honest pricing, and open communication.",
      },
      {
        title: "Timely Delivery",
        description:
          "Strong project planning ensures completion within committed timelines.",
      },
      {
        title: "Customer Trust",
        description:
          "Built on long-term relationships and customer satisfaction.",
      },
    ],
  },

  /* ================= TESTIMONIALS ================= */
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        id: 1,
        title: "Christina",
        description:
          "Zion Builders delivered exactly what was promised. The construction quality exceeded our expectations.",
        image: christina,
      },
      {
        id: 2,
        title: "Jonas",
        description:
          "Transparent communication and timely delivery made the experience smooth.",
        image: jonas,
      },
      {
        id: 3,
        title: "Lance",
        description:
          "Professional execution and strong project planning throughout.",
        image: lance,
      },
    ],
  },
};

export default builderData;
