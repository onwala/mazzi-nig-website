import SwooshSVG from '@/components/ui/SwooshSVG';
import { IconArrowRight } from '@tabler/icons-react';

export default function CTABand() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: 'linear-gradient(135deg, #0B1930 0%, #0F2347 100%)' }}
      aria-labelledby="cta-heading"
    >
      <SwooshSVG variant="cta" />

      <div className="container-mnl relative z-10 text-center">
        <p
          className="font-body font-bold uppercase mb-4"
          style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
        >
          Ready to Get Certified?
        </p>
        <h2
          id="cta-heading"
          className="font-display font-black text-white mx-auto mb-5"
          style={{
            fontSize: 'clamp(28px, 5vw, 46px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            maxWidth: '640px',
          }}
        >
          Let us Build Your
          <span style={{ color: '#C8960A' }}> Certification Roadmap</span>
        </h2>
        <p
          className="font-body mx-auto mb-8"
          style={{
            fontSize: '15px',
            lineHeight: '1.75',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '480px',
          }}
        >
          Send us your enquiry today and receive a tailored proposal within{' '}
          <strong style={{ color: 'rgba(255,255,255,0.9)' }}>24 hours</strong>.
          No commitment required.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-amber">
            Request a Proposal
            <IconArrowRight size={15} aria-hidden="true" />
          </a>
          <a href="tel:+2348037073829" className="btn-ghost">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
