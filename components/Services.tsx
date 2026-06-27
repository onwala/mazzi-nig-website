import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: '#F8FAFC' }} aria-labelledby="services-heading">
      <div className="container-mnl">
        {/* Header */}
        <div className="mb-10">
          <p
            className="font-body font-bold uppercase mb-3"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
          >
            Range of Services
          </p>
          <h2
            className="font-display font-extrabold"
            id="services-heading"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#0B1930',
            }}
          >
            Everything You Need to
            <br />
            Get — and Stay — Certified
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {services.map((service) => (
            <ServiceCard key={service.code} {...service} />
          ))}
        </div>

        {/* CTA prompt */}
        <p
          className="mt-10 font-body text-center"
          style={{ fontSize: '14px', color: '#475569' }}
        >
          Not sure which standard applies to you?{' '}
          <a
            href="#contact"
            style={{ color: '#C8960A', fontWeight: 600, textDecoration: 'underline' }}
          >
            Book a free initial consultation.
          </a>
        </p>
      </div>
    </section>
  );
}
