import React from 'react';
import charactersImg from '../../imports/1.png';

interface HeroWithConditionsProps {
  language: 'bs' | 'en';
  onSectionChange: (section: string) => void;
}

export function HeroWithConditions({ language, onSectionChange }: HeroWithConditionsProps) {
  const content = {
    bs: {
      welcome: 'Dobrodošli u Neuroinkluziju',
      heading: 'Every brain has its own brilliance.',
      description: 'Neurodiverzitet obogaćuje naše zajednice kroz različite perspektive, talente i načine rješavanja problema.',
      learnMore: 'Saznaj više o neurodiverzitetu',
      aboutUs: 'O nama'
    },
    en: {
      welcome: 'Welcome to Neuroinclusion',
      heading: 'Every brain has its own brilliance.',
      description: 'Neurodiversity enriches our communities through different perspectives, talents, and problem-solving approaches.',
      learnMore: 'Learn more about neurodiversity',
      aboutUs: 'About us'
    }
  };

  const text = content[language];

  const conditionsColumn2 = [
    { id: 'asd', label: 'ASD', color: 'var(--autism-color)' },
    { id: 'adhd', label: 'ADHD', color: 'var(--adhd-color)' },
    { id: 'sld', label: 'SLD', color: 'var(--sld-color)' }
  ];

  const conditionsColumn3 = [
    { id: 'dcd', label: 'DCD', color: 'var(--dcd-color)' },
    { id: 'ts', label: 'TS', color: 'var(--ts-color)' }
  ];

  return (
    <section
      className="py-20 px-4"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '700px', backgroundColor: '#fffff3' }}
    >

      <div className="container mx-auto max-w-7xl" style={{ position: 'relative' }}>
        <div className="hidden lg:grid" style={{ gridTemplateColumns: '35% auto auto auto', gap: '3rem', alignItems: 'center' }}>
          {/* Column 1 - Text content (left, ~35%) */}
          <div>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--dcd-color)',
                borderRadius: '20px',
                padding: '6px 16px',
                marginBottom: '20px'
              }}
            >
              <p
                style={{
                  color: 'var(--text-dark)',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  margin: 0
                }}
              >
                {text.welcome}
              </p>
            </div>
            <h1
              className="mb-6"
              style={{
                color: 'var(--text-dark)',
                fontWeight: '600',
                fontSize: '32px',
                lineHeight: '1.4'
              }}
            >
              {text.heading}
            </h1>
            <p
              className="mb-8"
              style={{
                color: 'var(--text-dark)',
                fontSize: '15px',
                lineHeight: '1.6'
              }}
            >
              {text.description}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  const element = document.getElementById('neurodiversity-info');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  backgroundColor: 'var(--ts-color)',
                  color: 'var(--background-white)',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '12px 28px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {text.learnMore}
              </button>
              <button
                onClick={() => {
                  onSectionChange('o-nama');
                  window.scrollTo({ top: 0 });
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-dark)',
                  border: '2px solid var(--text-dark)',
                  borderRadius: '24px',
                  padding: '10px 28px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s, color 0.15s',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--text-dark)';
                  e.currentTarget.style.color = 'var(--background-white)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-dark)';
                }}
              >
                {text.aboutUs}
              </button>
            </div>
          </div>

          {/* Column 2 - 3 circles stacked vertically (ASD, ADHD, SLD) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
            {conditionsColumn2.map(condition => (
              <button
                key={condition.id}
                onClick={() => {
                  onSectionChange(condition.id);
                  window.scrollTo({ top: 0 });
                }}
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  backgroundColor: condition.color,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {condition.label}
              </button>
            ))}
          </div>

          {/* Column 3 - 2 circles stacked vertically (DCD, TS), centered between ASD and SLD */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', alignSelf: 'center' }}>
            {conditionsColumn3.map(condition => (
              <button
                key={condition.id}
                onClick={() => {
                  onSectionChange(condition.id);
                  window.scrollTo({ top: 0 });
                }}
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  backgroundColor: condition.color,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  color: condition.id === 'ts' ? 'var(--background-white)' : 'var(--text-dark)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  fontFamily: 'inherit'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {condition.label}
              </button>
            ))}
          </div>

          {/* Column 4 - Character illustrations (far right) */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <img
              src={charactersImg}
              alt=""
              style={{
                width: '100%',
                maxWidth: '380px',
                height: 'auto',
                animation: 'gentleFloat 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>

        {/* Mobile fallback */}
        <div className="lg:hidden flex flex-col items-center text-center gap-8">
          <div
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--dcd-color)',
              borderRadius: '20px',
              padding: '6px 16px'
            }}
          >
            <p
              style={{
                color: 'var(--text-dark)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                margin: 0
              }}
            >
              {text.welcome}
            </p>
          </div>
          <h1
            style={{
              color: 'var(--text-dark)',
              fontWeight: '600',
              fontSize: '23px',
              lineHeight: '1.4'
            }}
          >
            {text.heading}
          </h1>
          <p
            style={{
              color: 'var(--text-dark)',
              fontSize: '15px',
              lineHeight: '1.6',
              maxWidth: '500px'
            }}
          >
            {text.description}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', maxWidth: '300px' }}>
            <button
              onClick={() => {
                const element = document.getElementById('neurodiversity-info');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                backgroundColor: 'var(--ts-color)',
                color: 'var(--background-white)',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {text.learnMore}
            </button>
            <button
              onClick={() => {
                onSectionChange('o-nama');
                window.scrollTo({ top: 0 });
              }}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-dark)',
                border: '2px solid var(--text-dark)',
                borderRadius: '24px',
                padding: '10px 28px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              {text.aboutUs}
            </button>
          </div>

          {/* Kruzici na mobilnoj */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            {[...conditionsColumn2, ...conditionsColumn3].map(condition => (
              <button
                key={condition.id}
                onClick={() => { onSectionChange(condition.id); window.scrollTo({ top: 0 }); }}
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  backgroundColor: condition.color,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: condition.id === 'ts' ? 'var(--background-white)' : 'var(--text-dark)',
                  fontFamily: 'inherit'
                }}
              >
                {condition.label}
              </button>
            ))}
          </div>

          {/* Crtez na mobilnoj */}
          <img
            src={charactersImg}
            alt=""
            style={{ width: '220px', height: 'auto', animation: 'gentleFloat 6s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  );
}
