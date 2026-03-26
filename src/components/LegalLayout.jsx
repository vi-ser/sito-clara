export default function LegalLayout({ title, updatedAt, children }) {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#95DEED] via-[#AFBAEC] to-[#ECB4E5] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/70 bg-white/85 p-6 text-primary-950 shadow-2xl/10 backdrop-blur-xl md:p-10">
        <a
          href="/#"
          className="mb-8 inline-flex rounded-full border border-primary-950/15 bg-white/70 px-4 py-2 text-sm transition hover:bg-white"
        >
          Torna al sito
        </a>
        <header className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-primary-950/70">
            Informativa legale
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl">{title}</h1>
          <p className="max-w-3xl text-base leading-7 text-primary-950/80">
            Ultimo aggiornamento: {updatedAt}
          </p>
        </header>
        <div className="space-y-8 text-base leading-7 text-primary-950/90">
          {children}
        </div>
      </div>
    </div>
  );
}
