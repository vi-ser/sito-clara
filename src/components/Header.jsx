import plant from "../assets/imgs/plant.png";
import About from "./About";

export default function Header() {
  return (
    <header className="max-w-432 text-center mx-auto px-4 overflow-x-hidden">
      <div className="gradient-container relative">
        <div className="py-20 md:py-40">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl max-w-360 text-primary-950 text-center mb-12 mx-auto">
            Uno spazio per capire, crescere, scegliere.
          </h1>
          <p className="text-xl lg:text-2xl text-primary-950 max-w-200 mx-auto mb-12">
            Un percorso costruito insieme, per conoscere meglio te stessə e
            valorizzare la tua unicità.
          </p>
          <img
            src={plant}
            alt="pianta"
            className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 opacity-80"
          />
          <div className="flex flex-col md:flex-row justify-center text-lg lg:text-xl items-center gap-6">
            {/* <a
            href="#"
            className="bg-primary-700 text-white py-4 px-6 rounded-full hover:bg-primary-900 transition-colors"
          >
            Prenota una consulenza
          </a> */}
            <a
              href="#"
              className="bg-linear-to-br from-white/60 via-white/10 to-white/60 backdrop-blur-lg border border-white py-4 px-6 rounded-full hover:bg-white/60 transition duration-200"
            >
              Scopri di più
            </a>
          </div>
        </div>
      </div>
      <About />
    </header>
  );
}
