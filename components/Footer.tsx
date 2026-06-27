import Image from 'next/image';
import { IconMail, IconPhone } from '@tabler/icons-react';

const standards = ['API Q1', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'];
const servicesLinks = [
  { label: 'API Q1 Certification', href: '#services' },
  { label: 'ISO 9001 QMS', href: '#services' },
  { label: 'ISO 14001 EMS', href: '#services' },
  { label: 'ISO 45001 OH&S', href: '#services' },
  { label: 'Audit Training', href: '#services' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#060D1C' }} aria-label="Site footer">
      <div
        className="container-mnl py-12"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {/* Brand column */}
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/mazzi_logo.jpg"
                alt="Mazzi Nigeria Limited logo"
                width={30}
                height={30}
                className="rounded"
              />
              <span
                className="font-display font-bold text-white"
                style={{ fontSize: '13px' }}
              >
                Mazzi Nigeria Limited
              </span>
            </div>
            <p
              className="font-body"
              style={{
                fontSize: '13px',
                lineHeight: '1.75',
                color: 'rgba(255,255,255,0.42)',
                maxWidth: '240px',
              }}
            >
              Management Systems Consultancy, Auditing and Training.
            </p>
          </div>

          {/* Standards column */}
          <div>
            <p
              className="font-body font-bold uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}
            >
              Standards
            </p>
            <ul className="flex flex-col gap-2.5">
              {standards.map((s) => (
                <li key={s}>
                  <span
                    className="font-body"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <p
              className="font-body font-bold uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}
            >
              Services
            </p>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body transition-colors hover:text-amber-400"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p
              className="font-body font-bold uppercase mb-4"
              style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:info@mazzi-nig.com"
                  className="font-body flex items-center gap-2"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
                >
                  <IconMail size={13} aria-hidden="true" />
                  info@mazzi-nig.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348037073829"
                  className="font-body flex items-center gap-2"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}
                >
                  <IconPhone size={13} aria-hidden="true" />
                  +234 803 707 3829
                </a>
              </li>
              <li>
                <p
                  className="font-body"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6' }}
                >
                  21 Woji Road, Rumuogba<br />
                  Port Harcourt, Rivers State<br />
                  Nigeria
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-mnl py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p
            className="font-body"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)' }}
          >
            © {new Date().getFullYear()} Mazzi Nigeria Limited. All rights reserved.
          </p>
          <p
            className="font-body"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}
          >
            RC: [Obtain from client]
          </p>
        </div>
      </div>
    </footer>
  );
}
