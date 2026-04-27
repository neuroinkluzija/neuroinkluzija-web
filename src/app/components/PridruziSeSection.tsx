import React, { useState } from 'react';
import { Users, Leaf, Heart, Link2 } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface PridruziSeSectionProps {
  language: 'bs' | 'en';
  onSectionChange: (section: string) => void;
}

// ── Tab definitions ─────────────────────────────────────────────────────────

interface Tab {
  id: string;
  labelSr: string;
  labelEn: string;
  icon: React.ReactNode;
  headingSr: string;
  headingEn: string;
  bodySr: string;
  bodyEn: string;
  ctaSr: string;
  ctaEn: string;
  accentColor: string;
}

const TABS: Tab[] = [
  {
    id: 'volontiranje',
    labelSr: 'Volontiranje',
    labelEn: 'Volunteering',
    icon: <Users size={16} strokeWidth={1.8} />,
    headingSr: 'Postani volonter',
    headingEn: 'Become a volunteer',
    bodySr:
      'Pridruži se kao volonter i doprinesi direktno našim programima i događajima. Tražimo ljude različitih profila: edukatore, stručnjake, kreativce i sve koji dijele naše vrijednosti.',
    bodyEn:
      'Join as a volunteer and contribute directly to our programmes and events. We are looking for people with different backgrounds - educators, professionals, creatives and everyone who shares our values.',
    ctaSr: 'Kontaktiraj nas',
    ctaEn: 'Contact us',
    accentColor: 'var(--dcd-color)',
  },
  {
    id: 'donacije',
    labelSr: 'Donacije',
    labelEn: 'Donations',
    icon: <Heart size={16} strokeWidth={1.8} />,
    headingSr: 'Podrži nas',
    headingEn: 'Support us',
    bodySr:
      'Tvoja podrška omogućava nam da organizujemo događaje, razvijamo edukativne resurse i zagovaramo inkluzivne politike. Svaki doprinos je važan.',
    bodyEn:
      'Your support enables us to organise events, develop educational resources and advocate for inclusive policies. Every contribution matters.',
    ctaSr: 'Kontaktiraj nas',
    ctaEn: 'Contact us',
    accentColor: 'var(--sld-color)',
  },
  {
    id: 'partnerstva',
    labelSr: 'Partnerstva',
    labelEn: 'Partnerships',
    icon: <Link2 size={16} strokeWidth={1.8} />,
    headingSr: 'Postani partner',
    headingEn: 'Become a partner',
    bodySr:
      'Sarađujemo sa organizacijama, institucijama i kompanijama koje dijele naša uvjerenja. Ako želiš da postaneš partner, javi nam se.',
    bodyEn:
      'We collaborate with organisations, institutions and companies that share our beliefs. If you would like to become a partner, get in touch.',
    ctaSr: 'Kontaktiraj nas',
    ctaEn: 'Contact us',
    accentColor: 'var(--autism-color)',
  },
];

// ── Component ───────────────────────────────────────────────────────────────

export function PridruziSeSection({ language, onSectionChange }: PridruziSeSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const bs = language === 'bs';
  const pageTitle = bs ? 'Pridruži se' : 'Join Us';
  const current = TABS[activeTab];

  return (
    <section
      className="neurodiversity-animated-bg"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 64px - 80px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ParticleCanvas />

      <div
        style={{ position: 'relative', zIndex: 1, maxWidth: '560px', width: '100%', padding: '40px 24px', margin: '0 auto' }}
      >
        {/* Page title label */}
        <p
          style={{
            color: 'var(--text-dark)',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.55,
            marginBottom: '28px',
            textAlign: 'center',
          }}
        >
          {pageTitle}
        </p>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center" role="tablist">
          {TABS.map((tab, idx) => {
            const active = activeTab === idx;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 18px',
                  borderRadius: '24px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: '2px solid',
                  borderColor: active ? 'transparent' : 'rgba(47,64,58,0.18)',
                  backgroundColor: active ? tab.accentColor : 'transparent',
                  color: 'var(--text-dark)',
                  transition: 'all 0.18s ease',
                  fontFamily: 'inherit',
                }}
              >
                {tab.icon}
                {bs ? tab.labelSr : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          key={current.id}
          role="tabpanel"
          style={{
            borderRadius: '10px',
            padding: '36px 40px',
            backgroundColor: current.accentColor,
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              color: 'var(--text-dark)',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '16px',
            }}
          >
            {bs ? current.headingSr : current.headingEn}
          </h2>
          <p
            style={{
              color: 'var(--text-dark)',
              fontSize: '15px',
              lineHeight: '1.75',
              marginBottom: '28px',
            }}
          >
            {bs ? current.bodySr : current.bodyEn}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => onSectionChange('kontakt')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 24px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                border: '2px solid rgba(47,64,58,0.22)',
                backgroundColor: 'rgba(255,255,255,0.55)',
                color: 'var(--text-dark)',
                transition: 'background-color 0.15s ease',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.82)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.55)')}
            >
              {bs ? current.ctaSr : current.ctaEn} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}