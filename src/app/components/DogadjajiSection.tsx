import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import heroImg from '../../imports/1.jpeg';
import installImg2 from '../../imports/2-1.jpeg';
import installImg3 from '../../imports/4-1.jpeg';
import arrivalImg1 from '../../imports/5.jpeg';
import arrivalImg2 from '../../imports/6.jpeg';
import arrivalImg3 from '../../imports/11.jpeg';
import panelIntroImg from '../../imports/14.jpeg';
import panelImg1 from '../../imports/IMG_2418.jpeg';
import panelImg2 from '../../imports/20.jpeg';
import panelImg3 from '../../imports/22-2.jpeg';
import finaleImg4 from '../../imports/24.jpeg';
import finaleImg5 from '../../imports/25.jpeg';

interface DogadjajiSectionProps {
  language: 'bs' | 'en';
}

interface Article {
  id: string;
  date: string;
  tag: string;
  tagColor: string;
  title: string;
  shortDesc: string;
  fullContent: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 'kampanja-2024',
    date: '16. juni 2025.',
    tag: '',
    tagColor: 'var(--dcd-color)',
    title: 'Dan neurodiverziteta 2025',
    shortDesc:
      'Prvi Dan neurodiverziteta u historiji Bosne i Hercegovine.',
    fullContent:
      'Tokom 2024. godine Neuroinkluzija je pokrenula prvu javnu kampanju podizanja svijesti o neurodiverzitetu u Sarajevu. Kampanja je obuhvatila javne prezentacije, distribuciju edukativnih materijala i susrete s lokalnom zajednicom. Cilj kampanje bio je otvoriti razgovor o neurodiverzitetu u javnom prostoru i ukazati na važnost inkluzivnog pristupa u svakodnevnom životu.',
    image: heroImg,
  },
];

const articlesEn: Article[] = [
  {
    id: 'kampanja-2024',
    date: 'June 16, 2025',
    tag: '',
    tagColor: 'var(--dcd-color)',
    title: 'Neurodiversity Day 2025',
    shortDesc:
      'The first Neurodiversity Day in the history of Bosnia and Herzegovina.',
    fullContent:
      'During 2024, Neuroinkluzija launched the first public awareness campaign about neurodiversity in Sarajevu. The campaign included public presentations, distribution of educational materials and meetings with the local community. The goal was to open a conversation about neurodiversity in public space and highlight the importance of an inclusive approach in everyday life.',
    image: heroImg,
  },
];

