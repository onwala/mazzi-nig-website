import Image from 'next/image';

/**
 * Client logo definitions.
 * - logoSrc: path under /public — replace with real logo file when available.
 * - textFallback: shown when logoSrc is null (placeholder mode).
 * - Replace logoSrc: null with the actual filename once you add logo files to /public.
 */
const clients: { name: string; logoSrc: string | null; textFallback: string }[] = [
  { name: 'Fugro',                 logoSrc: '/logo-fugro.svg',  textFallback: 'FUGRO' },
  { name: 'Jemmtex',              logoSrc: null,                textFallback: 'JEMMTEX' },
  { name: 'Lamesco',              logoSrc: null,                textFallback: 'LAMESCO' },
  { name: 'ACM',                  logoSrc: null,                textFallback: 'ACM' },
  { name: 'TECON',                logoSrc: null,                textFallback: 'TECON' },
  { name: 'Power and Energy Oil Tools', logoSrc: null,          textFallback: 'POWER & ENERGY OIL TOOLS' },
  { name: 'Mechanical Services',  logoSrc: null,                textFallback: 'MECHANICAL SERVICES' },
  { name: 'Frigate',              logoSrc: null,                textFallback: 'FRIGATE' },
  { name: 'Foisi',                logoSrc: null,                textFallback: 'FOISI' },
];

function LogoItem({ client }: { client: typeof clients[number] }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 px-8"
      style={{ height: '56px' }}
      title={client.name}
    >
      {client.logoSrc ? (
        <Image
          src={client.logoSrc}
          alt={`${client.name} logo`}
          width={110}
          height={40}
          style={{ objectFit: 'contain', filter: 'brightness(0) invert(0.55)', maxHeight: '36px' }}
          unoptimized
        />
      ) : (
        <span
          className="font-display font-bold whitespace-nowrap tracking-wide"
          style={{
            fontSize: '13px',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.28)',
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
      style={{ background: '#0B1930', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      aria-label="Clients we have worked with"
    >
      <div className="container-mnl mb-6">
        <p
          className="font-body font-bold uppercase text-center"
          style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)' }}
        >
          Trusted by leading oil and gas operators
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
        <div className="flex client-marquee">
          {/* Render twice so the loop is seamless */}
          {[...clients, ...clients].map((client, i) => (
            <LogoItem key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
