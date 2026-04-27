import React from 'react';
import { ParticleCanvas } from './ParticleCanvas';

interface KomorbiditetProps {
  language: 'bs' | 'en';
}

export function Komorbiditet({ language }: KomorbiditetProps) {
  const t = {
    bs: {
      title: "Komorbiditet",
      p1: "Komorbiditet predstavlja istovremeno prisustvo dva ili više stanja, što je čest slučaj kod neurodivergentih osoba. Prisustvo komorbidnosti otežava uspostavljanje dijagnoze, što može dovesti do kašnjena i neadekvatne nege. Na primer, studije ukazuju da približno 74% osoba sa ASD-om ima najmanje jedno komorbidno stanje, pri čemu su anksiozni poremećaji, depresija i ADHD posebno česti. Prisustvo komorbiditeta dodatno otežava socijalnu komunikaciju, emocionalnu regulaciju i zdravlje neurodivergenitnih pojedinaca. Komorbiditeti najčešće obuhvataju mentalno ili fizičko stanje.",
      p2: "Anksioznost je najzastupljeniji komorbiditet među neurodivergentnima, posebno kod osoba sa dijagnozom ASD-a ili ADHD-a. Smatra se da pogađaju i do 84% populacije sa ASD-om. Zbog poteškoće obrade informacija koje neurodivergentni primaju iz okruženja, pojačane senzorne osetljivosti i prepreka u socijalnoj interakciji ili emocionalnoj regulaciji često nastupaju anksiozni napadi.",
      p3: "Za razliku od anksioznosti, istraživanja pokazuju da depresija pogađa oko 26% populacije sa ASD-om. Zbog težeg planiranja i organizovanja, socijalne komunikacije, postizanja ličnih ciljeva, neurodivergentni pojedinci se često povlače, što dovodi do osećaja tuge i beznađa, gde nastupa socijalna izolacija.",
      p4: "Kod mlađe populacije je prisutno stanje nesanice ili pojave apneje u snu, što vidno utiče na regulaciju ciklusa spavanja, zbog kojeg stupa povećana osetljivost na senzorne podražaje. Ukoliko se san ne reguliše na vreme, može se pogoršati sa godinama, gde nesanica postaje i uzrok novih problema.",
      p5: "Čest komorbiditet, posebno kod osoba na spektru ASD-a može biti i OCD opsesivno-kompulzivni poremećaj koji se odlikuje obrascem neželjenih misli i strahova poznatih kao opsesije. Ove opsesije dovode do ponavljajućih ponašanja, koja se nazivaju kompulzije. Opsesije i kompulzije ometaju svakodnevne aktivnosti i uzrokuju veliki stres i navode da postupate po ritualima.",
      p6: "Studije ukazuju da između 46% i 84% dece sa autizmom prijavljuje gastrointestinalne (GI) probleme, koji uključuju simptome poput opstipacije, hronične dijareje i netolerancije na hranu. Autizam je često povezan sa stanjima kao što su iritabilni crevni sindrom (IBS) i kolitis, što ukazuje da neurodivergencija može biti povezana sa disfunkcijom imunog sistema ili upalom creva.",
      p7: "Pored problema sa digestivnim sistemom, smatra se da neurodivergentne osobe imaju povećan rizik od autoimunih poremećaja, poput reumatoidnog artritisa. Nastaju radi prisutnosti genetske predispozicije ili disfunkcije imunog sistema."
    },
    en: {
      title: "Comorbidity",
      p1: "Comorbidity represents the simultaneous presence of two or more conditions, which is a common case among neurodivergent people. The presence of comorbidity complicates the establishment of diagnosis, which can lead to delayed and inadequate care. For example, studies indicate that approximately 74% of people with ASD have at least one comorbid condition, with anxiety disorders, depression and ADHD being particularly common. The presence of comorbidities further complicates social communication, emotional regulation and health of neurodivergent individuals. Comorbidities most often include mental or physical conditions.",
      p2: "Anxiety is the most prevalent comorbidity among neurodivergent people, especially in people diagnosed with ASD or ADHD. It is believed to affect up to 84% of the population with ASD. Due to difficulties processing information that neurodivergent people receive from the environment, increased sensory sensitivity and barriers in social interaction or emotional regulation, anxiety attacks often occur.",
      p3: "Unlike anxiety, research shows that depression affects about 26% of the population with ASD. Due to difficulties in planning and organizing, social communication, achieving personal goals, neurodivergent individuals often withdraw, leading to feelings of sadness and hopelessness, where social isolation occurs.",
      p4: "In the younger population, there is a state of insomnia or the occurrence of sleep apnea, which visibly affects the regulation of the sleep cycle, due to which increased sensitivity to sensory stimuli occurs. If sleep is not regulated in time, it can worsen with age, where insomnia also becomes the cause of new problems.",
      p5: "A common comorbidity, especially in people on the ASD spectrum, can also be OCD obsessive-compulsive disorder, which is characterized by a pattern of unwanted thoughts and fears known as obsessions. These obsessions lead to repetitive behaviors called compulsions. Obsessions and compulsions interfere with daily activities and cause great stress and lead you to act according to rituals.",
      p6: "Studies indicate that between 46% and 84% of children with autism report gastrointestinal (GI) problems, which include symptoms such as constipation, chronic diarrhea and food intolerance. Autism is often associated with conditions such as irritable bowel syndrome (IBS) and colitis, suggesting that neurodivergence may be associated with immune system dysfunction or intestinal inflammation.",
      p7: "In addition to digestive system problems, neurodivergent people are believed to have an increased risk of autoimmune disorders, such as rheumatoid arthritis. They arise due to the presence of genetic predisposition or immune system dysfunction."
    }
  };

  const currentLang = t[language];

  return (
    <section
      className="py-16 px-4 neurodiversity-animated-bg"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <ParticleCanvas />

      <div className="container mx-auto max-w-4xl" style={{ position: 'relative', zIndex: 1 }}>
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
            {currentLang.p1}
          </p>

          <p>
            {currentLang.p2}
          </p>

          <p>
            {currentLang.p3}
          </p>

          <p>
            {currentLang.p4}
          </p>

          <p>
            {currentLang.p5}
          </p>

          <p>
            {currentLang.p6}
          </p>

          <p>
            {currentLang.p7}
          </p>
        </div>
      </div>
    </section>
  );
}