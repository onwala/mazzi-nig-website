import SwooshSVG from '@/components/ui/SwooshSVG';
import { IconArrowRight } from '@tabler/icons-react';

const stats = [
  { value: '15+', label: 'Years in industry' },
  { value: '50+', label: 'Clients certified' },
  { value: '4', label: 'Major standards' },
  { value: '24hrs', label: 'Response time' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden dot-grid"
      style={{ background: '#0B1930', padding: '60px 32px 52px' }}
      aria-label="Hero"
    >
      <SwooshSVG variant="hero" />

      <div className="container-mnl relative z-10" style={{ padding: 0 }}>
        <div style={{ maxWidth: '620px' }}>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-sm px-3 py-1 mb-6"
            style={{
              background: 'rgba(200,150,10,0.12)',
              border: '1px solid rgba(200,150,10,0.35)',
            }}
          >
            <span
              className="font-body font-bold uppercase"
              style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#C8960A' }}
            >
              Africa's Management Systems Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black mb-5 text-white"
            style={{
              fontSize: 'clamp(36px, 6vw, 54px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Management Systems
            <br />
            <span style={{ color: '#C8960A' }}>Certification</span> That Wins
            <br />
            Contracts.
          </h1>

          {/* Sub copy */}
          <p
            className="font-body mb-8"
            style={{
              fontSize: '15px',
              lineHeight: '1.78',
              color: 'rgba(255,255,255,0.62)',
              maxWidth: '500px',
            }}
          >
            Mazzi delivers end-to-end API Q1, ISO 9001, ISO 14001, and ISO 45001
            certification support built for the upstream and midstream oil and gas
            sector across Africa.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            <a href="#contact" className="btn-amber">
              Request a Proposal
              <IconArrowRight size={15} aria-hidden="true" />
            </a>
            <a href="#services" className="btn-ghost">
              View Our Services
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span
                  className="font-display font-black"
                  style={{ fontSize: '22px', color: '#C8960A', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-body"
                  style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.04em' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
