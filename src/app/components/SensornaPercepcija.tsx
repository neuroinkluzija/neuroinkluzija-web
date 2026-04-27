import React from 'react';
import { Eye, Ear, Hand, User, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { NoseIcon } from './icons/NoseIcon';
import { TongueIcon } from './icons/TongueIcon';
import { ParticleCanvas } from './ParticleCanvas';

interface SensornaPercepcijaProps {
  language: 'bs' | 'en';
}

export function SensornaPercepcija({ language }: SensornaPercepcijaProps) {
  const t = {
    bs: {
      title: "Senzorna percepcija",
      intro: "Ključni aspekat neuro-razvojnih varijacija jeste senzorna percepcija, način na koji mozak prima, obrađuje i reaguje na informacije iz okoline kroz čula. Neurodivergentne osobe mogu doživljavati iste senzorne stimuluse veoma različito, neki su izrazito osetljivi i lako preopterećeni, dok drugi traže intenzivnije podražaje da bi adekvatno reagovali. Prema tome senzorno iskustvo svrstavamo u hipersenzitivnost i hiposenzitivnost. Razumevanje ovih razlika u percepciji vida, sluha, mirisa, ukusa i dodira ključno je za stvaranje inkluzivnih prostora i strategija podrške koje omogućavaju neurodivergentnim osobama da funkcionišu, uče i razvijaju se u skladu sa svojim potrebama.",
      visual: {
        title: "Vizuelna percepcija",
        p1: "Vizuelna percepcija kod neurodivergentnih osoba obuhvata razlike u senzornoj obradi i načinu na koji mozak tumači vizuelne stimulanse. Pojedinci sa vizuelnom hipersenzitivnošću mogu doživljavati jaku svetlost i vizuelno stimulativna okruženja kao preplavljujuća ili čak bolna. Na primer, mogu imati poteškoća u prostorima sa fluorescentnim osvetljenjem, koje može treperiti na frekvencijama neprijatnim za osobe sa osetljivim vidom. Ova hipersenzitivnost često izaziva nelagodnost u okruženjima sa visokim nivoom vizuelnih stimulusa, poput prepunih učionica ili prometnih ulica. Kao posledica, ovi pojedinci mogu preferirati prigušeno svetlo i manje vizuelno zasićene prostore kako bi izbegli senzorno preopterećenje. Istraživanja pokazuju da osobe na spektru ASD-a mogu doživljavati boje 3x intezivnije.",
        p2: "S druge strane, vizuelna hiposenzitivnost označava smanjenu osetljivost na vizuelne stimulanse. Osobe sa ovim iskustvom mogu zahtevati intenzivnije vizuelne podražaje, što se može manifestovati kroz sklonost ka jakom svetlu, pokretnim objektima. Pojedinci sa vizuelnom hiposenzitivnošću takođe mogu pokazivati veću sposobnost fokusiranja na zadatke u prometnim okruženjima, jer ih vizuelni nered manje ometa. Njihova jedinstvena obrada podataka može ih takođe podsticati da aktivno traže vizuelnu stimulaciju kako bi obogatili svoja senzorna iskustva.",
        p3: "Razlike u vizuelnoj percepciji mogu značajno uticati na to kako neurodivergentne osobe funkcionišu u svakodnevnom životu. Perceptivna hijerarhija kod autizma se razlikuje u odnosu na neurotipične, i druga neurorazvojna stanja gde često prvo percipiraju \"prazne zone\" u okruženju, poput belih zidova, dok detalje poput vrata, prozora ili staklenih površina primete tek naknadno. Reč je o kognitivnoj teoriji poznatoj kao slaba centralna koherencija, koja opisuje karakterističan stil obrade informacija kod osoba iz spektra autizma (ASD), pri čemu te osobe imaju tendenciju da se fokusiraju na pojedinačne detalje, umesto da ih integrišu u koherentan celokupni kontekst.",
        p4: "Ovaj koncept, koji je prvi put predstavila psihološkinja Uta Frith krajem 1980-ih, bio je ključan za promenu razumevanja autizma, sa isključivo bihejvioralnih modela ka kognitivnim okvirima koji naglašavaju specifične kognitivne stilove. Teorija slabe centralne koherencije (WCC) često se percepira samo kao izazov, međutim ona takođe naglašava snage kod neurodivergentnih osoba. Sposobnost intenzivnog fokusiranja na pojedinačne detalje može dovesti do pozitivnih rezultata u određenim zadacima, ali i takva vrsta usmerenosti i duboke koncetracije može izazvati poteškoće u oblastima poput razumevanja pročitanog, gde izvlačenje glavne ideje iz teksta postaje problematično zbog prevelikog naglaska na sitnim detaljima."
      },
      auditory: {
        title: "Auditivna percepcija",
        p1: "Auditivna percepcija se odnosi na sposobnost opažanja i tumačenja zvuka, kao i vizuelna može značajno varirati, što dovodi do pojačane ili smanjene osetljivosti na zvuke u okolini. Neurodivergentne osobe često imaju jedinstven odnos prema zvuku. Oni sa pojačanom auditivnom osetljivošću mogu se osećati preplavljeno jakim ili iznenadnim zvucima, koji se javljaju u tipičnim kućnim ili radnim okruženjima, što može izazvati nelagodnost i otežati koncentraciju u prostorima sa pozadinskom bukom ili višestrukim stimulansima. S druge strane, osobe sa smanjenom osetljivošću na zvuk mogu zahtevati jače auditivne podražaje kako bi dostigli isti nivo percepcije kao njihove neurotipične vršnjake.",
        p2: "Osobe sa autizmom često izbegavaju direktan kontakt očima, a istraživanja pokazuju da muzička terapija može pozitivno doprineti razvijanju sposobnosti za postepeno uspostavljanje i tolerisanje takvog kontakta. Iako je direktan kontakt očima vizuelni stimulans, sama intervencija (muzička terapija) deluje preko sluha i emocionalnog doživljaja zvuka, što obuhvata auditivnu percepciju, što ukazuje na pozitivne efekte u segmentima socijalne interakcije i emocionalne komunikacije.",
        p3: "Negativne emocije, poput straha, mogu umanjiti sposobnost osobe da doživi dodir, a sličan efekat mogu imati i na auditivnu percepciju. Za neurodivergentne osobe, fluktuacije emocionalnih stanja mogu dovesti do promenljivih nivoa auditivne percepcije, što komplikuje njihovo senzorno iskustvo i interakciju sa okolinom. Različite vrste zvukova, uključujući color noise i zvuke prirode, mogu efikasno služiti u regulaciji opšteg stanja.",
        p4: "White noise se sastoji od konstantnog zvuka koji obuhvata sve frekvencije sa istim intenzitetom, stvarajući \"šum\" koji prikriva pozadinske smetnje. Uspešno poboljšava koncentraciju kod osoba sa ADHD-om tako što blokira ometajuće zvuke i stimuliše proizvodnju dopamina u mozgu. Pink noise obuhvata distribuciju frekvencija koje se smanjuju kako frekvencija raste, koje asociraju na prirodna okruženja kao što su vodopadi ili šuštanje lišća, što pozitivno utiče na stabilizaciju moždanih talasa i san. Pored toga koristi se i brown noise koji obuhvata niskofrekventne zvuke, stvarajući ton sličan talasima okeana. Značajan efekat postižu i instrumentalna muzika i binauralni tonovi po kognitivne performanse i smanjenje distrakcije. Binauralni tonovi stvaraju auditivnu iluziju koja sinhronizuje moždane talase, potencijalno indukujući fokusirana stanja pogodna za učenje."
      },
      tactile: {
        title: "Taktilna percepcija",
        p1: "Taktilna percepcija odnosi se na način na koji pojedinci procesuiraju i reaguju na senzorne informacije primljene kroz dodir. Osobe sa taktilnom hipersenzitivnošću često doživljavaju određene teksture, temperature ili vrste dodira kao neprijatne. To dovodi do snažnih averzija prema određenim materijalima, izazivajući nelagodnost u svakodnevnim situacijama, poput nošenja odeće ili laganih dodira. Ove osetljivosti mogu uticati na rutinske aktivnosti, zahtevajući prilagođavanja poput odeće bez etiketa ili određenih materijala pri odabiru posteljina radi smanjenja nelagodnosti.",
        p2: "Taktilna hiposenzitivnost se manifestuje potrebom za intenzivnijim taktilnim iskustvima. Osobe sa ovom vrstom osetljivosti preferiraju dubok pritisak, grubu igru ili nošenje teže odeće. Mogu biti manje svesni manjih povreda, poput posekotina ili modrica, i možda neće primetiti promene temperature, što može predstavljati rizik. Ove razlike mogu dovesti do problema sa koordinacijom, ravnotežom i finom motorikom, što dodatno utiče na emocionalne i socijalne interakcije.",
        p3: "Taktilna percepcija često se razvija kroz igru i kreativne aktivnosti, pri čemu dete u radionici u Centru EDUS koristi plastelin kao sredstvo koje podstiče istraživanje tekstura i taktilnih stimulacija."
      },
      olfactory: {
        title: "Olfaktorna percepcija",
        p1: "Olfaktorna percepcija odnosi se na sposobnost detekcije i tumačenja mirisa. Razlike u olfaktornoj percepciji mogu u velikoj meri uticati na svakodnevna iskustva neurodivergentnih osoba. Dok neki mogu uživati u jakim mirisima, drugi mogu osećati neprijatnost zbog istih, što potencijalno izaziva stres i anksioznost. Osobe sa olfaktornom hipersenzitivnošću, mogu detektovati suptilne promene u okolini koje neurotipične osobe inače ne primete. Ova snažna osetljivost može izazvati čak i mučninu kada su izloženi određenim mirisima, poput parfema, sredstava za čišćenje ili specifičnih mirisa hrane.",
        p2: "Kod osoba na spektru autizma, hipersenzitivnost se može manifestovati intenzivnom averzijom prema neprijatnim mirisima, što ih navodi da izbegavaju određena okruženja, poput gužve ili prostora sa jakim mirisima. Ova osetljivost takođe može ometati koncentraciju, naročito u učionicama, gde neprimetni mirisi mogu izazvati senzorno preopterećenje i dovesti do problema u ponašanju.",
        p3: "Dok osobe sa olfaktornom hiposenzitivnošću mogu imati poteškoće u percepciji mirisa ili primetiti samo jake i prodorne mirise. Ova smanjena osetljivost može ih podsticati da traže intenzivnije mirise kako bi uživali u svojoj okolini, što se može manifestovati kroz privlačnost ka određenim proizvodima ili mirisima. Međutim, hiposenzitivnost može predstavljati rizik, na primer, nemogućnost prepoznavanja opasnih situacija poput curenja gasa ili dima. Senzorna regulacija utiče na sposobnost upravljanja emocijama, ponašanjem, pažnjom i međuljudskim odnosima. Prema tome, važno je uspostavi dobro regulisan senzorni sistem kod neurodivergentnih osoba."
      },
      gustatory: {
        title: "Gustativna percepcija",
        p1: "Gustativna percepcija odnosi se na način na koji pojedinci doživljavaju ukus i aromu putem svog gustatornog sistema. Osobe sa hipersenzitivnošću u gustativnoj percepciji mogu posedovati averzija prema specifičnim ukusima, teksturama, pa čak i aromama određenih namirnica, što može rezultirati ograničenom ishranom ili izbegavanjem određenih grupa namirnica. Senzorno preopterećenje tokom obroka takođe može doprineti anksioznosti, otežavajući uživanje u jelu u društvenim situacijama ili javnim prostorima.",
        p2: "Nasuprot tome, hiposenzitivnost u gustativnoj percepciji označava da su neke osobe više sklone intenzivnijim ukusima da bi postigle zadovoljstvo pri jelu. Negativan ishod gustativne hiposenzitivnosti može biti sklonost jako začinjenoj, kiselkastoj hrani, koja može nositi štetne posledice ukoliko se konzumira često."
      },
      vestibular: {
        title: "Vestibularna percepcija",
        p1: "Vestibularna percepcija odnosi se na svesnost i tumačenje pokreta i prostorne orijentacije, ključma je za održavanje ravnoteže, koordinaciju pokreta i razumevanje položaja tela u odnosu na okruženje. Zaslužan je i za detektovanje linearnih i uglovnih ubrzanja glave, što omogućava kretanje kroz prostor bez oslanjanja isključivo na vizuelne informacije. Neurodivergentne osobe, posebno osobe na spektru ASD-a, mogu doživljavati specifične obrasce teškoća u vestibularnoj obradi, što utiče značajno na svakodnevnu rutinu.",
        p2: "Problem sa posturalnom kontrolom, sa održavanjem ravnoteže tokom kretanja, teško predviđanje sopstvene akcije, zbog disregulacije vestibulatnog sistema što može rezultirati padovima ili sudarima."
      },
      proprioceptive: {
        title: "Proprioceptivna percepcija",
        p1: "Proprioceptivna percepcija predstavlja senzorni sistem koji omogućava prepoznavanje položaja i pokreta svog tela u prostoru. Reč je o unutrašnjoj svesti, koja je neophodna za koordinaciju, ravnotežu i opštu motoričku kontrolu, jer integriše povratne informacije od senzora smeštenih u mišićima, tetivama i zglobovima. Upravo je disfunkcija proprioceptivnog sistema uzrok nespretnosti, izazova u planiranju pokreta.",
        p2: "Osobe na spketru ASD-a su sklone prioreceptivnom iskustvu, jer je direktno povezan sa emocionalnom regulacijom, traže iskustva poput težinskog pritiska radi stabilnosti u rutini."
      }
    },
    en: {
      title: "Sensory Perception",
      intro: "A key aspect of neurodevelopmental variations is sensory perception, the way the brain receives, processes and responds to information from the environment through the senses. Neurodivergent people may experience the same sensory stimuli very differently, some are extremely sensitive and easily overwhelmed, while others seek more intense stimuli to respond adequately. Accordingly, we classify sensory experience into hypersensitivity and hyposensitivity. Understanding these differences in perception of sight, hearing, smell, taste and touch is crucial for creating inclusive spaces and support strategies that enable neurodivergent people to function, learn and develop according to their needs.",
      visual: {
        title: "Visual Perception",
        p1: "Visual perception in neurodivergent people includes differences in sensory processing and the way the brain interprets visual stimuli. Individuals with visual hypersensitivity may experience bright light and visually stimulating environments as overwhelming or even painful. For example, they may have difficulties in spaces with fluorescent lighting, which may flicker at frequencies unpleasant for people with sensitive vision. This hypersensitivity often causes discomfort in environments with high levels of visual stimuli, such as crowded classrooms or busy streets. As a result, these individuals may prefer dim lighting and less visually saturated spaces to avoid sensory overload. Research shows that people on the ASD spectrum can experience colors 3x more intensely.",
        p2: "On the other hand, visual hyposensitivity refers to reduced sensitivity to visual stimuli. People with this experience may require more intense visual stimuli, which may manifest through a tendency toward bright light, moving objects. Individuals with visual hyposensitivity may also show greater ability to focus on tasks in busy environments, as visual clutter distracts them less. Their unique data processing may also encourage them to actively seek visual stimulation to enrich their sensory experiences.",
        p3: "Differences in visual perception can significantly affect how neurodivergent people function in everyday life. The perceptual hierarchy in autism differs from neurotypical and other neurodevelopmental conditions where they often first perceive \"empty zones\" in the environment, such as white walls, while noticing details such as doors, windows or glass surfaces only later. This is a cognitive theory known as weak central coherence, which describes the characteristic information processing style in people on the autism spectrum (ASD), where these people tend to focus on individual details, rather than integrating them into a coherent overall context.",
        p4: "This concept, first introduced by psychologist Uta Frith in the late 1980s, was key to changing the understanding of autism, from exclusively behavioral models to cognitive frameworks that emphasize specific cognitive styles. Weak central coherence (WCC) theory is often perceived only as a challenge, however it also emphasizes strengths in neurodivergent people. The ability to focus intensely on individual details can lead to positive results in certain tasks, but this kind of focus and deep concentration can also cause difficulties in areas such as reading comprehension, where extracting the main idea from text becomes problematic due to excessive emphasis on small details."
      },
      auditory: {
        title: "Auditory Perception",
        p1: "Auditory perception refers to the ability to perceive and interpret sound, and like visual perception can vary significantly, leading to increased or decreased sensitivity to sounds in the environment. Neurodivergent people often have a unique relationship with sound. Those with increased auditory sensitivity may feel overwhelmed by loud or sudden sounds that occur in typical home or work environments, which can cause discomfort and make it difficult to concentrate in spaces with background noise or multiple stimuli. On the other hand, people with reduced sensitivity to sound may require stronger auditory stimuli to reach the same level of perception as their neurotypical peers.",
        p2: "People with autism often avoid direct eye contact, and research shows that music therapy can positively contribute to developing the ability to gradually establish and tolerate such contact. Although direct eye contact is a visual stimulus, the intervention itself (music therapy) works through hearing and the emotional experience of sound, which encompasses auditory perception, indicating positive effects in segments of social interaction and emotional communication.",
        p3: "Negative emotions, such as fear, can reduce a person's ability to experience touch, and can have a similar effect on auditory perception. For neurodivergent people, fluctuations in emotional states can lead to variable levels of auditory perception, which complicates their sensory experience and interaction with the environment. Different types of sounds, including color noise and nature sounds, can effectively serve in regulating general condition.",
        p4: "White noise consists of a constant sound that covers all frequencies with the same intensity, creating \"noise\" that masks background disturbances. It successfully improves concentration in people with ADHD by blocking distracting sounds and stimulating dopamine production in the brain. Pink noise encompasses a frequency distribution that decreases as frequency increases, associating with natural environments such as waterfalls or rustling leaves, which positively affects brain wave stabilization and sleep. In addition, brown noise is also used, which encompasses low-frequency sounds, creating a tone similar to ocean waves. Instrumental music and binaural tones also achieve significant effects on cognitive performance and distraction reduction. Binaural tones create an auditory illusion that synchronizes brain waves, potentially inducing focused states suitable for learning."
      },
      tactile: {
        title: "Tactile Perception",
        p1: "Tactile perception refers to the way individuals process and respond to sensory information received through touch. People with tactile hypersensitivity often experience certain textures, temperatures or types of touch as unpleasant. This leads to strong aversions to certain materials, causing discomfort in everyday situations, such as wearing clothes or light touches. These sensitivities can affect routine activities, requiring adaptations such as clothing without labels or certain materials when choosing bedding to reduce discomfort.",
        p2: "Tactile hyposensitivity manifests as a need for more intense tactile experiences. People with this type of sensitivity prefer deep pressure, rough play or wearing heavier clothing. They may be less aware of minor injuries, such as cuts or bruises, and may not notice temperature changes, which can pose a risk. These differences can lead to problems with coordination, balance and fine motor skills, which further affects emotional and social interactions.",
        p3: "Tactile perception is often developed through play and creative activities, where a child in a workshop at the EDUS Center uses plasticine as a means that encourages exploration of textures and tactile stimulation."
      },
      olfactory: {
        title: "Olfactory Perception",
        p1: "Olfactory perception refers to the ability to detect and interpret smells. Differences in olfactory perception can greatly affect the daily experiences of neurodivergent people. While some may enjoy strong smells, others may feel discomfort from them, potentially causing stress and anxiety. People with olfactory hypersensitivity can detect subtle changes in the environment that neurotypical people usually don't notice. This strong sensitivity can even cause nausea when exposed to certain smells, such as perfumes, cleaning products or specific food odors.",
        p2: "In people on the autism spectrum, hypersensitivity can manifest as intense aversion to unpleasant smells, leading them to avoid certain environments, such as crowds or spaces with strong smells. This sensitivity can also interfere with concentration, especially in classrooms, where unnoticed smells can cause sensory overload and lead to behavioral problems.",
        p3: "While people with olfactory hyposensitivity may have difficulty perceiving smells or only notice strong and penetrating smells. This reduced sensitivity may encourage them to seek more intense smells to enjoy their environment, which may manifest through attraction to certain products or smells. However, hyposensitivity can pose a risk, for example, the inability to recognize dangerous situations such as gas leaks or smoke. Sensory regulation affects the ability to manage emotions, behavior, attention and interpersonal relationships. Therefore, it is important to establish a well-regulated sensory system in neurodivergent people."
      },
      gustatory: {
        title: "Gustatory Perception",
        p1: "Gustatory perception refers to the way individuals experience taste and aroma through their gustatory system. People with hypersensitivity in gustatory perception may possess aversions to specific tastes, textures, and even aromas of certain foods, which may result in limited diet or avoidance of certain food groups. Sensory overload during meals can also contribute to anxiety, making it difficult to enjoy food in social situations or public spaces.",
        p2: "In contrast, hyposensitivity in gustatory perception means that some people are more inclined to more intense flavors to achieve satisfaction when eating. A negative outcome of gustatory hyposensitivity can be a tendency toward highly spiced, acidic food, which can have harmful consequences if consumed frequently."
      },
      vestibular: {
        title: "Vestibular Perception",
        p1: "Vestibular perception refers to awareness and interpretation of movement and spatial orientation, crucial for maintaining balance, movement coordination and understanding body position in relation to the environment. It is also responsible for detecting linear and angular accelerations of the head, which enables movement through space without relying exclusively on visual information. Neurodivergent people, especially people on the ASD spectrum, may experience specific patterns of difficulties in vestibular processing, which significantly affects daily routine.",
        p2: "Problems with postural control, with maintaining balance during movement, difficulty predicting one's own action, due to dysregulation of the vestibular system which can result in falls or collisions."
      },
      proprioceptive: {
        title: "Proprioceptive Perception",
        p1: "Proprioceptive perception represents a sensory system that enables recognition of the position and movement of one's body in space. This is internal awareness, which is necessary for coordination, balance and general motor control, as it integrates feedback from sensors located in muscles, tendons and joints. It is precisely the dysfunction of the proprioceptive system that is the cause of clumsiness, challenges in movement planning.",
        p2: "People on the ASD spectrum are prone to proprioceptive experience, because it is directly connected to emotional regulation, they seek experiences such as weight pressure for stability in routine."
      }
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
          className="text-justify space-y-8 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dark)' }}
        >
          <p>
            {currentLang.intro}
          </p>

          {/* Vizuelna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--autism-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <Eye className="h-6 w-6" />
                <span>{currentLang.visual.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.visual.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.visual.p2}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.visual.p3}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.visual.p4}
              </p>
            </CardContent>
          </Card>

          {/* Auditivna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--adhd-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <Ear className="h-6 w-6" />
                <span>{currentLang.auditory.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.auditory.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.auditory.p2}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.auditory.p3}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.auditory.p4}
              </p>
            </CardContent>
          </Card>

          {/* Taktilna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--dcd-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <Hand className="h-6 w-6" />
                <span>{currentLang.tactile.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.tactile.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.tactile.p2}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.tactile.p3}
              </p>
            </CardContent>
          </Card>

          {/* Olfaktorna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--sld-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <NoseIcon className="h-6 w-6" />
                <span>{currentLang.olfactory.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.olfactory.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.olfactory.p2}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.olfactory.p3}
              </p>
            </CardContent>
          </Card>

          {/* Gustativna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--autism-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <TongueIcon className="h-6 w-6" />
                <span>{currentLang.gustatory.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.gustatory.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.gustatory.p2}
              </p>
            </CardContent>
          </Card>

          {/* Vestibularna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--adhd-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <Scale className="h-6 w-6" />
                <span>{currentLang.vestibular.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.vestibular.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.vestibular.p2}
              </p>
            </CardContent>
          </Card>

          {/* Proprioceptivna percepcija */}
          <Card 
            className="border-0"
            style={{ backgroundColor: 'var(--dcd-color)' }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-left" style={{ color: 'var(--text-dark)', fontWeight: '600' }}>
                <User className="h-6 w-6" />
                <span>{currentLang.proprioceptive.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.proprioceptive.p1}
              </p>
              <p className="text-justify" style={{ color: 'var(--text-dark)', textAlign: 'justify', hyphens: 'auto' }}>
                {currentLang.proprioceptive.p2}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}