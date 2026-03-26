import clara from "../assets/imgs/clara.jpg";
export default function About() {
  return (
    <div id="chi-sono" className="max-w-432 py-20 md:py-40">
      <img
        src={clara}
        alt="Clara Nannelli"
        className="w-80 rounded-3xl mx-auto mb-8"
      />
      <p className="playfair text-center text-2xl text-primary-950 mb-2">
        Mi presento
      </p>
      <h2 className="text-3xl lg:text-5xl xl:text-6xl max-w-360 text-primary-950 text-center mb-10 mx-auto">
        Dott.ssa <br /> Clara Nannelli
      </h2>
      <p className="text-md lg:text-lg max-w-120 text-primary-950 mx-auto">
        Sono Clara Nannelli, psicologa iscritta all’Albo degli Psicologi e
        Psicologhe del Veneto (n. 13136). Mi sono laureata in Neuroscienze e
        Riabilitazione Neuropsicologica all’Università di Padova e ho
        approfondito i Disturbi del Neurosviluppo con un Master in
        Psicopatologia dell’Apprendimento. Attualmente mi sto specializzando in
        psicoterapia interattivo-cognitiva.
      </p>
    </div>
  );
}