export function DogadjajiSection({ language }: DogadjajiSectionProps) {
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  const data = language === 'bs' ? articles : articlesEn;
  const pageTitle = language === 'bs' ? 'Događaji' : 'Events';
  const readMore = language === 'bs' ? 'Saznaj više' : 'Read more';
  const backLabel = language === 'bs' ? 'Nazad' : 'Back';

  const openArticle = data.find(a => a.id === openArticleId);

  /* ── Full article view ── */
  if (openArticle) {
    /* Custom layout for "Dan neurodiverziteta 2025" */
    if (openArticle.id === 'kampanja-2024') {
      const content = language === 'bs' ? {
        date: '16. juni 2025.',
        location: 'Akademija likovnih umjetnosti, Sarajevo',
        intro: '16. juna 2025. godine, Sarajevo je ugostilo događaj koji u Bosni i Hercegovini do tada nije postojao. Prvi Dan neurodiverziteta organizovan je na Akademiji likovnih umjetnosti od strane Emine Murtezić, studentice ALU-a i nacionalne koordinatorice Neurodiversity Foundation (Nizozemska).\n\nUz mentorstvo prof. Sande Popovac, istraživačko pitanje iz diplomskog rada pretvorila je u događaj otvorenog karaktera, namijenjen stručnoj javnosti, studentima i svima koji žele da razumeju neurodiverzitet kao realnost, ne kao izuzetak.',
        installationText: 'Na Mostu Festina Lente postavljena je instalacija od isprepletenih niti u bojama neurodiverziteta. Svaka nit drugačija, po boji, pravcu i intenzitetu, ali zajedno čine nešto koherentno i živo. Metafora neuronske mreže neurodivergentnog uma, ostvarena u prostoru.\n\nNakon panela, instalacija je postala interaktivna. Posjetitelji su mogli ostaviti svoje misli, iskustva i poruke direktno na mreži, pretvarajući umjetnički objekat u zajednički glas.\n\nEnterijer je upotpunjen crtežima djece iz EDUS-a koji su zajedno oblikovali Infinity simbol, univerzalni znak neurodiverziteta.\n\nKoncept, realizacija i vizuelni identitet cijelog događaja: Emina Murtezić.',
        arrivalText: 'Akademija likovnih umjetnosti otvorila je svoja vrata studentima, stručnjacima i svima zainteresovanim da budu dio ovog historijskog trenutka. Od prvih koraka na ulazu, sa infinity simbolima na bedževima, pa do toplih susreta i razgovora ispred Akademije - atmosfera je bila prožeta osjećajem zajedništva i otkrića.',
        panelText: 'Stručni dio programa bio je u organizaciji EDUS-a. Panel je otvorila Nirvana Pištoljević, izvršna direktorica EDUS-a i doktorica sa Columbia University-a. Uslijedila su predavanja:\n\nDr. Lin Du - Teachers College, Columbia University\nDr. Fabiola Casarini - Italija\nDr. Samra Hamzić - Švicarska / Njemačka',
        finaleText: 'Veče je zatvoreno svjetlosnom projekcijom na fasadi ALU-a i muzikom DJ Forore. Ljubičasto osvjetljenje obavilo je zgradu i most dok su se posjetitelji, puni utisaka, polako rasipali u sarajevsku noć. Nauka, umjetnost i zajednica - spojeni u jednom trenutku.',
        thanksText: 'Događaj ne bi bio moguć bez podrške svih koji su vjerovali u ideju i pomogli njenoj realizaciji. Posebno zahvaljujemo partnerima: Štampariji Margo, Agenciji BLOW UP i Štampariji Smile Factory, kao i svima koji su na bilo koji način podržali i omogućili ovaj događaj.',
        photographersLabel: 'Fotografije',
        photographers: 'Ajdin Bradarić, Merjem Jasavić, Mustafa Mlinarević'
      } : {
        date: 'June 16, 2025',
        location: 'Academy of Fine Arts, Sarajevo',
        intro: 'On June 16, 2025, Sarajevo hosted an event that had never existed in Bosnia and Herzegovina before. The first Neurodiversity Day was organized at the Academy of Fine Arts by Emina Murtezić, an ALU student and national coordinator of the Neurodiversity Foundation (Netherlands).\n\nWith the mentorship of Prof. Sanda Popovac, she transformed a research question from her thesis into an open event intended for the professional public, students, and everyone who wants to understand neurodiversity as reality, not as an exception.',
        installationText: 'An installation of interwoven threads in neurodiversity colors was set up on the Festina Lente Bridge. Each thread different in color, direction and intensity, but together they form something coherent and alive. A metaphor for the neural network of the neurodivergent mind, realized in space.\n\nAfter the panel, the installation became interactive. Visitors could leave their thoughts, experiences and messages directly on the network, turning the art object into a collective voice.\n\nThe interior was complemented by drawings by EDUS children who together shaped the Infinity symbol, the universal sign of neurodiversity.\n\nConcept, realization and visual identity of the entire event: Emina Murtezić.',
        arrivalText: 'The Academy of Fine Arts opened its doors to students, professionals and all those interested in being part of this historic moment. From the first steps at the entrance, with infinity symbols on badges, to warm encounters and conversations in front of the Academy - the atmosphere was infused with a sense of community and discovery.',
        panelText: 'The expert part of the program was organized by EDUS. The panel was opened by Nirvana Pištoljević, executive director of EDUS and PhD from Columbia University. Lectures followed:\n\nDr. Lin Du - Teachers College, Columbia University\nDr. Fabiola Casarini - Italy\nDr. Samra Hamzić - Switzerland / Germany',
        finaleText: 'The evening was closed with a light projection on the ALU facade and music by DJ Forore. Purple lighting enveloped the building and bridge as visitors, full of impressions, slowly dispersed into the Sarajevo night. Science, art and community - united in one moment.',
        thanksText: 'The event would not have been possible without the support of everyone who believed in the idea and helped make it happen. We especially thank our partners: Margo Print Shop, BLOW UP Agency and Smile Factory Print Shop, as well as everyone who in any way supported and enabled this event.',
        photographersLabel: 'Photography',
        photographers: 'Ajdin Bradarić, Merjem Jasavić, Mustafa Mlinarević'
      };

      return (
        <div style={{ backgroundColor: 'var(--background-cream)' }}>
          {/* Back button */}
          <div className="container mx-auto max-w-6xl px-4 pt-8">
            <button
              onClick={() => setOpenArticleId(null)}
              className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-70"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dark)',
                fontSize: '14px',
                fontWeight: '600',
                padding: 0,
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              {backLabel}
            </button>
          </div>

          {/* Section 1: Hero */}
          <section
            style={{
              position: 'relative',
              height: '500px',
              backgroundImage: `url(${heroImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginTop: '24px',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(47, 64, 58, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center', color: 'var(--background-white)', padding: '0 20px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '16px' }}>
                  {openArticle.title}
                </h1>
                <p style={{ fontSize: '17px', marginBottom: '8px' }}>{content.date}</p>
                <p style={{ fontSize: '15px', opacity: 0.9 }}>{content.location}</p>
              </div>
            </div>
          </section>

          {/* Section 2: Intro text */}
          <section className="py-16 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
            <div className="container mx-auto" style={{ maxWidth: '760px' }}>
              {language === 'bs' ? (
                <>
                  <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                    16. juna 2025. godine, Sarajevo je ugostilo događaj koji u{' '}
                    <a
                      href="https://neurodiversityprideday.com/bosniaherzegovina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Bosni i Hercegovini
                    </a>
                    {' '}do tada nije postojao. Prvi{' '}
                    <a
                      href="https://neurodiversityprideday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Dan neurodiverziteta
                    </a>
                    {' '}organizovan je na Akademiji likovnih umjetnosti od strane Emine Murtezić, studentice ALU-a i nacionalne koordinatorice{' '}
                    <a
                      href="https://www.neurodiversiteit.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Neurodiversity Foundation
                    </a>
                    {' '}(Nizozemska).
                  </p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75' }}>
                    Uz mentorstvo prof. Sande Popovac, istraživačko pitanje iz diplomskog rada pretvorila je u događaj otvorenog karaktera, namijenjen stručnoj javnosti, studentima i svima koji žele da razumeju neurodiverzitet kao realnost, ne kao izuzetak.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                    On June 16, 2025, Sarajevo hosted an event that had never existed in{' '}
                    <a
                      href="https://neurodiversityprideday.com/bosniaherzegovina/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Bosnia and Herzegovina
                    </a>
                    {' '}before. The first{' '}
                    <a
                      href="https://neurodiversityprideday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Neurodiversity Day
                    </a>
                    {' '}was organized at the Academy of Fine Arts by Emina Murtezić, an ALU student and national coordinator of the{' '}
                    <a
                      href="https://www.neurodiversiteit.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ts-color)', textDecoration: 'underline' }}
                    >
                      Neurodiversity Foundation
                    </a>
                    {' '}(Netherlands).
                  </p>
                  <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75' }}>
                    With the mentorship of Prof. Sanda Popovac, she transformed a research question from her thesis into an open event intended for the professional public, students, and everyone who wants to understand neurodiversity as reality, not as an exception.
                  </p>
                </>
              )}
            </div>
          </section>

          {/* Section 3: Installation (images left, text right) */}
          <section className="py-12 px-4" style={{ backgroundColor: 'var(--background-white)' }}>
            <div className="container mx-auto max-w-6xl">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <img
                    src={installImg2}
                    alt="Installation 1"
                    style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <img
                    src={installImg3}
                    alt="Installation 2"
                    style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
                <div>
                  {content.installationText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: idx < content.installationText.split('\n\n').length - 1 ? '16px' : '0' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Arrival and atmosphere */}
          <section className="py-12 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
            <div className="container mx-auto max-w-6xl">
              <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: '32px', textAlign: 'center', maxWidth: '760px', margin: '0 auto 32px' }}>
                {content.arrivalText}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <img
                  src={arrivalImg1}
                  alt="Arrival 1"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <img
                  src={arrivalImg2}
                  alt="Arrival 2"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <img
                  src={arrivalImg3}
                  alt="Arrival 3"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>
          </section>

          {/* Section 5: Panel intro (full-width image) */}
          <section className="py-12 px-4" style={{ backgroundColor: 'var(--background-white)' }}>
            <div className="container mx-auto max-w-6xl">
              <img
                src={panelIntroImg}
                alt="Panel audience"
                style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          </section>

          {/* Section 6: Panel (text left, images right) */}
          <section className="py-12 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
            <div className="container mx-auto max-w-6xl">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  {content.panelText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: idx < content.panelText.split('\n\n').length - 1 ? '16px' : '0', whiteSpace: 'pre-line' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <img
                    src={panelImg1}
                    alt="Panel discussion 1"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <img
                    src={panelImg2}
                    alt="Panel discussion 2"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <img
                    src={panelImg3}
                    alt="Panel discussion 3"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', gridColumn: 'span 2' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Finale and closing */}
          <section className="py-12 px-4" style={{ backgroundColor: 'var(--background-white)' }}>
            <div className="container mx-auto max-w-6xl">
              <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', marginBottom: '32px', textAlign: 'center', maxWidth: '760px', margin: '0 auto 32px' }}>
                {content.finaleText}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <img
                  src={finaleImg4}
                  alt="Finale night projection"
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <img
                  src={finaleImg5}
                  alt="Finale night atmosphere"
                  style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>
          </section>

          {/* Section 8: Closing text (thanks) */}
          <section className="py-16 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
            <div className="container mx-auto" style={{ maxWidth: '760px' }}>
              <p style={{ color: 'var(--text-dark)', fontSize: '15px', lineHeight: '1.75', textAlign: 'center', marginBottom: '32px' }}>
                {content.thanksText}
              </p>
              <p style={{ color: 'var(--text-dark)', fontSize: '13px', lineHeight: '1.75', textAlign: 'center', opacity: 0.7 }}>
                <span style={{ fontWeight: '600' }}>{content.photographersLabel}:</span> {content.photographers}
              </p>
            </div>
          </section>
        </div>
      );
    }

    /* Default article view for other articles */
    return (
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
        <div className="container mx-auto max-w-3xl">
          <button
            onClick={() => setOpenArticleId(null)}
            className="flex items-center gap-2 mb-8 cursor-pointer transition-opacity hover:opacity-70"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              fontSize: '14px',
              fontWeight: '600',
              padding: 0,
            }}
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </button>

          {/* Tag + date */}
          <div className="flex items-center gap-3 mb-4">
            {openArticle.tag && (
              <span
                style={{
                  backgroundColor: openArticle.tagColor,
                  color: 'var(--text-dark)',
                  fontSize: '11px',
                  fontWeight: '600',
                  letterSpacing: '0.05em',
                  padding: '3px 10px',
                  borderRadius: '20px',
                }}
              >
                {openArticle.tag}
              </span>
            )}
            <span style={{ color: 'var(--text-dark)', fontSize: '13px', opacity: 0.55 }}>
              {openArticle.date}
            </span>
          </div>

          <h1
            className="mb-6"
            style={{ color: 'var(--text-dark)', fontSize: '23px', fontWeight: '600' }}
          >
            {openArticle.title}
          </h1>

          <img
            src={openArticle.image}
            alt={openArticle.title}
            style={{
              width: '100%',
              height: '280px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '28px',
            }}
          />

          <p
            style={{
              color: 'var(--text-dark)',
              lineHeight: '1.75',
              fontSize: '15px',
            }}
          >
            {openArticle.fullContent}
          </p>
        </div>
      </section>
    );
  }

  /* ── Feed view ── */
  return (
    <section className="py-16 px-4" style={{ backgroundColor: 'var(--background-cream)' }}>
      <div className="container mx-auto max-w-3xl">
        <h1
          className="mb-10"
          style={{ color: 'var(--text-dark)', fontSize: '23px', fontWeight: '600' }}
        >
          {pageTitle}
        </h1>

        <div>
          {data.map((article, idx) => (
            <article
              key={article.id}
              style={{
                borderBottom:
                  idx < data.length - 1
                    ? '1px solid rgba(47, 64, 58, 0.12)'
                    : 'none',
                paddingBottom: idx < data.length - 1 ? '32px' : '0',
                marginBottom: idx < data.length - 1 ? '32px' : '0',
              }}
            >
              <div className="flex gap-5 md:gap-8">
                {/* Thumbnail */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '120px',
                    height: '90px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: '#e8e3db',
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Text content */}
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  {/* Tag + date row */}
                  <div className="flex flex-wrap items-center gap-2">
                    {article.tag && (
                      <span
                        style={{
                          backgroundColor: article.tagColor,
                          color: 'var(--text-dark)',
                          fontSize: '11px',
                          fontWeight: '600',
                          letterSpacing: '0.05em',
                          padding: '2px 9px',
                          borderRadius: '20px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {article.tag}
                      </span>
                    )}
                    <span
                      style={{
                        color: 'var(--text-dark)',
                        fontSize: '13px',
                        opacity: 0.5,
                      }}
                    >
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      color: 'var(--text-dark)',
                      fontSize: '16px',
                      fontWeight: '600',
                      lineHeight: '1.4',
                      margin: 0,
                    }}
                  >
                    {article.title}
                  </h2>

                  {/* Short description */}
                  <p
                    style={{
                      color: 'var(--text-dark)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      opacity: 0.75,
                      margin: 0,
                    }}
                  >
                    {article.shortDesc}
                  </p>

                  {/* Read more */}
                  <button
                    onClick={() => setOpenArticleId(article.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--ts-color)',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      alignSelf: 'flex-start',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {readMore} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}