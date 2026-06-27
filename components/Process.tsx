import ProcessStepCard from '@/components/ui/ProcessStep';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{ background: '#0B1930' }}
      aria-labelledby="process-heading"
    >
      <div className="container-mnl">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="font-body font-bold uppercase mb-3"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
          >
            How We Work
          </p>
          <h2
            id="process-heading"
            className="font-display font-extrabold text-white"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Our Proven
            <span style={{ color: '#C8960A' }}> 5-Step</span> Process
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
        >
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {/* Connector line (desktop only) */}
              {index < processSteps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute hidden lg:block"
                  style={{
                    top: '22px',
                    left: 'calc(50% + 22px)',
                    right: 'calc(-50% + 22px)',
                    height: '1px',
                    background: 'rgba(200,150,10,0.2)',
                  }}
                />
              )}
              <ProcessStepCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
