import React from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import logoSvg from '../../imports/Neuroinkluzija_=_Logo_ffff3.svg';

interface AboutSectionProps {
  language: 'bs' | 'en';
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = {
    bs: {
      title: "O nama",
      subtitle: "Ko smo mi?",
      paragraph1: "Udruženje za inkluziju i afirmaciju neurodiverziteta, skraćeno Neuroinkluzija, je nevladino i neprofitno udruženje posvećeno jednom cilju: da neurodivergentne osobe u našem društvu budu viđene, prepoznate i ravnopravno uključene.",
      paragraph2: "Vjerujemo da neurodivergentnost nije prepreka, već drugačiji način na koji mozak obrađuje, uči i doživljava svijet. ADHD, autizam, disleksija i drugi oblici neurodivergencije nisu greške koje treba ispravljati, već razlike koje naše društvo čine bogatijim, kreativnijim i inovativnijim.",
      paragraph3: "Gradimo prostor u kojem se neurodivergentne osobe, njihove porodice, stručnjaci i svi koji žele razumjeti mogu povezati, učiti i djelovati zajedno, jer inkluzivno društvo nije privilegija, nego standard."
    },
    en: {
      title: "About Us",
      subtitle: "Who are we?",
      paragraph1: "The Association for Inclusion and Affirmation of Neurodiversity, abbreviated as Neuroinkluzija, is a non-governmental and non-profit association dedicated to one goal: that neurodivergent people in our society are seen, understood and equally included.",
      paragraph2: "We believe that neurodivergence is not an obstacle, but a different way in which the brain processes, learns and experiences the world. ADHD, autism, dyslexia and other forms of neurodivergence are not errors to be corrected. They are differences that make our communities richer, more creative and more resilient.",
      paragraph3: "We are building a space where neurodivergent people, their families, professionals and all those who want to understand can connect, learn and act together, because an inclusive society is not a privilege, but a standard."
    }
  };

  const currentLang = t[language];

  return (
    <section
      className="py-16 px-4 flex-1 flex items-center justify-center"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ParticleCanvas />

      <div className="container mx-auto max-w-4xl" style={{ position: 'relative', zIndex: 1 }}>

        <div
          className="text-center space-y-6 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dark)' }}
        >
          <div className="flex justify-center mb-6">
            <img
              src={logoSvg}
              alt="Neuroinkluzija logo"
              style={{
                width: '50px',
                height: 'auto',
                display: 'block',
                filter: 'brightness(0) saturate(100%) invert(19%) sepia(9%) saturate(1523%) hue-rotate(107deg) brightness(93%) contrast(92%)'
              }}
            />
          </div>
          <h2
            className="mb-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
          >
            {currentLang.subtitle}
          </h2>
          <p style={{ textAlign: 'center' }}>
            {currentLang.paragraph1}
          </p>
          <p style={{ textAlign: 'center' }}>
            {currentLang.paragraph2}
          </p>
          <p style={{ textAlign: 'center' }}>
            {currentLang.paragraph3}
          </p>
        </div>
      </div>
    </section>
  );
}