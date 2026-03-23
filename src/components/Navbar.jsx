import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-4 pt-4 md:px-16 transition-transform duration-600 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-432 items-center justify-between rounded-full border border-white/50 bg-white/35 px-4 py-4 text-start shadow-[0_12px_40px_rgba(27,37,89,0.08)] backdrop-blur-xl select-none transition-all duration-300 lg:px-6">
        <div className="font-bold text-xl lg:text-2xl text-primary-950">
          Clara Nannelli <span className="font-normal">| Psicologa</span>
        </div>
        <a
          href="#contatti"
          className="lg:hidden inline-block bg-linear-to-br from-white/60 via-white/10 to-white/60 backdrop-blur-lg border border-white px-6 py-2 rounded-full hover:scale-105 transition duration-100"
        >
          Contatti
        </a>
        <ul className="nav-links hidden lg:flex items-center gap-4 text-primary-950">
          <li>
            <a
              href="#chi-sono"
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Chi sono
            </a>
          </li>
          <li>
            <a
              href="#il-mio-lavoro"
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Il mio lavoro
            </a>
          </li>
          <li>
            <a
              href="#servizi"
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Servizi
            </a>
          </li>
          <li>
            <a
              href="#contatti"
              className="inline-block bg-linear-to-br from-white/60 via-white/10 to-white/60 backdrop-blur-lg border border-white px-6 py-2 rounded-full hover:scale-105 transition duration-100"
            >
              Contatti
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
