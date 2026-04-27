import React, { useState } from 'react';
import { Brain, Users, Heart, Lightbulb, Shield, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ASDSectionProps {
  language: 'bs' | 'en';
}

export function ASDSection({ language }: ASDSectionProps) {
  const [activeTab, setActiveTab] = useState('info');

  const t = {
    bs: {
      title: "Autizam",
      intro: "Autizam predstavlja neurološku i razvojnu varijaciju koja utiče na to kako ljudi doživljavaju svet i komuniciraju sa njim. Autizam karakterizira kombinacija društvenih deficita, komunikacijskih problema i skup ritualnih interesa i ponašanja. Ovi osnovni nedostaci prvenstveno utiče na sposobnost djeteta da se poveže s vanjskim svijetom. Autizam nije stanje izazvano jednim uzrokom, nego je to skup simptoma koji objedinjuju deficite u socijalizaciji i komunikaciji te u ograničenim interesima, koji se pojavljuju u ranom djetinjstvu.",
      research: "Nova istraživanja ukazuju da oko 1% svetske populacije poseduje autizam i da se stopa dijagnoze zahvaljujući većoj svesti, unapređenim metodama skrininga, dijagnostičkim kriterijumima, povećava. Debate oko autizma su i dalje prisutne, najčešće se postavlja pitanje etiologije autizma i njegovog tretmana. Naučni konsenzus odbacuje tvrdnju da su vakcine uzrok autizma.",
      characteristicsTitle: "Karakteristike",
      characteristics: "Glavne karakteristike autizma se manifestuju kroz socijalnu komunikaciju sa ograničenim repetitivnim obrascima ponašanja, koji se ogledaju kroz interese i aktivnosti. Eholalija (ponavljanje reći ili fraza), potenciranje istog svakodnevnog ritma u rutinama, stres koji nastupi kada dođe do promene plana su specifične karakteristike autistične osobe. Interesovanja za određene predmete ili teme, senzorno opterećenje poput hiposenzitivnosti (smanjenje senzorne osetljivosti) ili hipersenzitivnosti (senzorne preosetljivosti) na određene senzorne podražaje, kao što su zvuk, svetlost, dodir.",
      communicationTitle: "Razlike u komunikaciji",
      communication: "Osobe iz spektra autizma često imaju različite sposobnosti u komunikaciji. Mogu biti neverbalni ili verbalni ili pak posedovati određene teškoće u socijalnoj komunikaciji. Alternativne metode komunikacije se upravo koriste radi olakšavanja svakodnevne komunikacije.",
      symptomsTitle: "Simptomi",
      symptomsIntro: "Simptomi autizma se svrstavaju u dve kategorije:",
      socialDifficulties: "1. Teškoće u socijalnoj komunikaciji i interakciji",
      socialDescription: "Manifestuju se kao poteškoće u razumevanju figurativnog jezika, izvođenju zaključaka i tumačenju dvosmislenih značenja; teškoće u započinjanju i održavanju razgovora, uključujući naizmenično učešće i deljenje interesovanja ili emocija; poteškoće u razumevanju tuđih misli i osećanja, što može dovesti do otežanih socijalnih odnosa; teškoće u ostvarivanju kontakta očima i tumačenju suptilnih gestova ili izraza lica, što dodatno komplikuje socijalne interakcije.",
      restrictedBehaviors: "2. Ograničena i repetitivna ponašanja",
      behaviorDescription: "Repetitivni pokreti, poput mahanja rukama ili ljuljanja, naročito u stanjima uzbuđenja ili stresa; insistiranje na istosti i rutini, što izaziva nelagodnost kada se rutina prekine; intenzivan fokus na određene teme ili aktivnosti, često na račun drugih oblasti interesovanja; senzorna disregulacija, koja može dovesti do hiper- ili hipoosetljivosti na podražaje poput zvukova, tekstura ili svetlosti.",
      symptomsConclusion: "Navedeni simptomi se razlikuju kod pojedinaca i javljaju se u nekoliko stanja kao što su intelektualni poremećaj i opsesivno-kompulzivni poremećaj.",
      supportLevelTitle: "Nivo podrške",
      supportIntro: "Težina simptoma se procenjuje na osnovu nivoa podrške koja im je potrebna za svakodnevno funkcionisanje. To se kategorizuje u tri nivoa:",
      level1: "Nivo 1",
      level1Desc: "zahteva podršku",
      level2: "Nivo 2",
      level2Desc: "zahteva značajnu podršku",
      level3: "Nivo 3",
      level3Desc: "zahteva veoma značajnu podršku",
      manifestation: "Manifestacija simptoma može zavisiti od različitih faktora, uključujući razvojni nivo, uzrast i zahteve okruženja, što može dodatno otežati dijagnozu.",
      lifeTitle: "Život sa autizmom",
      lifeDescription: "Svako dete iz spektra autizma je različito, njihovi zahtevi i sposobnosti se mogu menjati tokom vremena. Zbog toga porodice često stupaju u kreiranje individualizovanih planova tretmana i edukacije, koji mogu obuhvatati različite intervencije poput govorno-jezičke terapije, primene analize ponašanja (ABA), medikamentozne terapije ili treninga socijalnih veština. Veliki značaj predstavlja rana intervencija, jer pravovremena podrška može poboljšati ishode u komunikaciji i socijalnoj interakciji. Neophodno je namerno angažovanje u interakciji. Strpljenje i uloga svakog člana porodice, prijatelja, podrška zajednice je veoma važna za razvoj i kvalitet života osobe sa autizmom."
    },
    en: {
      title: "Autism",
      intro: "Autism represents a neurological and developmental variation that affects how people experience the world and communicate with it. Autism is characterized by a combination of social deficits, communication problems and a set of ritual interests and behaviors. These basic deficiencies primarily affect the child's ability to connect with the outside world. Autism is not a condition caused by a single cause, but it is a set of symptoms that combine deficits in socialization and communication and in limited interests, which appear in early childhood.",
      research: "New research indicates that about 1% of the world's population has autism and that the diagnosis rate is increasing thanks to greater awareness, improved screening methods, diagnostic criteria. Debates about autism are still present, the question of the etiology of autism and its treatment is most often raised. Scientific consensus rejects the claim that vaccines cause autism.",
      characteristicsTitle: "Characteristics",
      characteristics: "The main characteristics of autism are manifested through social communication with limited repetitive patterns of behavior, which are reflected through interests and activities. Echolalia (repetition of words or phrases), emphasizing the same daily rhythm in routines, stress that occurs when the plan changes are specific characteristics of an autistic person. Interests in certain objects or topics, sensory load such as hyposensitivity (reduced sensory sensitivity) or hypersensitivity (sensory oversensitivity) to certain sensory stimuli, such as sound, light, touch.",
      communicationTitle: "Communication Differences",
      communication: "People on the autism spectrum often have different communication abilities. They can be non-verbal or verbal or have certain difficulties in social communication. Alternative communication methods are used to facilitate everyday communication.",
      symptomsTitle: "Symptoms",
      symptomsIntro: "Autism symptoms are classified into two categories:",
      socialDifficulties: "1. Difficulties in social communication and interaction",
      socialDescription: "They manifest as difficulties in understanding figurative language, drawing conclusions and interpreting ambiguous meanings; difficulties in initiating and maintaining conversations, including alternating participation and sharing interests or emotions; difficulties in understanding other people's thoughts and feelings, which can lead to difficult social relationships; difficulties in making eye contact and interpreting subtle gestures or facial expressions, which further complicates social interactions.",
      restrictedBehaviors: "2. Limited and repetitive behaviors",
      behaviorDescription: "Repetitive movements, such as arm waving or rocking, especially in states of excitement or stress; insisting on sameness and routine, which causes discomfort when the routine is interrupted; intense focus on certain topics or activities, often at the expense of other areas of interest; sensory dysregulation, which can lead to hyper- or hyposensitivity to stimuli such as sounds, textures or light.",
      symptomsConclusion: "The mentioned symptoms differ among individuals and occur in several conditions such as intellectual disorder and obsessive-compulsive disorder.",
      supportLevelTitle: "Support Level",
      supportIntro: "The severity of symptoms is assessed based on the level of support they need for daily functioning. This is categorized into three levels:",
      level1: "Level 1",
      level1Desc: "requires support",
      level2: "Level 2",
      level2Desc: "requires substantial support",
      level3: "Level 3",
      level3Desc: "requires very substantial support",
      manifestation: "The manifestation of symptoms may depend on various factors, including developmental level, age and environmental demands, which may further complicate diagnosis.",
      lifeTitle: "Living with Autism",
      lifeDescription: "Every child on the autism spectrum is different, their needs and abilities can change over time. Therefore, families often engage in creating individualized treatment and education plans, which may include various interventions such as speech-language therapy, applied behavior analysis (ABA), medication therapy or social skills training. Early intervention is of great importance, as timely support can improve outcomes in communication and social interaction. Deliberate engagement in interaction is essential. The patience and role of every family member, friends, community support is very important for the development and quality of life of a person with autism."
    }
  };

  const currentLang = t[language];

  return (
    <section 
      className="py-16 px-4 autism-animated-bg"
    >
      <div className="container mx-auto max-w-4xl">
        <h1 
          className="text-center mb-8"
          style={{ color: 'var(--text-dark)', fontWeight: '600', fontSize: '23px' }}
        >
          {currentLang.title}
        </h1>
        
        <div 
          className="text-justify space-y-6 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dark)' }}
        >
          <p>
            {currentLang.intro}
          </p>
          
          <p>
            {currentLang.research}
          </p>

          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {currentLang.characteristicsTitle}
          </h2>
          
          <p>
            {currentLang.characteristics}
          </p>

          <h3 
            className="text-lg mb-3 mt-6"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {currentLang.communicationTitle}
          </h3>
          
          <p>
            {currentLang.communication}
          </p>

          <h3 
            className="text-lg mb-3 mt-6"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {currentLang.symptomsTitle}
          </h3>
          
          <p>
            {currentLang.symptomsIntro}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--autism-color)' }}
            >
              <CardContent className="p-6">
                <h4 
                  className="mb-3 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {currentLang.socialDifficulties}
                </h4>
                <p style={{ color: 'var(--text-dark)', textAlign: 'left', lineHeight: '1.75' }}>
                  {currentLang.socialDescription}
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--autism-color)' }}
            >
              <CardContent className="p-6">
                <h4 
                  className="mb-3 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {currentLang.restrictedBehaviors}
                </h4>
                <p style={{ color: 'var(--text-dark)', textAlign: 'left', lineHeight: '1.75' }}>
                  {currentLang.behaviorDescription}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p>
            {currentLang.symptomsConclusion}
          </p>

          <h3 
            className="text-lg mb-3 mt-6"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {currentLang.supportLevelTitle}
          </h3>
          
          <p>
            {currentLang.supportIntro}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--autism-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {currentLang.level1}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{currentLang.level1Desc}</p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--autism-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {currentLang.level2}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{currentLang.level2Desc}</p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--autism-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {currentLang.level3}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{currentLang.level3Desc}</p>
              </CardContent>
            </Card>
          </div>
          
          <p>
            {currentLang.manifestation}
          </p>

          <h3 
            className="text-lg mb-3 mt-6"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {currentLang.lifeTitle}
          </h3>
          
          <p>
            {currentLang.lifeDescription}
          </p>
        </div>
      </div>
    </section>
  );
}