import React, { useState } from 'react';
import { ParticleCanvas } from './ParticleCanvas';

interface ContactSectionProps {
  defaultTab?: string;
  language: 'bs' | 'en';
}

// Web3Forms Access Key - povezuje formu sa info@neuroinkluzija.org
const WEB3FORMS_ACCESS_KEY = 'bedd7eff-38be-4d06-9cfb-41cedb973317';

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = {
    bs: {
      title: 'Kontakt',
      orgFull: 'Udruženje za inkluziju i afirmaciju neurodiverziteta',
      emailLabel: 'Email',
      emailValue: 'info@neuroinkluzija.org',
      nameLbl: 'Tvoje ime',
      emailLbl: 'Email adresa',
      messageLbl: 'Poruka',
      submit: 'Pošalji',
      sending: 'Šaljem...',
      success: 'Poruka je uspešno poslata. Hvala ti!',
      errorMsg: 'Došlo je do greške. Molimo pokušaj ponovo ili nas kontaktiraj direktno na email.',
    },
    en: {
      title: 'Contact',
      orgFull: 'Association for Inclusion and Affirmation of Neurodiversity',
      emailLabel: 'Email',
      emailValue: 'info@neuroinkluzija.org',
      nameLbl: 'Your name',
      emailLbl: 'Email address',
      messageLbl: 'Message',
      submit: 'Send',
      sending: 'Sending...',
      success: 'Your message has been sent successfully. Thank you!',
      errorMsg: 'Something went wrong. Please try again or contact us directly via email.',
    },
  };

  const lang = t[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nova poruka sa sajta od ${formData.name}`,
          from_name: 'Neuroinkluzija - Kontakt forma',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(lang.errorMsg);
      }
    } catch (err) {
      setError(lang.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#ffffff',
    border: '1px solid #d6d0c8',
    borderRadius: '6px',
    padding: '10px 14px',
    color: 'var(--text-dark)',
    fontFamily: 'inherit',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <section
      className="neurodiversity-animated-bg"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px - 80px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ParticleCanvas />

      <div
        className="container mx-auto px-6 py-10"
        style={{ position: 'relative', zIndex: 1, maxWidth: '960px' }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* ── LEFT: Org info ── */}
          <div className="flex-1 flex flex-col justify-center" style={{ minWidth: 0 }}>
            <p
              style={{
                color: 'var(--text-dark)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                opacity: 0.55,
                marginBottom: '28px',
              }}
            >
              {lang.title}
            </p>

            <h1
              style={{
                color: 'var(--text-dark)',
                fontSize: '23px',
                fontWeight: '600',
                lineHeight: '1.5',
                marginBottom: '28px',
              }}
            >
              {lang.orgFull}
            </h1>

            <div className="flex flex-col gap-2">
              <span
                style={{
                  color: 'var(--text-dark)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  opacity: 0.5,
                }}
              >
                {lang.emailLabel}
              </span>
              <a
                href={`mailto:${lang.emailValue}`}
                style={{
                  color: 'var(--text-dark)',
                  fontSize: '15px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                {lang.emailValue}
              </a>
            </div>
          </div>

          {/* ── RIGHT: Contact form ── */}
          <div style={{ flex: '0 0 auto', width: '100%', maxWidth: '420px' }}>
            {submitted ? (
              <p
                className="text-center py-8"
                style={{ color: 'var(--text-dark)', fontSize: '15px' }}
              >
                {lang.success}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Honeypot polje za zaštitu od spama - skriveno od korisnika */}
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '14px' }}
                  >
                    {lang.nameLbl}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={loading}
                    style={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '14px' }}
                  >
                    {lang.emailLbl}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={loading}
                    style={inputBase}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '14px' }}
                  >
                    {lang.messageLbl}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={loading}
                    style={{ ...inputBase, resize: 'vertical' }}
                  />
                </div>

                {/* Error poruka - prikazuje se samo ako je greska */}
                {error && (
                  <p
                    style={{
                      color: '#b8392f',
                      fontSize: '14px',
                      fontWeight: '500',
                      margin: 0,
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: 'var(--adhd-color)',
                    color: 'var(--text-dark)',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '11px 32px',
                    fontFamily: 'inherit',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    alignSelf: 'flex-start',
                    minWidth: '130px',
                    opacity: loading ? 0.7 : 1,
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => {
                    if (!loading) e.currentTarget.style.opacity = '0.82';
                  }}
                  onMouseLeave={e => {
                    if (!loading) e.currentTarget.style.opacity = '1';
                  }}
                >
                  {loading ? lang.sending : lang.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
