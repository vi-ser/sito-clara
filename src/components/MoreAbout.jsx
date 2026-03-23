import clara2 from "../assets/imgs/clara2.jpg";
export default function MoreAbout() {
  return (
    <section className="bg-primary-950 min-h-240 max-w-432 mx-auto py-40 flex flex-col lg:flex-row items-center gap-16">
      <img
        src={clara2}
        alt="Clara Nannelli"
        className="w-80 h-80 md:w-100 md:h-100 self-auto lg:self-end"
      />
      <div className="px-4 md:px-20">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-light max-w-360 text-white mb-10">
          Metto al centro la persona, la sua storia e le sue risorse, costruendo
          insieme un percorso basato su dialogo e comprensione.
        </h2>
        <p className="text-md lg:text-lg font-light max-w-120 text-white mb-12">
          Accolgo bambini, ragazzi, giovani adulti e famiglie per aiutarli a
          comprendere meglio le proprie difficoltà. Ogni persona è molto più
          della sua fatica. Il mio lavoro parte proprio da qui.
        </p>
        <a href="#contatti" className="btn-primary">
          Inizia da qui il tuo percorso
        </a>
      </div>
    </section>
  );
}
