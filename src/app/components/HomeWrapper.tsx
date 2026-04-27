import React from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import { NeuroinkluzijaSectionIntro } from './NeuroinkluzijaSectionIntro';
import { HeroSection } from './HeroSection';

interface HomeWrapperProps {
  language: 'bs' | 'en';
}

export function HomeWrapper({ language }: HomeWrapperProps) {
  return (
    <div className="neurodiversity-animated-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleCanvas />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NeuroinkluzijaSectionIntro language={language} />
        <HeroSection language={language} />
      </div>
    </div>
  );
}
