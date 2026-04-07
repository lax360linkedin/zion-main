import { useState } from "react";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
Hello Zion Group,

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}

Message:
${form.message}
`;

    window.open(
      `https://wa.me/918778702982?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <main className="relative min-h-screen pt-20">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={contactImage}
          className="w-full h-full object-cover"
          alt="Contact"
        />
        <div className="absolute inset-0 bg-[#0b1c2c]/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        {/* LEFT CONTENT */}
        <div className="text-white space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Contact Us
            </h1>

            <p className="text-neutral-200 max-w-md">
              Have questions about Builders, NEET Coaching, or Study Abroad? Our
              team is ready to help you.
            </p>
          </div>

          {/* ADDRESS */}
          <a
            href="https://maps.google.com/?q=37/119k,Greenways Road,MR Complex,Fairlands,Salem"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
              {/* LOCATION ICON */}
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </div>

            <div>
              <p className="font-medium">Address</p>
              <p className="text-neutral-300 text-sm">
                37/119k, Greenways Road,
                <br />
                MR Complex, Fairlands,
                <br />
                Salem — 636016
              </p>
            </div>
          </a>

          {/* PHONE */}
          <a href="tel:+918778702982" className="flex items-start gap-4 group">
            <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
              {/* PHONE ICON */}
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 3.2 8.8 19.8 19.8 0 0 1 .1 0 2 2 0 0 1 2.1-2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2L6.1 5.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
              </svg>
            </div>

            <div>
              <p className="font-medium">Phone</p>
              <p className="text-neutral-300 text-sm">+91 8778702982</p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:promoterszionbuilders@gmail.com"
            className="flex items-start gap-4 group"
          >
            <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition">
              {/* MAIL ICON */}
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6 12 13 2 6" />
              </svg>
            </div>

            <div>
              <p className="font-medium">Email</p>
              <p className="text-neutral-300 text-sm">
                promoterszionbuilders@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <h3 className="text-xl font-semibold mb-6 text-neutral-800">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border-b border-neutral-300 py-2 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="w-full border-b border-neutral-300 py-2 outline-none"
            />

            <select
              name="service"
              required
              onChange={handleChange}
              className="w-full border-b border-neutral-300 py-2 outline-none"
            >
              <option value="">Select Service</option>
              <option>Builders / Real Estate</option>
              <option>NEET Coaching</option>
              <option>Study Abroad</option>
            </select>

            <textarea
              name="message"
              placeholder="Type your message..."
              rows="3"
              onChange={handleChange}
              className="w-full border-b border-neutral-300 py-2 outline-none"
            />

            <button
              type="submit"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
