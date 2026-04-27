import React from 'react';
import { Brain, Zap, Hand, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import illustrationImg from '../../imports/IMG_6469.png';

interface ConditionsSectionProps {
  language: 'bs' | 'en';
  onSectionChange: (section: string) => void;
}

export function ConditionsSection({ language, onSectionChange }: ConditionsSectionProps) {
  const content = {
    bs: {
      sectionTitle: 'Važnost neurodiverziteta',
      sectionDescription: 'Neurodiverzitet obogaćuje naše zajednice kroz različite perspektive, talente i načine rješavanja problema. Saznajte više o različitim neurodivergentnim stanjima.',
      clickForMore: 'Kliknite za više informacija',
      conditions: [
        {
          id: 'asd',
          title: 'ASD (Poremećaj iz spektra autizma)',
          icon: Brain,
          color: 'var(--autism-color)',
          description: 'Poremećaj iz spektra autizma (ASD) je neurološko stanje koje utiče na komunikaciju, socijalne interakcije i ponašanje. Osobe sa ASD-om mogu imati jedinstvene načine obrade informacija i interakcije sa svetom oko sebe.'
        },
        {
          id: 'adhd',
          title: 'ADHD (Poremećaj pažnje i hiperaktivnost)',
          icon: Zap,
          color: 'var(--adhd-color)',
          description: 'ADHD je stanje koje utiče na sposobnost održavanja pažnje, kontrole impulsa i regulacije aktivnosti. Osobe sa ADHD-om često pokazuju kreativnost, energiju i sposobnost brzog rješavanja problema.'
        },
        {
          id: 'dcd',
          title: 'DCD (Poremećaj koordinacije razvoja)',
          icon: Hand,
          color: 'var(--dcd-color)',
          description: 'DCD je stanje koje utiče na motoričke veštine i koordinaciju pokreta. Osobe sa DCD-om mogu imati poteškoće sa finommotoričkim ili krupnomotoričkim aktivnostima, ali često razvijaju kreativne strategije prilagođavanja.'
        },
        {
          id: 'sld',
          title: 'SLD (Specifične poteškoće u učenju)',
          icon: BookOpen,
          color: 'var(--sld-color)',
          description: 'SLD obuhvata različite poteškoće u učenju kao što su disleksija, disgrafija i diskalkulija. Osobe sa SLD-om često imaju prosečnu ili iznadprosečnu inteligenciju i mogu biti vrlo kreativne u rešavanju problema.'
        },
        {
          id: 'ts',
          title: 'TS (Touretteov sindrom)',
          icon: Sparkles,
          color: 'var(--ts-color)',
          description: 'Touretteov sindrom je neurološko stanje karakterisano nehotičnim pokretima i glasovima koji se nazivaju tikovi. Mnoge osobe sa TS-om pokazuju kreativnost, fokusiranost i jedinstvene talente.'
        }
      ]
    },
    en: {
      sectionTitle: 'The Importance of Neurodiversity',
      sectionDescription: 'Neurodiversity enriches our communities through different perspectives, talents, and problem-solving approaches. Learn more about various neurodivergent conditions.',
      clickForMore: 'Click for more information',
      conditions: [
        {
          id: 'asd',
          title: 'ASD (Autism Spectrum Disorder)',
          icon: Brain,
          color: 'var(--autism-color)',
          description: 'Autism Spectrum Disorder (ASD) is a neurological condition that affects communication, social interactions, and behavior. People with ASD may have unique ways of processing information and interacting with the world around them.'
        },
        {
          id: 'adhd',
          title: 'ADHD (Attention Deficit Hyperactivity Disorder)',
          icon: Zap,
          color: 'var(--adhd-color)',
          description: 'ADHD is a condition that affects the ability to maintain attention, control impulses, and regulate activity. People with ADHD often show creativity, energy, and the ability to solve problems quickly.'
        },
        {
          id: 'dcd',
          title: 'DCD (Developmental Coordination Disorder)',
          icon: Hand,
          color: 'var(--dcd-color)',
          description: 'DCD is a condition that affects motor skills and movement coordination. People with DCD may have difficulties with fine motor or gross motor activities, but often develop creative adaptation strategies.'
        },
        {
          id: 'sld',
          title: 'SLD (Specific Learning Disabilities)',
          icon: BookOpen,
          color: 'var(--sld-color)',
          description: 'SLD encompasses various learning difficulties such as dyslexia, dysgraphia, and dyscalculia. People with SLD often have average or above-average intelligence and can be very creative in problem-solving.'
        },
        {
          id: 'ts',
          title: 'TS (Tourette Syndrome)',
          icon: Sparkles,
          color: 'var(--ts-color)',
          description: 'Tourette Syndrome is a neurological condition characterized by involuntary movements and sounds called tics. Many people with TS show creativity, focus, and unique talents.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: 'var(--background-white)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 text-center md:text-left">
            <h2
              className="mb-4"
              style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
            >
              {text.sectionTitle}
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: 'var(--text-dark)' }}
            >
              {text.sectionDescription}
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block">
            <img
              src={illustrationImg}
              alt="Neurodiverzitet ilustracija"
              style={{
                width: '280px',
                height: 'auto',
                opacity: 0.85
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.conditions.map((condition) => {
            const IconComponent = condition.icon;
            
            return (
              <Card 
                key={condition.id} 
                className="transition-all duration-300 hover:shadow-lg cursor-pointer border-0"
                style={{ backgroundColor: condition.color }}
                onClick={() => { onSectionChange(condition.id); window.scrollTo({ top: 0 }); }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent 
                      className="h-8 w-8" 
                      style={{ color: condition.id === 'ts' ? '#fffff3' : 'var(--text-dark)' }}
                    />
                    <CardTitle 
                      className="text-lg"
                      style={{ 
                        color: condition.id === 'ts' ? '#fffff3' : 'var(--text-dark)',
                        fontWeight: '600'
                      }}
                    >
                      {condition.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-sm"
                    style={{ color: condition.id === 'ts' ? '#fffff3' : 'var(--text-dark)' }}
                  >
                    {text.clickForMore}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}