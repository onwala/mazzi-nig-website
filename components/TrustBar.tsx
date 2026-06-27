const standards = [
  'API Q1',
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'ISO 19011',
  'NCDMB',
  'DPR Approved',
];

export default function TrustBar() {
  return (
    <div
      className="py-4 overflow-x-auto"
      style={{ background: '#0F2347' }}
      aria-label="Standards and accreditations"
    >
      <div className="container-mnl flex items-center justify-between gap-6 min-w-max mx-auto">
        {standards.map((s, i) => (
          <span key={s} className="flex items-center gap-6">
            <span
              className="font-body font-bold uppercase whitespace-nowrap"
              style={{
                fontSize: '10px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.38)',
              }}
            >
              {s}
            </span>
            {i < standards.length - 1 && (
              <span
                aria-hidden="true"
                style={{
                  display: 'block',
                  width: '3px',
                  height: '3px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  flexShrink: 0,
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
