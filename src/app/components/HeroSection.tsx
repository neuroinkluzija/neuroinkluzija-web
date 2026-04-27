import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface HeroSectionProps {
  language: 'bs' | 'en';
}

export function HeroSection({ language }: HeroSectionProps) {
  const [showDefinitions, setShowDefinitions] = useState(false);

  const content = {
    bs: {
      title: 'Šta je neurodiverzitet?',
      description: ['Neurodiverzitet je društveni koncept koji prihvata i cijeni razlike u načinu na koji ljudski mozak funkcioniše. Sam termin uvela je australijska sociološkinja Judy Singer, 1998. godine. Singer je smatrala da neurološke razlike treba posmatrati kao prirodan dio ljudske varijacije, a ne kao medicinske dijagnoze koje zahtijevaju liječenje.', 'Važno je znati da jedan neurodivergentni um pruža posebnu kreativnost, inovaciju, novu perspektivu o svijetu. Cilj koncepta neurodiverziteta je da se razlike zasnovane na neurološkoj osnovi ne predstavljaju kao „bolest" koju treba liječiti, već ih neurodiverzitet predstavlja kao prirodne varijacije ljudske kognicije koje trebamo slaviti.'],
      neurotypicalTitle: 'Neurotipični',
      neurotypicalDesc: 'Osobe čiji mozak funkcioniše u skladu s društveno očekivanim normama.',
      neurodivergentTitle: 'Neurodivergentni',
      neurodivergentDesc: 'Osobe koje imaju drugačije obrasce razmišljanja, učenja i obrade informacija.',
      showLabel: 'Prikaži definicije',
      hideLabel: 'Sakrij definicije'
    },
    en: {
      title: 'What is neurodiversity?',
      description: ['Neurodiversity is a social concept that accepts and values differences in how the human brain functions. The term was introduced by Australian sociologist Judy Singer in 1998. Singer believed that neurological differences should be viewed as a natural part of human variation, not as medical diagnoses requiring treatment.', 'It\'s important to know that a neurodivergent mind provides unique creativity, innovation, and new perspectives on the world. The goal of the neurodiversity concept is that differences based on neurological foundations should not be presented as an "illness" that needs to be treated, but rather as natural variations of human cognition that we should celebrate.'],
      neurotypicalTitle: 'Neurotypical',
      neurotypicalDesc: 'People whose brains function in accordance with socially expected norms.',
      neurodivergentTitle: 'Neurodivergent',
      neurodivergentDesc: 'People who have different patterns of thinking, learning, and information processing.',
      showLabel: 'Show definitions',
      hideLabel: 'Hide definitions'
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h1 
          className="mb-8" 
          style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
        >
          {text.title}
        </h1>
        
        <div 
          className="max-w-3xl mx-auto text-justify mb-8"
          style={{ color: 'var(--text-dark)', lineHeight: '1.625' }}
        >
          {text.description.map((para, i) => (
            <p key={i} style={{ margin: 0, marginTop: i > 0 ? '1rem' : 0 }}>
              {para}
            </p>
          ))}
        </div>

        <button
          onClick={() => setShowDefinitions(!showDefinitions)}
          className="mb-8 cursor-pointer transition-transform duration-200 hover:scale-110"
          style={{ 
            background: 'none',
            border: 'none',
            color: 'var(--ts-color)'
          }}
          aria-label={showDefinitions ? text.hideLabel : text.showLabel}
        >
          {showDefinitions ? 
            <ChevronUp className="h-8 w-8" /> : 
            <ChevronDown className="h-8 w-8" />
          }
        </button>

        {showDefinitions && (
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="text-left">
              <h3 
                className="mb-3 text-lg"
                style={{ color: 'var(--text-dark)', fontWeight: '600' }}
              >
                {text.neurotypicalTitle}
              </h3>
              <p style={{ color: 'var(--text-dark)' }}>
                {text.neurotypicalDesc}
              </p>
            </div>

            <div className="text-left">
              <h3 
                className="mb-3 text-lg"
                style={{ color: 'var(--text-dark)', fontWeight: '600' }}
              >
                {text.neurodivergentTitle}
              </h3>
              <p style={{ color: 'var(--text-dark)' }}>
                {text.neurodivergentDesc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}