export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-10 flex justify-between items-center max-w-432 mx-auto py-10 px-4 md:px-16 mb-10 lg:mb-0">
      <div className="font-bold text-2xl text-primary-950">
        Clara Nannelli <span className="font-normal">| Psicologa</span>
      </div>
      <ul className="nav-links flex items-center gap-4 text-primary-950">
        <li>
          <a
            href="#chi-sono"
            className="px-6 py-1.5 rounded-full border border-transparent hover:border-primary-950 hover:bg-primary-950 hover:text-white transition duration-100"
          >
            Chi sono
          </a>
        </li>
        <li>
          <a
            href="#il-mio-lavoro"
            className="px-6 py-1.5 rounded-full border border-transparent hover:border-primary-950 hover:bg-primary-950 hover:text-white transition duration-100"
          >
            Il mio lavoro
          </a>
        </li>
        <li>
          <a
            href="#servizi"
            className="px-6 py-1.5 rounded-full border border-transparent hover:border-primary-950 hover:bg-primary-950 hover:text-white transition duration-100"
          >
            Servizi
          </a>
        </li>
        <li>
          <a
            href="#contatti"
            className="inline-block bg-linear-to-br from-white/40 via-white/30 to-white/40 backdrop-blur-lg border border-white px-6 py-1.5 rounded-full hover:scale-105 transition duration-100"
          >
            Contatti
          </a>
        </li>
      </ul>
    </nav>
  );
}
