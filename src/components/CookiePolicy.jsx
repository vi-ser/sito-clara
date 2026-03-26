import LegalLayout from "./LegalLayout";

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl">{title}</h2>
      {children}
    </section>
  );
}

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="26 marzo 2026">
      <p>
        Questa cookie policy descrive l&apos;uso dei cookie e di tecnologie
        analoghe da parte del sito di Clara Nannelli.
      </p>

      <Section title="Cosa sono i cookie">
        <p>
          I cookie sono piccoli file di testo che i siti visitati possono salvare
          sul dispositivo dell&apos;utente per garantire funzionalita tecniche,
          sicurezza, analisi o finalita di profilazione.
        </p>
      </Section>

      <Section title="Cookie utilizzati da questo sito">
        <p>
          In base alla configurazione attuale del sito, non risultano installati
          cookie di profilazione, marketing o strumenti di analytics di terze
          parti lato client.
        </p>
        <p>
          Possono essere utilizzati soltanto cookie tecnici o strumenti analoghi
          strettamente necessari al funzionamento del sito, alla sicurezza della
          navigazione o all&apos;erogazione del servizio richiesto dall&apos;utente.
        </p>
      </Section>

      <Section title="Cookie di terze parti">
        <p>
          I link presenti nel sito verso servizi esterni, come email, telefono o
          WhatsApp, non installano di per se cookie di profilazione su questo
          sito. Eventuali trattamenti successivi effettuati dai relativi servizi
          sono disciplinati dalle rispettive informative privacy e cookie.
        </p>
      </Section>

      <Section title="Gestione del consenso">
        <p>
          Poiche nella configurazione attuale sono impiegati soltanto strumenti
          tecnici necessari, non e richiesto un banner di consenso per finalita
          di profilazione o analytics non anonimizzati.
        </p>
        <p>
          Se in futuro verranno introdotti cookie o strumenti di tracciamento non
          tecnici, questa policy e gli eventuali meccanismi di raccolta del
          consenso dovranno essere aggiornati prima della loro attivazione.
        </p>
      </Section>

      <Section title="Come disabilitare i cookie">
        <p>
          L&apos;utente puo gestire o disabilitare i cookie dalle impostazioni del
          proprio browser. La disattivazione dei cookie tecnici potrebbe
          compromettere il corretto funzionamento del sito.
        </p>
      </Section>

      <Section title="Contatti">
        <p>
          Per informazioni sul trattamento dei dati personali e possibile
          consultare la{" "}
          <a href="/#/privacy-policy" className="underline underline-offset-4">
            Privacy Policy
          </a>{" "}
          oppure scrivere a{" "}
          <a
            href="mailto:claranannelli.psi@gmail.com"
            className="underline underline-offset-4"
          >
            claranannelli.psi@gmail.com
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
