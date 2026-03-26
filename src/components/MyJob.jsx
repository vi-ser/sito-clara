import diary from "../assets/imgs/diario.svg";
import rocket from "../assets/imgs/rocket.svg";
import stretta from "../assets/imgs/stretta.svg";

export default function MyJob() {
  return (
    <div
      id="il-mio-lavoro"
      className="max-w-432 py-20 md:py-40 px-4 md:px-20 mx-auto"
    >
      <p className="playfair text-center text-2xl text-primary-950 mb-2">
        Il mio lavoro
      </p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl max-w-360 text-primary-950 text-center mb-10 mx-auto">
        Come posso aiutarti
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-white/85 border border-white rounded-3xl p-8 text-left shadow-2xl/10">
          <img src={diary} alt="icona diario" className="mb-4" />
          <p className="text-xl sm:text-3xl lg:text-2xl lg:font-medium xl:font-regular 2xl:font-light xl:text-3xl 2xl:text-4xl  text-primary-950 mb-10">
            Valutazioni neuropsicologiche
          </p>
          <p className="text-primary-950">
            Un percorso per comprendere meglio il funzionamento cognitivo,
            emotivo e comportamentale di bambini e ragazzi. Offre indicazioni
            utili per sostenere apprendimenti e difficoltà.
          </p>
        </div>

        <div className="bg-white/85 border border-white rounded-3xl p-8 text-left shadow-2xl/10">
          <img src={rocket} alt="icona razzo" className="mb-4" />
          <p className="text-xl sm:text-3xl lg:text-2xl lg:font-medium xl:font-regular 2xl:font-light xl:text-3xl 2xl:text-4xl  text-primary-950 mb-10">
            Percorsi di potenziamento
          </p>
          <p className="text-primary-950">
            Percorsi personalizzati per sviluppare abilità di apprendimento,
            attenzione e metodo di studio. L’obiettivo è rafforzare autonomia,
            fiducia e senso di efficacia.
          </p>
        </div>

        <div className="bg-white/85 border border-white rounded-3xl p-8 text-left shadow-2xl/10">
          <img src={stretta} alt="icona stretta di mano" className="mb-4" />
          <p className="text-xl sm:text-3xl lg:text-2xl lg:font-medium xl:font-regular 2xl:font-light xl:text-3xl 2xl:text-4xl  text-primary-950 mb-10">
            Supporto <br />
            psicologico
          </p>
          <p className="text-primary-950">
            Uno spazio di ascolto e confronto per comprendere ciò che si sta
            vivendo. Insieme lavoriamo su autostima, motivazione, ansia e
            gestione dello stress.
          </p>
        </div>
      </div>
    </div>
  );
}
