import React, { useState } from 'react';
import { BookOpen, Brain, Zap, Calculator, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface SLDSectionProps {
  language: 'bs' | 'en';
}

export function SLDSection({ language }: SLDSectionProps) {
  const [activeTab, setActiveTab] = useState('info');

  const content = {
    bs: {
      title: 'SLD',
      subtitle: 'specifične poteškoće u učenju',
      description: 'SLD označava stanje u jednom ili više osnovnih psiholoških procesa koji su uključeni u razumevanje ili korišćenje jezika, govornog ili pisanog, koji se može manifestovati u nesavršenoj sposobnosti slušanja, razmišljanja, govora, čitanja, pisanja, spelovanja ili obavljanja matematičkih proračuna.',
      characteristicsTitle: 'Karakteristike SLD-a',
      characteristicsText: 'Osobe sa specifičnim teškoćama u učenju mogu biti brilijantni u određenim oblastima dok se suočavaju sa izazovima u drugim. Na primer, neko može imati poteškoće sa čitanjem i pisanjem, ali istovremeno biti odličan u matematici ili usmenoj komunikaciji. Uobičajeni pokazatelji SLD-a mogu uključivati teškoće u povezivanju slova sa zvucima, zbunjenost sa osnovnim rečnikom i probleme sa izgovaranjem reči, naročito kod dece predškolskog uzrasta.',
      characteristicsContinued: 'Mogu biti prisutne i otežane sposobnosti dekodiranja, slabe radne memorije, što direktno utiče na akademski razvoj. Istraživanja tvrde da osobe sa SLD-om često imaju problem i sa pažnjom, što ometa njihovu uspešno izvršavanje određenih aktivnosti ili zadataka, zbog toga se na bihevioralnom nivou često primećuje otežana kontrola impulsa, povećana frustracija i sklonost povlačenja od obavljanja određenih zadataka, što dovodi do razvijanje negativne slike o sebi i niskog samopouzdanja.',
      typesTitle: 'Podela SLD-a',
      typesIntro: 'Prema DSM-5 prepoznata su 3 osnovna tipa SLD-a, a to su:',
      type1Title: 'Disleksija',
      type1Desc: 'Specifična teškoća u učenju koja pogađa 3 do 10% populacije, prvenstveno utiče na čitanje i povezane jezičke procese. Osobe sa disleksijom često imaju poteškoće sa fonemskom svesnošću, dekodiranjem reči i tečnošću čitanja, što može dovesti do problema sa gramatikom, razumevanjem pročitanog i opštim jezičkim veštinama. Poznato je da disleksija ne utiče na opštu inteligenciju.',
      type2Title: 'Diskalkulija',
      type2Desc: 'Diskalkulija se može javiti kod bilo koga, ali često prvi put privlači pažnju kada su djeca u prvim razredima osnovne škole (između 6. i 9. godine). Predstavlja teškoću pojedinca da razume brojčane obrasce i obavlja osnovne računarske operacije, a otežano brojanje i čitanje vremena spadaju u prve simptome. Iako neuobičajena, diskalkulija je rasprostranjena i procenjuje se da pogađa između 3% i 7% ljudi širom sveta.',
      type3Title: 'Disgrafija',
      type3Desc: 'Disgrafija je česta pojava. Istraživači procenjuju da od 5% do 20% ljudi ima disgrafiju. Ovaj široki procenjeni raspon posledica je činjenica da se disgrafija često ne dijagnostikuje ili se pogrešno dijagnostikuje. Manifestuje se kroz teškoće u pisanju, koje se ogledaju kroz loš rukopis, organizacije misli na papiru, probleme sa pravopisom i gramatikom.',
      lifeWithTitle: 'Život sa SLD-om',
      lifeWithText: 'Kod dece sa SLD-om važnu ulogu predstavlja rana intervencija i samo dijagnostikovanje, važna je podrška porodice, zdravstvenih radnika i škole kao obrazovne institucije. SLD se manifestuje kroz otežano čitanje, pisanje, računanje i često se može smatrati manom kod deteta, a zapravo je reč o neurorazvojnom stanju. Zbog toga porodice trebaju pružiti kako praktičnu tako i emocionalnu podršku.',
      lifeWithContinued: 'Kada govorimo o SLD-u i simptomima kod odraslih, istraživanja pokazuju da se osobe sa SLD-om znaju susresti sa težim formiranjem romantičnih veza zbog komunikacijskih prepreka. Najveći problem se ogleda na akademske performanse i savladavanje gradiva, što često dovodi do odustajanja od školovanja.'
    },
    en: {
      title: 'SLD',
      subtitle: 'specific learning disabilities',
      description: 'SLD refers to a condition in one or more basic psychological processes involved in understanding or using language, spoken or written, which may manifest in imperfect ability to listen, think, speak, read, write, spell, or perform mathematical calculations.',
      characteristicsTitle: 'Characteristics of SLD',
      characteristicsText: 'People with specific learning disabilities can be brilliant in certain areas while facing challenges in others. For example, someone may have difficulties with reading and writing, but be excellent in mathematics or oral communication. Common indicators of SLD may include difficulties in connecting letters with sounds, confusion with basic vocabulary, and problems with word pronunciation, especially in preschool children.',
      characteristicsContinued: 'There may also be impaired decoding abilities, weak working memory, which directly affects academic development. Research claims that people with SLD often have problems with attention, which interferes with their successful performance of certain activities or tasks, which is why impaired impulse control, increased frustration and tendency to withdraw from performing certain tasks are often observed at the behavioral level, leading to the development of a negative self-image and low self-confidence.',
      typesTitle: 'Classification of SLD',
      typesIntro: 'According to DSM-5, there are 3 basic types of SLD:',
      type1Title: 'Dyslexia',
      type1Desc: 'A specific learning difficulty that affects 3 to 10% of the population, primarily affecting reading and related language processes. People with dyslexia often have difficulties with phonemic awareness, word decoding, and reading fluency, which can lead to problems with grammar, reading comprehension, and general language skills. It is known that dyslexia does not affect general intelligence.',
      type2Title: 'Dyscalculia',
      type2Desc: 'Dyscalculia can occur in anyone, but it often first draws attention when children are in the first grades of primary school (ages 6 to 9). It represents an individual\'s difficulty in understanding numerical patterns and performing basic arithmetic operations. Difficulty counting and reading time are among the first symptoms. Although uncommon, dyscalculia is widespread and estimated to affect between 3% and 7% of people worldwide.',
      type3Title: 'Dysgraphia',
      type3Desc: 'Dysgraphia is a common occurrence. Researchers estimate that between 5% and 20% of people have dysgraphia. This wide range of estimates is due to the fact that dysgraphia is often not diagnosed or is misdiagnosed. It manifests through writing difficulties, which are reflected through poor handwriting, organization of thoughts on paper, problems with spelling and grammar.',
      lifeWithTitle: 'Life with SLD',
      lifeWithText: 'In children with SLD, early intervention and diagnosis itself play an important role, support from family, healthcare workers and schools as educational institutions is important. SLD manifests through difficult reading, writing, calculating and can often be considered a flaw in a child, but it is actually a neurodevelopmental condition. Therefore, families need to provide both practical and emotional support.',
      lifeWithContinued: 'When we talk about SLD and symptoms in adults, research shows that people with SLD can encounter difficulties in forming romantic relationships due to communication barriers. The biggest problem is reflected in academic performance and mastering material, which often leads to dropping out of school.'
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4 sld-animated-bg"
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
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
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
          
          <p>
            {text.characteristicsContinued}
          </p>

          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.typesTitle}
          </h2>
          
          <p>
            {text.typesIntro}
          </p>
          
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--sld-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.type1Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.type1Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--sld-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Calculator className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.type2Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.type2Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--sld-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <PenTool className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.type3Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.type3Desc}
                    </p>
                  </div>
                </div>
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
          
          <p>
            {text.lifeWithContinued}
          </p>
        </div>
      </div>
    </section>
  );
}