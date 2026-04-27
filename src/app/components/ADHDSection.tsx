import React, { useState } from 'react';
import { Zap, Users, Heart, Lightbulb, Shield, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ADHDSectionProps {
  language: 'bs' | 'en';
}

export function ADHDSection({ language }: ADHDSectionProps) {
  const [activeTab, setActiveTab] = useState('info');

  const content = {
    bs: {
      title: 'ADHD',
      subtitle: 'poremećaj hiperaktivnosti i pažnje',
      description: 'ADHD je neurorazvojno stanje, gde su simptomi, povezana ponašanja i osobine, rezultat različitog razvoja mozga osobe tokom ključnih faza razvoja pre nego što su rođene ili su nastale u mlađoj dobi. Istraživanja pokazuju da ADHD pogađa oko 5% mlađe populacije i 2,5% odraslih u svetu. Kao i kod autizma, postoje razne debate oko ADHD-a, naročito u vezi sa etiologijom, dijagnozom i tretmanom. Ističe se važnost pravovremene i sveobuhvatne podrške koja uključuje terapiju, obrazovne strategije i rad sa porodicom.',
      characteristicsTitle: 'Karakteristike',
      characteristicsText: 'Glavne karakteristike ADHD-a se ogledaju kroz nepažnju, hiperaktivnost i impulsivnost. Ovi simptomi mogu narušiti sposobnost pojedinca u akademskom, socijalnom i profesionalnom segmentu. Simptomi mogu vremenom menjati svoj intenzitet i izraženost, a kod različitih osoba mogu izgledati potpuno drugačije. Najčešće se javljaju pre 12. godine života i mogu da se razvijaju tokom odraslog doba, dovodeći do problema sa upravljanjem vremenom, emocionalnom regulacijom i međuljudskim odnosima.',
      subtypesTitle: 'Podtipovi',
      subtypesIntro: 'Poremećaj pažnje/hiperaktivnosti (ADHD) klasifikuje se u tri glavna podtipa, koji se određuju na osnovu preovlađujućih simptoma nepažnje i hiperaktivno-impulsivnosti, prema Dijagnostičkom i statističkom priručniku za mentalne poremećaje, peta revizija (DSM-5).',
      subtype1Title: 'Pretežno nepažljiva prezentacija (ADHD-I)',
      subtype1Desc: 'Osobe sa ovim podtipom uglavnom ispoljavaju simptome nepažnje. Karakteristike koje predstavljaju ovaj tip uključuju učestalo zaboravljanje, dezorganizovanost, teškoće u održavanju pažnje tokom zadataka ili aktivnosti u igri, kao i problem u doslednom izvršavanju uputstava.',
      subtype2Title: 'Pretežno hiperaktivno-impulsivna prezentacija (ADHD-H)',
      subtype2Desc: 'Kod ovog podtipa, hiperaktivnost i impulsivnost su dominantne karakteristike. Simptomi mogu uključivati prekomerno mrdanje, nemir, upadanje u reč drugima i postupanje bez razmišljanja o posledicama. Iako se hiperaktivnost može smanjivati sa godinama, osobe često nastavljaju da imaju izraženu impulsivnost i teškoće u samoregulaciji.',
      subtype3Title: 'Kombinovana prezentacija (ADHD-C)',
      subtype3Desc: 'Kombinovani tip predstavlja mešavinu simptoma. Osobe sa ovim podtipom ispunjavaju kriterijume i za ADHD-I i za ADHD-H, što dovodi do šireg spektra izazova u upravljanju svakodnevnim aktivnostima i obavezama.',
      lifeWithTitle: 'Život sa ADHD-om',
      lifeWithText: 'ADHD značajno utiče na socijalno, akademsko i profesionalno funkcionisanje, shodno tome predstavlja izazov kako za pojedince, tako i za njihove porodice. Osobe sa ADHD-om se često suočavaju sa osećajem frustracije i nedovoljnosti zbog prepreka na koje nailaze u učenju, socijalnim interakcijama i održavanju organizacije. Efikasno upravljanje ADHD-om najčešće uključuje kombinaciju medikamentozne terapije, bihevioralnih terapija, edukativne podrške i strategija upravljanja životnim stilom. Veliki značaj ima rana intervencija, jer pravovremeno pružena podrška može poboljšati ishode u obrazovanju, socijalnim odnosima i emocionalnoj regulaciji.'
    },
    en: {
      title: 'ADHD',
      subtitle: 'attention deficit hyperactivity disorder',
      description: 'ADHD is a neurodevelopmental condition where symptoms, related behaviors, and traits are the result of different brain development during key developmental phases before a person is born or occurred at a young age. Research shows that ADHD affects about 5% of the younger population and 2.5% of adults worldwide. As with autism, there are various debates about ADHD, especially regarding etiology, diagnosis, and treatment. The importance of timely and comprehensive support that includes therapy, educational strategies, and family work is emphasized.',
      characteristicsTitle: 'Characteristics',
      characteristicsText: 'The main characteristics of ADHD are manifested through inattention, hyperactivity, and impulsivity. These symptoms can impair an individual\'s ability in academic, social, and professional segments. Symptoms can change their intensity and severity over time, and may look completely different in different people. They most commonly appear before age 12 and can develop during adulthood, leading to problems with time management, emotional regulation, and interpersonal relationships.',
      subtypesTitle: 'Subtypes',
      subtypesIntro: 'Attention Deficit/Hyperactivity Disorder (ADHD) is classified into three main subtypes, which are determined based on the predominant symptoms of inattention and hyperactive-impulsivity, according to the Diagnostic and Statistical Manual of Mental Disorders, Fifth Revision (DSM-5).',
      subtype1Title: 'Predominantly Inattentive Presentation (ADHD-I)',
      subtype1Desc: 'People with this subtype mainly exhibit symptoms of inattention. Characteristics that represent this type include frequent forgetfulness, disorganization, difficulty maintaining attention during tasks or play activities, as well as problems in consistently following instructions.',
      subtype2Title: 'Predominantly Hyperactive-Impulsive Presentation (ADHD-H)',
      subtype2Desc: 'In this subtype, hyperactivity and impulsivity are dominant characteristics. Symptoms may include excessive fidgeting, restlessness, interrupting others, and acting without thinking about consequences. Although hyperactivity may decrease with age, people often continue to have pronounced impulsivity and difficulties in self-regulation.',
      subtype3Title: 'Combined Presentation (ADHD-C)',
      subtype3Desc: 'The combined type represents a mixture of symptoms. People with this subtype meet criteria for both ADHD-I and ADHD-H, leading to a broader spectrum of challenges in managing daily activities and obligations.',
      lifeWithTitle: 'Life with ADHD',
      lifeWithText: 'ADHD significantly affects social, academic, and professional functioning, thus representing a challenge for both individuals and their families. People with ADHD often face feelings of frustration and inadequacy due to obstacles they encounter in learning, social interactions, and maintaining organization. Effective ADHD management most often includes a combination of medication therapy, behavioral therapies, educational support, and lifestyle management strategies. Early intervention is of great importance, as timely support can improve outcomes in education, social relationships, and emotional regulation.'
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4 adhd-animated-bg"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 
            className="mb-2"
            style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
          >
            {text.title}
          </h1>
          <h2 
            className="text-lg"
            style={{ color: 'var(--text-dark)' }}
          >
            {text.subtitle}
          </h2>
        </div>
        
        <div 
          className="text-justify space-y-6 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dark)' }}
        >
          <p>
            {text.description}
          </p>
          
          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.characteristicsTitle}
          </h2>
          
          <p>
            {text.characteristicsText}
          </p>

          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.subtypesTitle}
          </h2>
          
          <p>
            {text.subtypesIntro}
          </p>
          
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--adhd-color)' }}
            >
              <CardContent className="p-6">
                <h4 
                  className="mb-3"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.subtype1Title}
                </h4>
                <p style={{ color: 'var(--text-dark)' }}>
                  {text.subtype1Desc}
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--adhd-color)' }}
            >
              <CardContent className="p-6">
                <h4 
                  className="mb-3"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.subtype2Title}
                </h4>
                <p style={{ color: 'var(--text-dark)' }}>
                  {text.subtype2Desc}
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--adhd-color)' }}
            >
              <CardContent className="p-6">
                <h4 
                  className="mb-3"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.subtype3Title}
                </h4>
                <p style={{ color: 'var(--text-dark)' }}>
                  {text.subtype3Desc}
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.lifeWithTitle}
          </h3>
          
          <p>
            {text.lifeWithText}
          </p>
        </div>
      </div>
    </section>
  );
}