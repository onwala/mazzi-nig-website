'use client';

import { useState, FormEvent } from 'react';
import { IconPhone, IconMail, IconMapPin, IconUser, IconArrowRight } from '@tabler/icons-react';
import { contactDetails, serviceOptions } from '@/data/contact';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('loading');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormState('success');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  return (
    <section id="contact" className="section-pad bg-white" aria-labelledby="contact-heading">
      <div className="container-mnl">
        <div
          className="grid gap-16"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {/* Form column */}
          <div>
            <p
              className="font-body font-bold uppercase mb-3"
              style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
            >
              Get in Touch
            </p>
            <h2
              id="contact-heading"
              className="font-display font-extrabold mb-2"
              style={{
                fontSize: 'clamp(26px, 4vw, 36px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                color: '#0B1930',
              }}
            >
              Request a Proposal
            </h2>
            <p className="font-body mb-8" style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
              Describe your project and we'll respond with a tailored proposal within{' '}
              <strong style={{ color: '#0B1930' }}>24 hours</strong>.
            </p>

            {formState === 'success' ? (
              <div
                className="rounded-sm p-5 text-center"
                style={{ background: '#F0FDF4', border: '1px solid #86EFAC' }}
              >
                <p className="font-body font-bold" style={{ color: '#166534', fontSize: '15px' }}>
                  Proposal request received!
                </p>
                <p className="font-body mt-1" style={{ color: '#166534', fontSize: '13px' }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Email row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="font-body font-medium"
                      style={{ fontSize: '12px', color: '#334155' }}
                    >
                      Full Name <span aria-hidden="true" style={{ color: '#C8960A' }}>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="rounded-sm px-3 py-2.5 font-body outline-none border"
                      style={{
                        fontSize: '13px',
                        borderColor: '#CBD5E1',
                        color: '#334155',
                        transition: 'border-color 0.15s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C8960A')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="font-body font-medium"
                      style={{ fontSize: '12px', color: '#334155' }}
                    >
                      Email Address <span aria-hidden="true" style={{ color: '#C8960A' }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="rounded-sm px-3 py-2.5 font-body outline-none border"
                      style={{
                        fontSize: '13px',
                        borderColor: '#CBD5E1',
                        color: '#334155',
                        transition: 'border-color 0.15s',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#C8960A')}
                      onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5 mb-4">
                  <label
                    htmlFor="company"
                    className="font-body font-medium"
                    style={{ fontSize: '12px', color: '#334155' }}
                  >
                    Company Name <span aria-hidden="true" style={{ color: '#C8960A' }}>*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="Your organisation"
                    className="rounded-sm px-3 py-2.5 font-body outline-none border"
                    style={{
                      fontSize: '13px',
                      borderColor: '#CBD5E1',
                      color: '#334155',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C8960A')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {/* Service dropdown */}
                <div className="flex flex-col gap-1.5 mb-4">
                  <label
                    htmlFor="service"
                    className="font-body font-medium"
                    style={{ fontSize: '12px', color: '#334155' }}
                  >
                    Service Required <span aria-hidden="true" style={{ color: '#C8960A' }}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="rounded-sm px-3 py-2.5 font-body outline-none border appearance-none"
                    style={{
                      fontSize: '13px',
                      borderColor: '#CBD5E1',
                      color: '#334155',
                      background: '#fff',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C8960A')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  >
                    <option value="" disabled>Select a service…</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 mb-6">
                  <label
                    htmlFor="message"
                    className="font-body font-medium"
                    style={{ fontSize: '12px', color: '#334155' }}
                  >
                    Message <span aria-hidden="true" style={{ color: '#C8960A' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your current certification status and what you're trying to achieve…"
                    className="rounded-sm px-3 py-2.5 font-body outline-none border resize-y"
                    style={{
                      fontSize: '13px',
                      borderColor: '#CBD5E1',
                      color: '#334155',
                      lineHeight: '1.6',
                      transition: 'border-color 0.15s',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#C8960A')}
                    onBlur={(e) => (e.target.style.borderColor = '#CBD5E1')}
                  />
                </div>

                {formState === 'error' && (
                  <p className="font-body mb-4" style={{ fontSize: '13px', color: '#DC2626' }}>
                    Something went wrong. Please email us directly at{' '}
                    <a href={contactDetails.emailHref} style={{ textDecoration: 'underline' }}>
                      {contactDetails.email}
                    </a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="btn-amber w-full justify-center"
                  style={{ opacity: formState === 'loading' ? 0.7 : 1 }}
                >
                  {formState === 'loading' ? 'Sending…' : 'Send Proposal Request'}
                  {formState !== 'loading' && <IconArrowRight size={15} aria-hidden="true" />}
                </button>
              </form>
            )}
          </div>

          {/* Contact details column */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="font-body font-bold uppercase mb-6"
                style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#C8960A' }}
              >
                Contact Information
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: IconPhone, label: 'Phone', value: contactDetails.phone, href: contactDetails.phoneHref },
                  { icon: IconMail, label: 'Email', value: contactDetails.email, href: contactDetails.emailHref },
                  { icon: IconMapPin, label: 'Address', value: contactDetails.address },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center rounded shrink-0"
                      style={{
                        width: '38px',
                        height: '38px',
                        background: 'rgba(200,150,10,0.1)',
                        marginTop: '1px',
                      }}
                    >
                      <Icon size={17} style={{ color: '#C8960A' }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-medium" style={{ fontSize: '11px', color: '#94A3B8', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-body"
                          style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body" style={{ fontSize: '14px', color: '#334155', lineHeight: '1.6' }}>
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact person card */}
            <div
              className="rounded-sm p-5 mt-2"
              style={{ background: '#0B1930' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{ width: '40px', height: '40px', background: 'rgba(200,150,10,0.2)' }}
                >
                  <IconUser size={20} style={{ color: '#C8960A' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-body font-bold text-white" style={{ fontSize: '14px' }}>
                    {contactDetails.name}
                  </p>
                  <p className="font-body" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                    {contactDetails.title}
                  </p>
                </div>
              </div>
              <p className="font-body" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.65' }}>
                Available for calls Monday – Friday, 8am – 5pm WAT.
                Response to enquiries guaranteed within {contactDetails.responseTime}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
