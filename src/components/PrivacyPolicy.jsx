import LegalLayout from "./LegalLayout";

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="26 marzo 2026">
      <p>
        La presente informativa descrive il trattamento dei dati personali
        effettuato attraverso il sito web di Clara Nannelli e tramite i canali
        di contatto indicati nel sito, ai sensi del Regolamento (UE) 2016/679
        ("GDPR") e della normativa italiana applicabile.
      </p>

      <Section title="Titolare del trattamento">
        <p>
          Clara Nannelli, Psicologa, P.IVA 02458790504, iscrizione all&apos;albo
          n. 13136.
        </p>
        <p>
          Contatti:{" "}
          <a
            href="mailto:claranannelli.psi@gmail.com"
            className="underline underline-offset-4"
          >
            claranannelli.psi@gmail.com
          </a>{" "}
          -{" "}
          <a
            href="tel:+393517672286"
            className="underline underline-offset-4"
          >
            (+39) 351 76 72 286
          </a>
        </p>
      </Section>

      <Section title="Tipi di dati trattati">
        <p>Il sito, nella sua configurazione attuale, puo trattare:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            dati tecnici di navigazione, come indirizzo IP, tipo di browser,
            dispositivo, data e ora della richiesta e log di sistema;
          </li>
          <li>
            dati comunicati volontariamente dall&apos;utente contattando il
            Titolare via email, telefono o WhatsApp, come nome, recapiti e
            contenuto del messaggio;
          </li>
          <li>
            eventuali ulteriori dati personali inclusi spontaneamente
            dall&apos;utente nella richiesta di contatto.
          </li>
        </ul>
        <p>
          Si invita a non trasmettere via email o WhatsApp dati particolari non
          strettamente necessari alla gestione del primo contatto.
        </p>
      </Section>

      <Section title="Finalita e base giuridica">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            consentire la navigazione e la sicurezza del sito: esecuzione di
            misure tecniche necessarie e legittimo interesse del Titolare;
          </li>
          <li>
            rispondere a richieste di informazioni o di primo contatto: misure
            precontrattuali adottate su richiesta dell&apos;interessato oppure
            legittimo interesse a dare riscontro alle comunicazioni ricevute;
          </li>
          <li>
            adempiere a obblighi di legge, fiscali, contabili o amministrativi:
            obbligo legale.
          </li>
        </ul>
      </Section>

      <Section title="Modalita del trattamento">
        <p>
          I dati sono trattati con strumenti informatici e organizzativi adeguati
          a garantirne sicurezza, riservatezza e disponibilita, con logiche
          strettamente correlate alle finalita indicate.
        </p>
      </Section>

      <Section title="Natura del conferimento">
        <p>
          Il conferimento dei dati di navigazione necessari al funzionamento del
          sito e implicito nell&apos;uso dei protocolli Internet. Il conferimento
          dei dati inviati tramite email, telefono o WhatsApp e facoltativo, ma
          l&apos;eventuale mancato conferimento puo rendere impossibile rispondere
          alla richiesta.
        </p>
      </Section>

      <Section title="Destinatari o categorie di destinatari">
        <p>I dati possono essere trattati da:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>fornitori di servizi tecnici, hosting e manutenzione del sito;</li>
          <li>
            fornitori dei servizi di comunicazione utilizzati dall&apos;utente per
            il contatto, come provider email o WhatsApp;
          </li>
          <li>
            consulenti o soggetti che assistono il Titolare per obblighi
            amministrativi, fiscali o legali, nei limiti strettamente necessari.
          </li>
        </ul>
      </Section>

      <Section title="Trasferimento di dati verso Paesi terzi">
        <p>
          Alcuni fornitori tecnici o di comunicazione potrebbero trattare dati
          al di fuori dello Spazio Economico Europeo. In tali casi il trattamento
          avviene nel rispetto degli articoli 44 e seguenti del GDPR, adottando,
          ove necessario, garanzie adeguate.
        </p>
      </Section>

      <Section title="Periodo di conservazione">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            i dati tecnici di navigazione sono conservati per il tempo
            strettamente necessario al funzionamento, alla sicurezza e alla
            gestione tecnica del sito;
          </li>
          <li>
            i dati trasmessi per richieste di contatto sono conservati per il
            tempo necessario a gestire la richiesta e, successivamente, per il
            periodo richiesto da eventuali obblighi di legge o per la tutela dei
            diritti del Titolare.
          </li>
        </ul>
      </Section>

      <Section title="Diritti dell&apos;interessato">
        <p>
          Nei casi previsti dagli articoli 15 e seguenti del GDPR, l&apos;utente
          puo chiedere accesso, rettifica, cancellazione, limitazione del
          trattamento, opposizione e portabilita dei dati, nonche revocare un
          eventuale consenso gia prestato, senza pregiudicare la liceita del
          trattamento precedente alla revoca.
        </p>
        <p>
          L&apos;interessato ha inoltre diritto di proporre reclamo al Garante per
          la protezione dei dati personali.
        </p>
      </Section>

      <Section title="Come esercitare i diritti">
        <p>
          Per esercitare i propri diritti o chiedere chiarimenti sul trattamento
          dei dati personali e possibile scrivere a{" "}
          <a
            href="mailto:claranannelli.psi@gmail.com"
            className="underline underline-offset-4"
          >
            claranannelli.psi@gmail.com
          </a>
          .
        </p>
      </Section>

      <Section title="Aggiornamenti">
        <p>
          La presente informativa puo essere aggiornata in caso di modifiche al
          sito, ai trattamenti svolti o alla normativa applicabile. Gli utenti
          sono invitati a consultarla periodicamente.
        </p>
      </Section>
    </LegalLayout>
  );
}
