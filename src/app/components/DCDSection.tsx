import React, { useState } from 'react';
import { Target, PersonStanding, Hand, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface DCDSectionProps {
  language: 'bs' | 'en';
}

export function DCDSection({ language }: DCDSectionProps) {
  const [activeTab, setActiveTab] = useState('info');

  const content = {
    bs: {
      title: 'DCD',
      subtitle: 'razvojni poremećaj koordinacije',
      description: 'Razvojni poremećaj koordinacije (DCD) je neurološki razvojni poremećaj koji se prvenstveno karakteriše značajnim teškoćama u motoričkoj koordinaciji, što ometa svakodnevne aktivnosti. Često se identifikuje u detinjstvu, a manifestuje se kao nespretnost, loša ravnoteža i izazovi u izvođenju kako grube, tako i fine motorike, što dovodi do poteškoća u obavljanju zadataka poput pisanja, trčanja i učestvovanja u društvenim interakcijama. Poremećaj pogađa otprilike 5–6% dece.',
      continuedDescription: 'DCD često se manifestuje i kroz odrastanje, što utiče na njihov akademski ili profesionalni uspeh, jer su i dalje prisutne poteškoće u učenju novih motoričkih veština i primeni prethodno stečenih sposobnosti u različitim kontekstima. DCD se često dijagnostikuje kroz različite standardizovane alate, poput radne i fizičke terapije, koje imaju za cilj poboljšavanje motoričkih i socijalnih sposobnosti, emocionalnog stanja.',
      symptomsTitle: 'Simptomi',
      symptomsIntro: 'Simptomi DCD-a se ogledaju kroz veštine fine i grube motorike.',
      symptom1Title: 'Nespretnost i nezgrapnost',
      symptom1Desc: 'Deca sa DCD-om često se predstavljaju kao „nespretna", jer često ispuštaju predmete ili udaraju o stvari. Mogu imati poteškoća sa zadacima koji zahtevaju precizne pokrete, poput pisanja, korišćenja makaza ili vezivanja pertli.',
      symptom2Title: 'Kašnjenje u razvoju motoričkih veština',
      symptom2Desc: 'Kod dece se mogu primetiti kašnjenja u dostizanju razvojnih prekretnica, kao što su samostalno sedenje, puzanje ili hodanje, kao i poteškoće sa aktivnostima poput žvakanja i gutanja u ranom detinjstvu.',
      symptom3Title: 'Izazovi u svakodnevnim aktivnostima',
      symptom3Desc: 'Svakodnevne aktivnosti mogu predstavljati značajne izazove, uključujući oblačenje, pranje zuba i korišćenje pribora za jelo.',
      additionalInfo: 'Pored navedenih poteškoća koje se ogledaju kroz motoričku koordinaciju, DCD mogu pratiti i loša prostorna svest, problemi sa organizacijom i planiranjem i poteškoće u socijalnim situacijama. Ove karakteristike se češće manifestuju u odrasloj dobi.',
      subtypesTitle: 'Podtipovi DCD-a',
      subtypesIntro: 'Najnovija istraživanja identifikovala su nekoliko podtipova DCD-a zasnovanih na motoričkom, vizuomotoričkom i kognitivnom funkcionisanju, što pruža jasnije razumevanje manifestacije DCD-a kod dece.',
      subtype1Title: 'Generalizovani motorički problemi',
      subtype1Desc: 'Među identifikovanim podtipovima, dva se karakterišu kao generalizovani motorički problemi. Ovi podtipovi se razlikuju po težini, što znači da, iako oba pokazuju rasprostranjene motoričke poteškoće, jedan podtip ima izraženije izazove od drugog. Deca unutar ovih kategorija mogu imati značajne poteškoće u izvođenju kako grubo, tako i fino-motoričkih zadataka, što utiče na njihove svakodnevne aktivnosti i proces učenja.',
      subtype2Title: 'Problemi sa grubo-motoričkim veštinama',
      subtype2Desc: 'Deca u ovoj grupi mogu imati poteškoća sa većim pokretima koji zahtevaju značajnu fizičku koordinaciju, kao što su trčanje, skakanje ili hvatanje lopte. Ovi izazovi mogu ozbiljno uticati na učešće u sportskim i fizičkim aktivnostima, što dovodi do smanjenog angažmana i samopouzdanja.',
      subtype3Title: 'Problemi sa fino- i vizuomotoričkim veštinama',
      subtype3Desc: 'Deca pogođena ovim podtipom često se suočavaju sa izazovima u zadacima koji zahtevaju preciznu koordinaciju ruka-oko i kontrolu fine motorike, kao što su pisanje, crtanje i manipulacija malim predmetima.',
      lifeWithTitle: 'Život sa DCD-om',
      lifeWithText: 'DCD vidno utiče na obavljanje svakodnevnih aktivnosti i učešće u različitim društvenim situacijama, poput školskih i rutinskih zadataka ili igre. Ukoliko se ne uspostavi rana intervencija dete može razviti nisko samopouzdanje što dovodi do ograničene socijalne interakcije. Porodice osoba sa DCD-om iskazuju zabrinutonost zbog sekundarnih efekata poput gojaznosti ili razvoja mentalnih problema.'
    },
    en: {
      title: 'DCD',
      subtitle: 'developmental coordination disorder',
      description: 'Developmental Coordination Disorder (DCD) is a neurological developmental disorder primarily characterized by significant difficulties in motor coordination, which interferes with daily activities. It is often identified in childhood and manifests as clumsiness, poor balance, and challenges in performing both gross and fine motor skills, leading to difficulties in performing tasks such as writing, running, and participating in social interactions. The disorder affects approximately 5-6% of children.',
      continuedDescription: 'DCD often manifests through adulthood, affecting their academic or professional success, as difficulties persist in learning new motor skills and applying previously acquired abilities in different contexts. DCD is often diagnosed through various standardized tools, including occupational and physical therapy, which aim to improve motor and social abilities, and emotional state.',
      symptomsTitle: 'Symptoms',
      symptomsIntro: 'Symptoms of DCD are reflected through fine and gross motor skills.',
      symptom1Title: 'Clumsiness and awkwardness',
      symptom1Desc: 'Children with DCD often present as "clumsy" because they frequently drop objects or bump into things. They may have difficulties with tasks requiring precise movements, such as writing, using scissors, or tying shoelaces.',
      symptom2Title: 'Delays in motor skill development',
      symptom2Desc: 'In children, delays may be noticed in reaching developmental milestones, such as sitting independently, crawling, or walking, as well as difficulties with activities like chewing and swallowing in early childhood.',
      symptom3Title: 'Challenges in daily activities',
      symptom3Desc: 'Daily activities can present significant challenges, including dressing, brushing teeth, and using eating utensils.',
      additionalInfo: 'In addition to the mentioned difficulties reflected through motor coordination, DCD may also be accompanied by poor spatial awareness, problems with organization and planning, and difficulties in social situations. These characteristics are more commonly manifested in adulthood.',
      subtypesTitle: 'DCD Subtypes',
      subtypesIntro: 'Recent research has identified several subtypes of DCD based on motor, visuomotor, and cognitive functioning, providing clearer understanding of DCD manifestations in children.',
      subtype1Title: 'Generalized motor problems',
      subtype1Desc: 'Among the identified subtypes, two are characterized as generalized motor problems. These subtypes differ in severity, meaning that although both show widespread motor difficulties, one subtype has more pronounced challenges than the other. Children within these categories may have significant difficulties performing both gross and fine motor tasks, affecting their daily activities and learning process.',
      subtype2Title: 'Gross motor skill problems',
      subtype2Desc: 'Children in this group may have difficulties with larger movements requiring significant physical coordination, such as running, jumping, or catching a ball. These challenges can seriously affect participation in sports and physical activities, leading to reduced engagement and self-confidence.',
      subtype3Title: 'Fine and visuomotor skill problems',
      subtype3Desc: 'Children affected by this subtype often face challenges in tasks requiring precise hand-eye coordination and fine motor control, such as writing, drawing, and manipulating small objects.',
      lifeWithTitle: 'Life with DCD',
      lifeWithText: 'DCD significantly affects the performance of daily activities and participation in various social situations, such as school and routine tasks or play. If early intervention is not established, the child may develop low self-confidence leading to limited social interaction. Families of people with DCD express concern about secondary effects such as obesity or the development of mental health problems.'
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4 dcd-animated-bg"
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
          
          <p>
            {text.continuedDescription}
          </p>
          
          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.symptomsTitle}
          </h2>
          
          <p>
            {text.symptomsIntro}
          </p>
          
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--dcd-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Hand className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.symptom1Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.symptom1Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--dcd-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Activity className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.symptom2Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.symptom2Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--dcd-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.symptom3Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.symptom3Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p>
            {text.additionalInfo}
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
          
          <p>
            <strong>{text.subtype1Title}:</strong> {text.subtype1Desc}
          </p>
          
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--dcd-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <PersonStanding className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.subtype2Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.subtype2Desc}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--dcd-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Hand className="h-6 w-6 mt-1 flex-shrink-0" style={{ color: 'var(--text-dark)' }} />
                  <div>
                    <h4 
                      className="mb-3"
                      style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                    >
                      {text.subtype3Title}
                    </h4>
                    <p style={{ color: 'var(--text-dark)' }}>
                      {text.subtype3Desc}
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
        </div>
      </div>
    </section>
  );
}