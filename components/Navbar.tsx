'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconX, IconMenu2 } from '@tabler/icons-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{ background: '#0B1930' }}
      aria-label="Main navigation"
    >
      <div className="container-mnl flex items-center justify-between" style={{ height: '60px' }}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label="Mazzi Nigeria Limited — home">
          <Image
            src="/mazzi_logo.jpg"
            alt="Mazzi Nigeria Limited logo"
            width={34}
            height={34}
            className="rounded"
            priority
          />
          <span
            className="font-display font-bold text-white leading-tight hidden sm:block"
            style={{ fontSize: '14px', letterSpacing: '0.01em' }}
          >
            Mazzi Nigeria Limited
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-medium transition-colors duration-150"
              style={{
                fontSize: '13px',
                letterSpacing: '0.01em',
                color: 'rgba(255,255,255,0.72)',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E8B020')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.72)')}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-amber" style={{ padding: '8px 18px' }}>
            Request a Proposal
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-white"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 flex flex-col"
          style={{ background: '#0B1930', top: '60px' }}
        >
          <div className="container-mnl flex flex-col gap-2 pt-8 pb-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body font-medium text-white py-3 border-b"
                style={{
                  fontSize: '16px',
                  borderColor: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.8)',
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-amber mt-6 justify-center"
              onClick={() => setOpen(false)}
            >
              Request a Proposal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
