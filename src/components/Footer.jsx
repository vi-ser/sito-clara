import whatsapp from "../assets/imgs/whatsapp.svg";
import mail from "../assets/imgs/mail.svg";
import phone from "../assets/imgs/phone.svg";
import viserlogo from "../assets/imgs/viser-studio.svg";

export default function Footer() {
  return (
    <footer id="contatti" className="px-4 pb-4 md:px-4">
      <div className="mx-auto flex flex-col-reverse gap-8 md:flex-row max-w-432 items-start justify-between rounded-t-3xl bg-white/85 border border-white p-4  sm:p-8">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <p className="text-xl font-light text-primary-950 mb-8">
            Ogni percorso inizia da una domanda o da un dubbio. Contattami per
            capire insieme da dove partire.
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="tel:+393517672286"
                className="flex items-center gap-2 text-primary-950"
              >
                <img src={phone} className="w-4 h-4" />
                (+39) 351 76 72 286
              </a>
            </li>
            <li>
              <a
                href="mailto:claranannelli.psi@gmail.com"
                className="flex items-center gap-2 text-primary-950"
              >
                <img src={mail} className="w-4 h-4" />
                claranannelli.psi@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/393517672286"
                className="flex items-center gap-2 text-primary-950"
              >
                <img src={whatsapp} className="w-4 h-4" />
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <p className="font-bold text-2xl text-primary-950 mb-4">
            Clara Nannelli <br></br>Psicologa
          </p>
          <ul className="flex gap-4">
            <li>
              <a href="/#/privacy-policy" className="text-primary-950">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/#/cookie-policy" className="text-primary-950">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#ECB4E5] mx-auto max-w-432 rounded-b-3xl px-2 py-4 md:py-2 ">
        <ul className="grid grid-cols-1 justify-items-center gap-2 text-center md:grid-cols-2 lg:grid-cols-4">
          <li>©2026 Clara Nannelli</li>
          <li>P.IVA 02458790504</li>
          <li>Iscrizione all’albo n.13136</li>
          <li className="flex justify-center">
            <a target="_blank" href="https://viserstudio.com/">
              <img src={viserlogo} alt="viser studio" className="h-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
