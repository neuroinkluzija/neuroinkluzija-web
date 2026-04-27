import React, { useState } from 'react';
import { Target, Users, Heart, Sparkles, PersonStanding, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface TSSectionProps {
  language: 'bs' | 'en';
}

export function TSSection({ language }: TSSectionProps) {
  const [activeTab, setActiveTab] = useState('info');

  const content = {
    bs: {
      title: 'Touretteov sindrom',
      subtitle: 'neuro-razvojni poremećaj sa tikovima',
      description: 'Touretteov sindrom (TS) dobio je ime po Žoržu Žilu de la Turetu (1857–1904), koji ga je prvi opisao kao \'sindrom tikova\' 1885. godine, a čija su zapažanja i danas uglavnom smatrana validnim. Touretteov sindrom (TS) je neuro-razvojni poremećaj koji se karakteriše prisustvom hroničnih motornih i vokalnih tikova, koji predstavljaju nevoljne, repetitivne pokrete ili zvukove. Ovi tikovi mogu varirati po intenzitetu i trajanju, a njihova težina često fluktuira tokom vremena, što predstavlja značajne izazove za osobe koje su pogođene. TS se obično ispoljava u detinjstvu, sa prosečnim početkom oko sedme godine, i procenjuje se da pogađa približno 0,77% dece, pri čemu je učestalost znatno veća kod muškaraca nego kod žena.',
      characteristicsTitle: 'Podela tikova',
      characteristicsText: 'Tikove delimo na dve glavne kategorije koje se razlikuju po načinu manifestacije i karakteristikama:',
      motorTicTitle: 'Motorički tikovi',
      motorTicDesc: 'Manifestuju se kroz fizičke pokrete, dok obuhvataju ponašanja poput treptanja ili kotrljanja očima, trzanje glave, podizanje ramena, učestali pokreti ruku i nogu, skakanje ili drugi iznenadni pokreti, zatezanje mišića ili drugi nevoljni pokreti tela.',
      vocalTicTitle: 'Vokalni tikovi',
      vocalTicDesc: 'Predstavljaju zvuke koje osoba proizvodi. Oni mogu uključivati učestalo pevušenje ili zviždanje, šištanje ili često čišćenje grla, ponavljanje reči ili fraza, oponašanje životinjskih zvukova.',
      characteristicsMainTitle: 'Karakteristike TS-a',
      characteristicsMainText: 'TS se karakteriše nekoliko ključnih osobina koje utiču na manifestaciju i razvoj sindroma:',
      char1Title: 'Početak u detinjstvu',
      char1Desc: 'TS se obično ispoljava u ranom detinjstvu, sa prosečnim početkom oko sedme godine života.',
      char2Title: 'Prevalenca',
      char2Desc: 'Procenjuje se da pogađa približno 0,77% dece, pri čemu je učestalost znatno veća kod muškaraca nego kod žena.',
      char3Title: 'Fluktuacija tikova',
      char3Desc: 'Tikovi mogu varirati po intenzitetu i trajanju, a njihova težina često fluktuira tokom vremena.',
      lifeWithTitle: 'Život sa TS-om',
      lifeWithText: 'TS sindrom značajno utiče na svakodnevni život osoba koje su pogođene, posebno u segmentima poput društvene interakcije, upravo jer su tikovi jasno vidljivi i ne mogu se maskirati kao određene karakteristike koje su prisutne kod autizma ili drugih neurorazvojnih stanja. Zbog toga osobe sa TS-om često se povlače u sebe, grade negativnu sliku o sebi, posebno ako su prisutni problemi u ostvarivanju socijalne interakcije sa vršnjacima i održavanju uspostavljenih odnosa. Prema tome, neophodna je podrška, od porodice, prijatelja, stručnjaka, emocionalna ili praktična.'
    },
    en: {
      title: 'Tourette Syndrome',
      subtitle: 'neurodevelopmental disorder with tics',
      description: 'Tourette Syndrome (TS) was named after Georges Gilles de la Tourette (1857-1904), who first described it as \'tic syndrome\' in 1885, and whose observations are still largely considered valid today. Tourette Syndrome (TS) is a neurodevelopmental disorder characterized by the presence of chronic motor and vocal tics, which are involuntary, repetitive movements or sounds. These tics can vary in intensity and duration, and their severity often fluctuates over time, presenting significant challenges for affected individuals. TS usually manifests in childhood, with an average onset around the age of seven, and is estimated to affect approximately 0.77% of children, with a significantly higher frequency in males than females.',
      characteristicsTitle: 'Classification of Tics',
      characteristicsText: 'Tics are divided into two main categories that differ in their manifestation and characteristics:',
      motorTicTitle: 'Motor tics',
      motorTicDesc: 'Manifest through physical movements and include behaviors such as blinking or rolling eyes, head jerking, shoulder shrugging, frequent hand and leg movements, jumping or other sudden movements, muscle tensing, or other involuntary body movements.',
      vocalTicTitle: 'Vocal tics',
      vocalTicDesc: 'Represent sounds that a person produces. They may include frequent humming or whistling, hissing or frequent throat clearing, repeating words or phrases, imitating animal sounds.',
      characteristicsMainTitle: 'TS Characteristics',
      characteristicsMainText: 'TS is characterized by several key features that influence the manifestation and development of the syndrome:',
      char1Title: 'Childhood onset',
      char1Desc: 'TS usually manifests in early childhood, with an average onset around the age of seven.',
      char2Title: 'Prevalence',
      char2Desc: 'It is estimated to affect approximately 0.77% of children, with significantly higher frequency in males than females.',
      char3Title: 'Tic fluctuation',
      char3Desc: 'Tics can vary in intensity and duration, and their severity often fluctuates over time.',
      lifeWithTitle: 'Living with TS',
      lifeWithText: 'TS significantly impacts the daily lives of affected individuals, especially in areas such as social interaction, precisely because tics are clearly visible and cannot be masked like certain characteristics present in autism or other neurodevelopmental conditions. As a result, people with TS often withdraw into themselves, build a negative self-image, especially if there are problems in achieving social interaction with peers and maintaining established relationships. Therefore, support is necessary - from family, friends, professionals, emotional or practical.'
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4 ts-animated-bg"
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
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--ts-bg-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <PersonStanding 
                    className="h-6 w-6" 
                    style={{ color: 'var(--text-dark)' }}
                  />
                  <h4 
                    className="mb-0"
                    style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                  >
                    {text.motorTicTitle}
                  </h4>
                </div>
                <p style={{ color: 'var(--text-dark)' }}>
                  {text.motorTicDesc}
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--ts-bg-color)' }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: 'var(--text-dark)' }}
                  >
                    {/* Glava */}
                    <circle cx="9" cy="12" r="6.5"/>
                    {/* Gornja usna */}
                    <path d="M6 13 Q7.5 12 9 12.5 Q10.5 12 12 13"/>
                    {/* Donja usna */}
                    <path d="M6 13 Q9 15.5 12 13"/>
                    {/* Zvučni talasi */}
                    <path d="M17.5 10.5 Q19.5 12 17.5 13.5"/>
                    <path d="M20 8.5 Q22.5 12 20 15.5"/>
                  </svg>
                  <h4 
                    className="mb-0"
                    style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                  >
                    {text.vocalTicTitle}
                  </h4>
                </div>
                <p style={{ color: 'var(--text-dark)' }}>
                  {text.vocalTicDesc}
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.characteristicsMainTitle}
          </h3>
          
          <p>
            {text.characteristicsMainText}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--ts-bg-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.char1Title}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{text.char1Desc}</p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--ts-bg-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.char2Title}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{text.char2Desc}</p>
              </CardContent>
            </Card>
            
            <Card 
              className="border-0"
              style={{ backgroundColor: 'var(--ts-bg-color)' }}
            >
              <CardContent className="p-6 text-left">
                <h4 
                  className="mb-2 text-left"
                  style={{ color: 'var(--text-dark)', fontWeight: '600' }}
                >
                  {text.char3Title}
                </h4>
                <p className="text-left" style={{ color: 'var(--text-dark)', textAlign: 'left' }}>{text.char3Desc}</p>
              </CardContent>
            </Card>
          </div>

          <h2 
            className="text-lg mb-4 mt-8"
            style={{ color: 'var(--text-dark)', fontWeight: '600' }}
          >
            {text.lifeWithTitle}
          </h2>          
          <p>
            {text.lifeWithText}
          </p>
        </div>
      </div>
    </section>
  );
}