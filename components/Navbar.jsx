import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const servicePaths = ["/builders", "/neet", "/education"];
  const isServiceActive = servicePaths.includes(pathname);

  const navigateAndClose = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const NavItem = ({ label, path }) => {
    const isActive = pathname === path;

    return (
      <li onClick={() => navigateAndClose(path)} className="cursor-pointer">
        <span
          className={`
            relative pb-1 transition-colors
            ${
              scrolled
                ? "text-black hover:text-black/70"
                : "text-white hover:text-white/80"
            }
            after:absolute after:left-0 after:bottom-0
            after:h-[2px] after:w-full
            ${scrolled ? "after:bg-black" : "after:bg-white"}
            ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
            after:origin-left after:transition-transform
          `}
        >
          {label}
        </span>
      </li>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur border-b border-black/10"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO + BRAND */}
        <div
          onClick={() => navigateAndClose("/")}
          className="cursor-pointer flex items-center "
        >
          <img
            src="/favicon.png"
            alt="Zion Group"
            className="h-20 md:h-25 w-auto object-contain"
          />

          <span
            className={`text-lg md:text-xl text-center pt-1 font-semibold tracking-tight
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            Zion Group
          </span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          <NavItem label="Home" path="/" />

          {/* SERVICES */}
          <li ref={dropdownRef} className="relative">
            <span
              onClick={() => setDropdownOpen((v) => !v)}
              className={`
                cursor-pointer relative pb-1 transition-colors
                ${
                  scrolled
                    ? "text-black hover:text-black/70"
                    : "text-white hover:text-white/80"
                }
                after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-full
                ${scrolled ? "after:bg-black" : "after:bg-white"}
                ${
                  dropdownOpen || isServiceActive
                    ? "after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:origin-left after:transition-transform
              `}
            >
              Services
            </span>

            {dropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-2xl bg-white shadow-xl border border-black/10">
                <ul className="p-3 text-sm text-neutral-800">
                  <li
                    onClick={() => navigateAndClose("/builders")}
                    className="px-4 py-3 rounded-xl hover:bg-neutral-100 cursor-pointer"
                  >
                    Zion Builders
                  </li>
                  <li
                    onClick={() => navigateAndClose("/neet")}
                    className="px-4 py-3 rounded-xl hover:bg-neutral-100 cursor-pointer"
                  >
                    NEET Coaching
                  </li>
                  <li
                    onClick={() => navigateAndClose("/education")}
                    className="px-4 py-3 rounded-xl hover:bg-neutral-100 cursor-pointer"
                  >
                    Study Abroad
                  </li>
                </ul>
              </div>
            )}
          </li>

          <NavItem label="Contact" path="/contact" />
        </ul>

        {/* CTA */}
        <button
          onClick={() => navigateAndClose("/contact")}
          className={`hidden md:inline-flex rounded-full px-6 py-2 font-medium transition
            ${scrolled ? "bg-black text-white" : "bg-white text-black"}
          `}
        >
          Get Started
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <ul className="px-6 py-6 space-y-4 text-sm font-medium text-neutral-800">
            <li onClick={() => navigateAndClose("/")}>Home</li>
            <li onClick={() => navigateAndClose("/builders")}>Zion Builders</li>
            <li onClick={() => navigateAndClose("/neet")}>NEET Coaching</li>
            <li onClick={() => navigateAndClose("/education")}>Study Abroad</li>
            <li onClick={() => navigateAndClose("/contact")}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
