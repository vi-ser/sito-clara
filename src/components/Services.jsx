import { useLayoutEffect, useRef, useState } from "react";
import clara1 from "../assets/imgs/clara-1.webp";
import clara2 from "../assets/imgs/clara-2.webp";
import clara3 from "../assets/imgs/clara-3.webp";
import clara4 from "../assets/imgs/clara-4.webp";
import clara5 from "../assets/imgs/clara-5.webp";

const accordionItems = [
  {
    title: "Valutazione",
    content:
      "La valutazione neuropsicologica aiuta a comprendere il funzionamento cognitivo, emotivo e comportamentale del bambino o del ragazzo.\n\nRappresenta un punto di partenza importante per offrire a famiglia e scuola indicazioni utili alla costruzione di percorsi personalizzati, capaci di valorizzare le risorse individuali e sostenere le aree di maggiore difficoltà.",
    img: clara1,
  },
  {
    title: "Potenziamento",
    content:
      "Propongo percorsi di potenziamento personalizzati per bambini e adolescenti.\n\nLavoriamo su lettura, scrittura, calcolo, comprensione del testo, metodo di studio, attenzione e autoregolazione, con l’obiettivo di favorire maggiore efficacia, autonomia e fiducia nelle proprie capacità.",
    img: clara2,
  },
  {
    title: "Supporto psicologico",
    content:
      "Il supporto psicologico offre uno spazio di ascolto e confronto per comprendere ciò che stai vivendo e dare significato alla tua esperienza.\n\nPuò aiutare a lavorare su autostima, motivazione, organizzazione, ansia, stress e capacità decisionali, costruendo nel tempo nuove possibilità di scelta e maggiore consapevolezza.",
    img: clara3,
  },
  {
    title: "Orientamento agli studi",
    content:
      "L’orientamento accompagna ragazzi e famiglie verso una scelta scolastica più consapevole e serena.\n\nInsieme esploriamo interessi, attitudini e possibilità formative per individuare un percorso coerente con la propria unicità, sostenendo il processo decisionale senza renderlo rigido o definitivo.",
    img: clara4,
  },
  {
    title: "Collab con le scuole",
    content:
      "Collaboro con le scuole attraverso progetti dedicati ad alunni, insegnanti e genitori.\n\nAffronto temi come emozioni, relazioni, bullismo e tecnologie, promuovendo contesti educativi più accoglienti, consapevoli e attenti all’unicità di bambini e ragazzi.",
    img: clara5,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  const [titleColumnWidth, setTitleColumnWidth] = useState(0);
  const headerRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? -1 : index));
  };

  useLayoutEffect(() => {
    const measureTitleWidth = () => {
      if (window.innerWidth < 768) {
        setTitleColumnWidth(0);
        return;
      }

      const maxWidth = headerRefs.current.reduce((width, element) => {
        if (!element) {
          return width;
        }

        return Math.max(width, Math.ceil(element.scrollWidth));
      }, 0);

      setTitleColumnWidth(maxWidth);
    };

    measureTitleWidth();

    const animationFrame = window.requestAnimationFrame(measureTitleWidth);
    window.addEventListener("resize", measureTitleWidth);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", measureTitleWidth);
    };
  }, []);

  return (
    <div className="max-w-432 py-40 px-4 md:px-20 mx-auto">
      <h2 className="playfair text-2xl text-primary-950 mb-2">Servizi</h2>
      <div className="mt-10 space-y-4">
        {accordionItems.map((item, index) => {
          const isOpen = openIndex === index;
          const desktopWidthStyle = titleColumnWidth
            ? { width: `${titleColumnWidth}px` }
            : undefined;

          return (
            <article key={item.title} className="group w-full md:w-fit">
              <div className="flex flex-col-reverse gap-8 md:flex-row md:items-stretch md:gap-8">
                <div
                  className={`overflow-hidden rounded-4xl transition-[width,height] duration-600 ease-out md:shrink-0 ${
                    isOpen
                      ? "h-80 w-full md:w-80"
                      : "h-30 w-full md:w-60 md:group-hover:w-100"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div
                  className="min-w-0 w-full md:w-auto"
                  style={desktopWidthStyle}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-start justify-between gap-6 py-2 text-left text-primary-950"
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${index}`}
                  >
                    <div
                      ref={(element) => {
                        headerRefs.current[index] = element;
                      }}
                      className="min-w-0 flex items-start gap-2 cursor-pointer"
                    >
                      <div>
                        <span className="text-sm block">{index + 1}</span>
                        <span className="block text-2xl md:whitespace-nowrap lg:text-7xl">
                          {item.title}
                        </span>
                      </div>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 48 48"
                        className={`mt-2 size-10 shrink-0 transition-transform duration-600 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M24 14v18"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="2"
                        />
                        <path
                          d="m17 25 7 7 7-7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    id={`service-panel-${index}`}
                    className={`overflow-hidden transition-[max-height,opacity,margin] duration-600 ease-out ${
                      isOpen
                        ? "mt-8 max-h-225 opacity-100"
                        : "mt-0 max-h-0 opacity-0"
                    }`}
                  >
                    <div className=" leading-relaxed text-primary-950">
                      {item.content.split("\n").map((paragraph) => (
                        <p key={paragraph} className="mb-8 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
