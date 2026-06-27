import Image from 'next/image';

/**
 * Client logos — replace logoSrc: null + textFallback with a real file
 * once you add it to /public (e.g. logo-mechanical.png).
 */
const clients: { name: string; logoSrc: string | null; textFallback: string; width: number }[] = [
  { name: 'Fugro',                      logoSrc: '/logo-fugro.svg',    textFallback: 'FUGRO',               width: 110 },
  { name: 'Jemmtex Resources',          logoSrc: '/logo-jemmtex.png',  textFallback: 'JEMMTEX',             width: 120 },
  { name: 'Lamesco',                    logoSrc: '/logo-lamesco.png',  textFallback: 'LAMESCO',             width: 130 },
  { name: 'ACM',                        logoSrc: '/logo-acm.png',      textFallback: 'ACM',                 width: 110 },
  { name: 'TECON Oil Services',         logoSrc: '/logo-tecon.png',    textFallback: 'TECON',               width: 110 },
  { name: 'Power and Energy Oil Tools', logoSrc: '/logo-pande.png',    textFallback: 'POWER & ENERGY',      width: 130 },
  { name: 'Mechanical Services',        logoSrc: null,                 textFallback: 'MECHANICAL SERVICES', width: 140 },
  { name: 'Frigate Upstream',           logoSrc: '/logo-frigate.png',  textFallback: 'FRIGATE',             width: 120 },
  { name: 'Foisi Global',               logoSrc: '/logo-foisi.png',    textFallback: 'FOISI',               width: 100 },
];

function LogoItem({ client }: { client: typeof clients[number] }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 px-10"
      style={{ height: '64px' }}
      title={client.name}
    >
      {client.logoSrc ? (
        <Image
          src={client.logoSrc}
          alt={`${client.name} logo`}
          width={client.width}
          height={48}
          style={{
            objectFit: 'contain',
            maxHeight: '40px',
            width: 'auto',
            filter: 'grayscale(100%) opacity(0.55)',
            transition: 'filter 0.25s ease',
          }}
          className="client-logo"
          unoptimized
        />
      ) : (
        <span
          className="font-display font-bold whitespace-nowrap"
          style={{
            fontSize: '12px',
            letterSpacing: '0.08em',
            color: '#94A3B8',
          }}
        >
          {client.textFallback}
        </span>
      )}
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section
      className="py-10 overflow-hidden"
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
      aria-label="Clients we have worked with"
    >
      <div className="container-mnl mb-7">
        <p
          className="font-body font-bold uppercase text-center"
          style={{ fontSize: '10px', letterSpacing: '0.14em', color: '#94A3B8' }}
        >
          Trusted by leading oil and gas operators
        </p>
      </div>

      {/* Marquee track */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="flex client-marquee">
          {[...clients, ...clients].map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
