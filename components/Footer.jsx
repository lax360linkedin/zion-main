import { useNavigate } from "react-router-dom";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/zionbuilderspromoterss?igsh=MXgzNHBsdjJkbG81dw==",
    color: "#E1306C",
    icon: (
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.54 4 20 5.46 20 7.75v8.5c0 2.29-1.46 3.75-3.75 3.75h-8.5C5.46 20 4 18.54 4 16.25v-8.5C4 5.46 5.46 4 7.75 4zm8.75 1.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587302034127",
    color: "#1877F2",
    icon: (
      <path d="M13.5 22v-8h2.5l.5-3h-3V9c0-.87.25-1.5 1.5-1.5H16V5.1c-.26-.03-1.15-.1-2.18-.1-2.16 0-3.64 1.32-3.64 3.75V11H8v3h2.18v8h3.32z" />
    ),
  },
];

const Footer = () => {
  const navigate = useNavigate();

  const address = "37/119k Greenways road MR complex Fairlands Salem";

  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;

  const whatsappMessage = encodeURIComponent(
    "Hello Zion Group, I would like to enquire about your services.",
  );

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Zion Builders & Promoters
          </h3>
          <p className="text-sm text-neutral-400">
            Real estate development, NEET coaching, and overseas education
            consultancy under Zion Group.
          </p>
        </div>

        {/* QUICK LINKS */}
        <ul className="space-y-3 text-sm text-neutral-400">
          {[
            { label: "Home", path: "/" },
            { label: "Real Estate", path: "/builders" },
            { label: "NEET Coaching", path: "/neet" },
            { label: "Study Abroad", path: "/education" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.label}
              onClick={() => navigate(item.path)}
              className="cursor-pointer"
            >
              <span className="hover:text-white transition">{item.label}</span>
            </li>
          ))}
        </ul>

        {/* SOCIAL (UPDATED) */}
        <div>
          <h4 className="font-medium mb-4">Connect With Us</h4>

          <div className="space-y-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = social.color)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {social.icon}
                </svg>

                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-medium mb-4">Contact</h4>

          <ul className="text-sm text-neutral-400 space-y-3">
            <li>
              <a href={mapLink} target="_blank" className="hover:text-white">
                📍 Salem Office Location
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/918778702982?text=${whatsappMessage}`}
                target="_blank"
                className="hover:text-white"
              >
                📞 D.K Samson — 8778702982
              </a>
            </li>

            <li>
              <a
                href="mailto:promoterszionbuilders@gmail.com"
                className="hover:text-white"
              >
                ✉️ promoterszionbuilders@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-950 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Zion Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
