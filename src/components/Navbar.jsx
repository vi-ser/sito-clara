import { useEffect, useState } from "react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(target, true, "top top");
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    let lastScrollY = 0;
    const deltaThreshold = 12;
    const hideAfter = 120;

    const handleUpdate = (self) => {
      const currentScrollY = self.scroll();
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (delta <= -deltaThreshold) {
        setIsVisible(true);
      } else if (currentScrollY > hideAfter && delta >= deltaThreshold) {
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: handleUpdate,
    });

    handleUpdate(trigger);

    return () => trigger.kill();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-16 transition-transform duration-600 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-432 items-center justify-between rounded-3xl border border-white/50 bg-white/35 px-4 py-4 text-start shadow-2xl/10 backdrop-blur-xl select-none transition-all duration-300 lg:pe-4">
        <div className="font-bold text-xl lg:text-2xl text-primary-950">
          Clara Nannelli <span className="font-normal">| Psicologa</span>
        </div>
        <a
          href="#contatti"
          onClick={(event) => handleNavClick(event, "contatti")}
          className="lg:hidden inline-block bg-linear-to-br from-white/60 via-white/10 to-white/60 backdrop-blur-lg border border-white px-6 py-2 rounded-xl hover:scale-105 transition duration-100"
        >
          Contatti
        </a>
        <ul className="nav-links hidden lg:flex items-center gap-4 text-primary-950">
          <li>
            <a
              href="#chi-sono"
              onClick={(event) => handleNavClick(event, "chi-sono")}
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Chi sono
            </a>
          </li>
          <li>
            <a
              href="#il-mio-lavoro"
              onClick={(event) => handleNavClick(event, "il-mio-lavoro")}
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Il mio lavoro
            </a>
          </li>
          <li>
            <a
              href="#servizi"
              onClick={(event) => handleNavClick(event, "servizi")}
              className="px-6 py-2 rounded-full border border-transparent hover:underline hover:underline-offset-4 hover:text-primary-950 transition duration-100"
            >
              Servizi
            </a>
          </li>
          <li>
            <a
              href="#contatti"
              onClick={(event) => handleNavClick(event, "contatti")}
              className="inline-block bg-linear-to-br from-white/60 via-white/10 to-white/60 backdrop-blur-lg border border-white px-6 py-2 rounded-xl hover:scale-105 transition duration-100"
            >
              Contatti
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
