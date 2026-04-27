import React from 'react';
import { ParticleCanvas } from './ParticleCanvas';

interface SimpleHeroProps {
  language: 'bs' | 'en';
}

export function SimpleHero({ language }: SimpleHeroProps) {
  const content = {
    bs: {
      welcome: 'Dobrodošli u Neuroinkluziju',
      heading: 'Svaki mozak ima svoju briljantnost',
      description: 'Neurodiverzitet nije prepreka. To je drugačiji način na koji mozak obrađuje, uči i doživljava svijet.'
    },
    en: {
      welcome: 'Welcome to Neuroinclusion',
      heading: 'Every brain has its own brilliance',
      description: 'Neurodiversity is not a barrier. It is a different way in which the brain processes, learns and experiences the world.'
    }
  };

  const text = content[language];

  return (
    <section
      className="neurodiversity-animated-bg py-20 px-4"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ParticleCanvas />

      <div className="container mx-auto max-w-4xl text-center" style={{ position: 'relative', zIndex: 1 }}>
        <p
          style={{
            color: 'var(--text-dark)',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: 0.55,
            marginBottom: '16px'
          }}
        >
          {text.welcome}
        </p>
        <h1
          className="mb-6"
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
          className="max-w-2xl mx-auto"
          style={{
            color: 'var(--text-dark)',
            fontSize: '15px',
            lineHeight: '1.6'
          }}
        >
          {text.description}
        </p>
      </div>
    </section>
  );
}
