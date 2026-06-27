import { IconCheck } from '@tabler/icons-react';

const checkPoints = [
  'Dedicated to the upstream and midstream oil and gas sector across Africa',
  'Deep knowledge of local regulatory and content compliance requirements',
  'Proven methodology that minimises disruption to your operations',
  'Long-term partnership approach, staying engaged beyond certification day',
];

const credentials = [
  {
    bg: '#0B1930',
    color: '#fff',
    category: 'Standard Expertise',
    items: ['API Q1 (9th Edition)', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
  },
  {
    bg: '#F1F5F9',
    color: '#334155',
    category: 'Sector Experience',
    items: ['Upstream exploration support', 'Well services and OFS companies', 'Fabrication and manufacturing', 'EPC contractors'],
  },
  {
    bg: '#E8EFFA',
    color: '#334155',
    category: 'Regulatory Familiarity',
    items: ['National content compliance', 'Environmental permit processes', 'Vendor qualification systems', 'HSE regulatory requirements'],
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white" aria-labelledby="about-heading">
      <div className="container-mnl">
        <div
          className="grid gap-14"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Left copy */}
          <div>
            <p
              className="font-body font-bold uppercase mb-3"
              style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
            >
              Company Profile
            </p>
            <h2
              id="about-heading"
              className="font-display font-extrabold mb-5"
              style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#0B1930',
              }}
            >
              Built for Africa's
              <br />
              Energy Industry
            </h2>
            <p
              className="font-body mb-4"
              style={{ fontSize: '15px', lineHeight: '1.78', color: '#475569' }}
            >
              Mazzi Nigeria Limited is a management systems consultancy
              headquartered in Port Harcourt, specialising in QMS, EMS, and OH&S
              implementations for companies operating across Africa's oil and gas
              sector.
            </p>
            <p
              className="font-body mb-8"
              style={{ fontSize: '15px', lineHeight: '1.78', color: '#475569' }}
            >
              Our consultants bring decades of combined experience navigating
              international standards alongside the regulatory frameworks of African
              energy markets, from initial gap analysis through to successful
              certification and ongoing surveillance support.
            </p>

            {/* Check list */}
            <ul className="flex flex-col gap-3.5">
              {checkPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <IconCheck
                    size={16}
                    className="shrink-0 mt-0.5"
                    style={{ color: '#C8960A' }}
                    aria-hidden="true"
                  />
                  <span className="font-body" style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right credential panels */}
          <div className="flex flex-col gap-4">
            {credentials.map((panel) => (
              <div
                key={panel.category}
                className="rounded-sm p-5"
                style={{ background: panel.bg }}
              >
                <p
                  className="font-body font-bold uppercase mb-3"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    color: panel.color === '#fff' ? 'rgba(255,255,255,0.45)' : '#94A3B8',
                  }}
                >
                  {panel.category}
                </p>
                <ul className="flex flex-col gap-2">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="shrink-0 rounded-full"
                        aria-hidden="true"
                        style={{
                          width: '5px',
                          height: '5px',
                          background: '#C8960A',
                          marginTop: '1px',
                        }}
                      />
                      <span
                        className="font-body"
                        style={{
                          fontSize: '13px',
                          lineHeight: '1.5',
                          color: panel.color === '#fff' ? 'rgba(255,255,255,0.82)' : '#334155',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
