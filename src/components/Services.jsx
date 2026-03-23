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
      "La valutazione neuropsicologica permette di comprendere il funzionamento cognitivo, emotivo e comportamentale del bambino o del ragazzo.\n\nRappresenta un punto di partenza fondamentale che può offrire alla famiglia e alla scuola indicazioni utili alla costruzione di percorsi didattici personalizzati, orientati a valorizzare le risorse individuali e a sostenere le aree di maggiore difficoltà.\n\nIndividuare un Disturbo Specifico dell’Apprendimento o un Disturbo da Deficit di Attenzione e Iperattività (ADHD) costituisce il primo passo verso una quotidianità più consapevole e serena, favorendo interventi mirati e personalizzati sui bisogni del singolo.",
    img: clara1,
  },
  {
    title: "Potenziamento",
    content:
      "Propongo percorsi di potenziamento personalizzati per bambini e adolescenti. Lavoriamo su: \n-abilità di lettura, scrittura e calcolo \n-comprensione del testo \n-metodo di studio \n-attenzione e autoregolazione \nIl potenziamento non è solo “allenamento scolastico”: significa aiutare il ragazzo a sperimentare maggiore efficacia, autonomia e fiducia nelle proprie capacità. \nIl lavoro coinvolge anche famiglia e scuola, perché quando adulti e professionisti collaborano, il percorso diventa più solido e coerente nel tempo.",
    img: clara2,
  },
  {
    title: "Supporto psicologico",
    content:
      "La crescita personale può riguardare qualsiasi aspetto della persona su cui sente il bisogno di lavorare: il rafforzamento dell’autostima, della motivazione, capacità decisionali e organizzative, lo di una comunicazione efficace, la gestione di ansia e stress.\nIl supporto psicologico è uno strumento che apre possibilità: uno spazio in cui esplorare la tua storia, comprendere ciò che stai vivendo, costruire nuove direzioni e possibilità di scelta. Attraverso la narrazione, l’ascolto, lo scambio di significati e lo sviluppo di un pensiero su di essi. \nOgni percorso è unico, proprio per questo non è mai predefinito; allo stesso tempo, ci sono alcune tappe fondamentali che ne garantiscono la struttura, la direzione e l’efficacia.",
    img: clara3,
  },
  {
    title: "Orientamento agli studi",
    content:
      "Scegliere il proprio futuro può essere complesso, soprattutto in un contesto ricco di opportunità formative che, se da un lato offrono libertà, dall’altro possono generare confusione e smarrimento. \nL’orientamento nasce per accompagnare ragazzi e famiglie verso una scelta più consapevole e serena. Insieme è possibile esplorare interessi, attitudini e desideri, aiutando i ragazzi a riconoscere le proprie risorse e a immaginare progettualità future, individuando un percorso affine alla propria unicità. \nUn percorso possibile: non definitivo né vincolante. \nIl lavoro di orientamento coinvolge sia i ragazzi, sia i genitori, offrendo loro uno spazio di confronto per conoscere, insieme ai figli, le diverse opportunità formative presenti sul territorio, e sostenere il processo decisionale in modo condiviso.",
    img: clara4,
  },
  {
    title: "Collab con le scuole",
    content:
      "Entrare nelle scuole significa entrare direttamente nel principale contesto di vita di bambini e ragazzi, diventando parte del loro contesto. \nVivo l’intervento nelle scuole come un’esperienza di arricchimento reciproco: per gli alunni, che trovano uno spazio di confronto e arricchimento su tematiche che attraversano la loro quotidianità (come le emozioni, le relazioni sociali, il bullismo, l’uso delle nuove tecnologie); per me, che mi metto in relazione con nuove generazioni, nuove idee e nuovi punti di vista. \nQuando i progetti sono rivolti a genitori e insegnanti, l’obiettivo si amplia, mirando alla costruzione di contesti educativi in cui bambini e ragazzi possano sentirsi accolti, riconosciuti e valorizzati nella loro unicità. \nOltre a informare ed educare su tematiche specifiche, l’intervento diventa uno spazio per interrogarsi sulla complessità e sulla ricchezza che abitano il contesto scolastico, per accogliere e comprendere ciò che talvolta spaventa o disorienta, anziché giudicarlo o semplificarlo.",
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
              <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-8">
                <div
                  className={`overflow-hidden rounded-4xl transition-[width,height] duration-600 ease-out md:shrink-0 ${
                    isOpen
                      ? "h-100 w-full md:w-100"
                      : "h-30 w-full md:w-60 md:group-hover:w-100"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
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
                    <div className="text-lg leading-relaxed text-primary-950">
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
