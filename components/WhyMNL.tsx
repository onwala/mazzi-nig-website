import {
  IconBuildingFactory2,
  IconTrophy,
  IconHeadset,
  IconGlobe,
} from '@tabler/icons-react';

const points = [
  {
    icon: IconBuildingFactory2,
    title: 'Industry Expertise',
    body: 'Our consultants have worked inside oil and gas operations, not just around them. We understand the real-world pressures your QA and HSE teams face on site.',
  },
  {
    icon: IconTrophy,
    title: 'Proven Track Record',
    body: 'Dozens of companies across the continent have achieved first-time certification success with Mazzi, across API Q1, ISO 9001, ISO 14001, and ISO 45001.',
  },
  {
    icon: IconHeadset,
    title: 'End-to-End Support',
    body: 'We stay with you from the first gap assessment through to certification and beyond, including surveillance audit support and annual continual improvement reviews.',
  },
  {
    icon: IconGlobe,
    title: 'Pan-African Reach',
    body: 'Headquartered in Port Harcourt with a growing presence across the continent. We understand the regulatory and operational landscape of Africa\'s energy markets inside out.',
  },
];

export default function WhyMNL() {
  return (
    <section
      className="section-pad"
      style={{ background: '#F1F5F9' }}
      aria-labelledby="why-heading"
    >
      <div className="container-mnl">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <p
            className="font-body font-bold uppercase mb-3"
            style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
          >
            Why Mazzi
          </p>
          <h2
            id="why-heading"
            className="font-display font-extrabold"
            style={{
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#0B1930',
            }}
          >
            The Consultancy That
            <br />
            Speaks Your Language
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {points.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-4">
              <div
                className="flex items-center justify-center rounded"
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(200,150,10,0.1)',
                }}
              >
                <Icon size={26} style={{ color: '#C8960A' }} aria-hidden="true" />
              </div>
              <h3
                className="font-display font-bold"
                style={{ fontSize: '18px', color: '#0B1930', lineHeight: 1.2 }}
              >
                {title}
              </h3>
              <p
                className="font-body"
                style={{ fontSize: '13px', color: '#475569', lineHeight: '1.75' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
