import giulia from "../assets/imgs/giulia.svg";
import luca from "../assets/imgs/luca.svg";
import sara from "../assets/imgs/sara.svg";
import marco from "../assets/imgs/marco.svg";
import elena from "../assets/imgs/elena.svg";

const reviews = [
  {
    name: "Giulia M.",
    text: "Mi sono sentita accolta fin dal primo incontro. Clara ha un modo di ascoltare molto attento e mi ha aiutata a capire meglio alcune difficoltà che stavo vivendo.",
    img: giulia,
  },
  {
    name: "Luca B.",
    text: "Il percorso di potenziamento è stato molto utile per mio figlio. Abbiamo visto miglioramenti non solo a scuola, ma anche nella sua sicurezza e autonomia.",
    img: luca,
  },
  {
    name: "Sara B.",
    text: "Un’esperienza molto positiva. Ho trovato uno spazio in cui poter parlare liberamente e mettere ordine nei miei pensieri.",
    img: sara,
  },
  {
    name: "Marco R.",
    text: "La valutazione ci ha aiutato a comprendere meglio le difficoltà di nostra figlia e a trovare strategie utili anche a scuola. Ci siamo sentiti accompagnati con grande attenzione.",
    img: marco,
  },
  {
    name: "Elena T.",
    text: "Consiglio questo percorso a chi sente il bisogno di fermarsi un momento e capire meglio se stesso. Ho trovato professionalità, ascolto e molta sensibilità.",
    img: elena,
  },
];

const items = [...reviews, ...reviews];

const stars = Array.from({ length: 5 }, (_, index) => index);

export default function Reviews() {
  return (
    <section className="max-w-432 overflow-hidden py-40 mx-auto">
      <div className="px-4 md:px-20">
        <p className="playfair text-center text-2xl text-primary-950 mb-2">
          Recensioni
        </p>
        <h2 className="text-3xl lg:text-5xl xl:text-6xl max-w-360 text-primary-950 text-center mb-14 mx-auto">
          Esperienze condivise
        </h2>
      </div>

      <div className="relative ">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24" />

        <div
          className="flex w-max gap-6 px-3"
          style={{ animation: "reviewsMarquee 30s linear infinite" }}
        >
          {items.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex min-h-92 w-[20rem] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/90 bg-white/85 p-6 text-center text-primary-950 shadow-2xl/10 md:w-lg"
              aria-hidden={index >= reviews.length}
            >
              <img
                src={review.img}
                className="w-15 h-15 mx-auto"
                alt={"foto " + review.name}
              />

              <h3 className="mt-8 text-2xl font-semibold">{review.name}</h3>

              <div
                className="mt-5 flex justify-center gap-1 text-3xl leading-none text-[#FFC83D]"
                aria-label="5 stelle su 5"
              >
                {stars.map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>

              <p className="mt-8 text-base font-normal leading-relaxed">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes reviewsMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
