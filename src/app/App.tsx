import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroWithConditions } from './components/HeroWithConditions';
import { HomeWrapper } from './components/HomeWrapper';
import { ConditionsSection } from './components/ConditionsSection';
import { AboutSection } from './components/AboutSection';
import { ASDSection } from './components/ASDSection';
import { ADHDSection } from './components/ADHDSection';
import { DCDSection } from './components/DCDSection';
import { SLDSection } from './components/SLDSection';
import { TSSection } from './components/TSSection';
import { SensornaPercepcija } from './components/SensornaPercepcija';
import { Komorbiditet } from './components/Komorbiditet';
import { ContactSection } from './components/ContactSection';
import { PartnersBiHSection } from './components/PartnersBiHSection';
import { PartnersSerbijaSection } from './components/PartnersSerbijaSection';
import { Footer } from './components/Footer';
import { DogadjajiSection } from './components/DogadjajiSection';
import { PridruziSeSection } from './components/PridruziSeSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('pocetna');
  const [language, setLanguage] = useState<'bs' | 'en'>('bs');

  const renderContent = () => {
    switch (activeSection) {
      case 'pocetna':
        return (
          <>
            <HeroWithConditions language={language} onSectionChange={setActiveSection} />
            <div id="neurodiversity-info">
              <HomeWrapper language={language} />
            </div>
          </>
        );
      case 'o-nama':
        return (
          <div className="neurodiversity-animated-bg flex-1 flex flex-col" style={{ position: 'relative', overflow: 'hidden' }}>
            <AboutSection language={language} />
          </div>
        );
      case 'neurodiverzitet':
        return (
          <>
            <HeroWithConditions language={language} onSectionChange={setActiveSection} />
            <div id="neurodiversity-info">
              <HomeWrapper language={language} />
            </div>
          </>
        );
      case 'senzorna-percepcija':
        return <SensornaPercepcija language={language} />;
      case 'komorbiditet':
        return <Komorbiditet language={language} />;
      case 'asd':
        return <ASDSection language={language} />;
      case 'adhd':
        return <ADHDSection language={language} />;
      case 'dcd':
        return <DCDSection language={language} />;
      case 'sld':
        return <SLDSection language={language} />;
      case 'ts':
        return <TSSection language={language} />;
      case 'kontakt':
        return <ContactSection language={language} />;
      case 'dogadjaji':
        return <DogadjajiSection language={language} />;
      case 'pridruzi-se':
        return <PridruziSeSection language={language} onSectionChange={setActiveSection} />;
      case 'partneri-bih':
        return <PartnersBiHSection language={language} />; // Added language parameter
      case 'partneri-srbija':
        return <PartnersSerbijaSection language={language} />; // Added language parameter
      default:
        return (
          <>
            <HeroWithConditions language={language} onSectionChange={setActiveSection} />
            <div id="neurodiversity-info">
              <HomeWrapper language={language} />
            </div>
          </>
        );
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--background-cream)' }}
    >
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1 flex flex-col">
        {renderContent()}
      </main>
      <Footer onSectionChange={setActiveSection} language={language} />
    </div>
  );
}