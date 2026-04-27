import React from 'react';

interface NeuroinkluzijaSectionIntroProps {
  language: 'bs' | 'en';
}

export function NeuroinkluzijaSectionIntro({ language }: NeuroinkluzijaSectionIntroProps) {
  const content = {
    bs: {
      title: 'Šta je neuroinkluzija?',
      paragraphs: [
        'Neuroinkluzija je aktivna praksa stvaranja okruženja u kojima neurodivergentne osobe mogu da učestvuju, doprinose i napreduju, bez potrebe da maskiraju ili potiskuju sopstvenu neurologiju. Nije dovoljno samo znati da neurološke razlike postoje. Neuroinkluzija zahtijeva da obrazovne institucije, radna mjesta i zajednice preispitaju kako su organizovane i ko može da funkcioniše u njima pod jednakim uslovima.',
        'Razlika između inkluzije i neuroinkluzije je ključna: inkluzija često znači samo povećanje zastupljenosti neurodivergentnih osoba, bez mijenjanja sistema koji im postavljaju prepreke. Neuroinkluzija ide korak dalje - ona preoblikuje same sisteme tako da više ne privileguju isključivo neurotipične obrasce mišljenja i ponašanja.',
        'Škola koja neurodivergentnom učeniku daje više vremena na testu ne praktikuje neuroinkluziju, već ona reaguje. Škola koja unaprijed planira različite načine učenja, jasno komunicira očekivanja i osmišljava prostor uzimajući u obzir senzorne potrebe - ta škola je neuroinkluzivna. Ovaj princip važi i za radno mjesto, javni prostor i zajednicu. Kada okruženja postanu fleksibilnija i pristupačnija za neurodivergentne osobe, od toga koristi imaju svi.',
      ],
    },
    en: {
      title: 'What is neuroinclusion?',
      paragraphs: [
        'Neuroinclusion is the active practice of creating environments where neurodivergent people can participate, contribute, and thrive without needing to mask or suppress their own neurology. It is not enough to simply know that neurological differences exist. Neuroinclusion requires educational institutions, workplaces, and communities to reconsider how they are organized and who can function within them on equal terms.',
        'The difference between inclusion and neuroinclusion is crucial: inclusion often means only increasing the representation of neurodivergent people, without changing the systems that create barriers for them. Neuroinclusion goes a step further it reshapes the systems themselves so they no longer exclusively privilege neurotypical patterns of thinking and behaviour.',
        'A school that gives a neurodivergent student extra time on a test is not practising neuroinclusion it is reacting. A school that proactively plans for multiple ways of learning, communicates expectations clearly, and designs its space with sensory needs in mind that school is neuroinclusive. This principle applies equally to the workplace, public space, and community. When environments become more flexible and accessible for neurodivergent people, everyone benefits.',
      ],
    },
  };

  const text = content[language];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2
          className="mb-8"
          style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
        >
          {text.title}
        </h2>
        <div
          className="max-w-3xl mx-auto text-justify"
          style={{ color: 'var(--text-dark)', lineHeight: '1.625' }}
        >
          {text.paragraphs.map((para, i) => (
            <p key={i} style={{ margin: 0, marginTop: i > 0 ? '1rem' : 0 }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}