import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import logoSvg from '../../imports/Neuroinkluzija_=_Logo_ffff3.svg';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  language: 'bs' | 'en';
  onLanguageChange: (language: 'bs' | 'en') => void;
}

export function Header({ activeSection, onSectionChange, language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mainNavigationItems = [
    { 
      id: 'pocetna', 
      label: language === 'bs' ? 'Početna' : 'Home', 
      color: 'var(--dcd-color)' 
    },
    { 
      id: 'o-nama', 
      label: language === 'bs' ? 'O nama' : 'About Us', 
      color: 'var(--adhd-color)' 
    },
  ];

  const dogadjajiItem = {
    id: 'dogadjaji',
    label: language === 'bs' ? 'Događaji' : 'Events',
    color: 'var(--sld-color)',
  };

  const pridruziSeItem = {
    id: 'pridruzi-se',
    label: language === 'bs' ? 'Pridruži se' : 'Join Us',
    color: 'var(--adhd-color)',
  };

  const contactItem = { 
    id: 'kontakt', 
    label: language === 'bs' ? 'Kontakt' : 'Contact', 
    color: 'var(--autism-color)' 
  };

  const conditionItems = [
    { 
      id: 'asd', 
      label: language === 'bs' ? 'ASD (Autizam)' : 'ASD (Autism)', 
      color: 'var(--autism-color)' 
    },
    { 
      id: 'adhd', 
      label: 'ADHD', 
      color: 'var(--adhd-color)' 
    },
    { 
      id: 'dcd', 
      label: 'DCD', 
      color: 'var(--dcd-color)' 
    },
    { 
      id: 'sld', 
      label: 'SLD', 
      color: 'var(--sld-color)' 
    },
    { 
      id: 'ts', 
      label: language === 'bs' ? 'TS (Touretteov sindrom)' : 'TS (Tourette Syndrome)', 
      color: 'var(--ts-color)' 
    },
    { 
      id: 'komorbiditet',
      label: language === 'bs' ? 'Komorbiditet' : 'Comorbidity', 
      color: 'var(--adhd-color)' 
    },
    { 
      id: 'senzorna-percepcija',
      label: language === 'bs' ? 'Senzorna percepcija' : 'Sensory Perception', 
      color: 'var(--sld-color)' 
    },
  ];

  const isNeurodriversityActive = activeSection === 'neurodiverzitet' || 
    conditionItems.some(item => item.id === activeSection);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60"
      style={{ backgroundColor: 'var(--ts-color)', borderColor: 'rgba(47, 64, 58, 0.1)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onSectionChange('pocetna')}
            >
              <img
                src={logoSvg}
                alt="Neuroinkluzija logo"
                style={{
                  height: '2em',
                  width: 'auto',
                  display: 'block'
                }}
              />
              <h1
                className="text-lg"
                style={{ color: 'var(--background-white)', fontWeight: '600' }}
              >
                {language === 'bs' ? 'Neuroinkluzija' : 'Neuroinclusion'}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className="text-sm transition-all duration-200 border-2"
                style={{ 
                  color: activeSection === item.id ? 'var(--text-dark)' : 'var(--background-white)',
                  backgroundColor: activeSection === item.id ? item.color : 'transparent',
                  borderColor: activeSection === item.id ? item.color : 'transparent'
                }}
              >
                {item.label}
              </Button>
            ))}
            
            {/* Neurodiverzitet Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant={isNeurodriversityActive ? "secondary" : "ghost"}
                className="text-sm transition-all duration-200 border-2 flex items-center space-x-1"
                style={{ 
                  color: isNeurodriversityActive ? 'var(--text-dark)' : 'var(--background-white)',
                  backgroundColor: isNeurodriversityActive ? 'var(--sld-color)' : 'transparent',
                  borderColor: isNeurodriversityActive ? 'var(--sld-color)' : 'transparent'
                }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>{language === 'bs' ? 'O neurodiverzitetu' : 'About Neurodiversity'}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full right-0 mt-1 w-56 rounded-md shadow-lg border z-[100]"
                  style={{ 
                    backgroundColor: 'var(--background-white)', 
                    borderColor: 'rgba(47, 64, 58, 0.2)'
                  }}
                >
                  <div className="py-1">
                    {conditionItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onSectionChange(item.id);
                          setDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150"
                        style={{ 
                          backgroundColor: activeSection === item.id ? item.color : 'transparent',
                          color: activeSection === item.id && item.id === 'ts' ? 'white' : 'var(--text-dark)'
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Događaji Button */}
            <Button
              variant={activeSection === dogadjajiItem.id ? "secondary" : "ghost"}
              onClick={() => onSectionChange(dogadjajiItem.id)}
              className="text-sm transition-all duration-200 border-2"
              style={{ 
                color: activeSection === dogadjajiItem.id ? 'var(--text-dark)' : 'var(--background-white)',
                backgroundColor: activeSection === dogadjajiItem.id ? dogadjajiItem.color : 'transparent',
                borderColor: activeSection === dogadjajiItem.id ? dogadjajiItem.color : 'transparent'
              }}
            >
              {dogadjajiItem.label}
            </Button>

            {/* Pridruži se Button */}
            <Button
              variant={activeSection === pridruziSeItem.id ? "secondary" : "ghost"}
              onClick={() => onSectionChange(pridruziSeItem.id)}
              className="text-sm transition-all duration-200 border-2"
              style={{ 
                color: activeSection === pridruziSeItem.id ? 'var(--text-dark)' : 'var(--background-white)',
                backgroundColor: activeSection === pridruziSeItem.id ? pridruziSeItem.color : 'transparent',
                borderColor: activeSection === pridruziSeItem.id ? pridruziSeItem.color : 'transparent'
              }}
            >
              {pridruziSeItem.label}
            </Button>

            {/* Contact Button */}
            <Button
              variant={activeSection === contactItem.id ? "secondary" : "ghost"}
              onClick={() => onSectionChange(contactItem.id)}
              className="text-sm transition-all duration-200 border-2"
              style={{ 
                color: activeSection === contactItem.id ? 'var(--text-dark)' : 'var(--background-white)',
                backgroundColor: activeSection === contactItem.id ? contactItem.color : 'transparent',
                borderColor: activeSection === contactItem.id ? contactItem.color : 'transparent'
              }}
            >
              {contactItem.label}
            </Button>
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-white/10 rounded-md p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange('bs')}
                className={`text-xs px-2 py-1 h-auto transition-all duration-200 ${
                  language === 'bs' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
                style={{
                  color: 'var(--background-white)',
                  fontSize: '11px'
                }}
              >
                BS
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange('en')}
                className={`text-xs px-2 py-1 h-auto transition-all duration-200 ${
                  language === 'en' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
                style={{ 
                  color: 'var(--background-white)',
                  fontSize: '11px'
                }}
              >
                EN
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-white/20"
              style={{ color: 'var(--background-white)' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden border-t" 
            style={{ backgroundColor: 'var(--autism-color)', borderColor: 'rgba(47, 64, 58, 0.1)' }}
          >
            <nav className="px-2 py-4 space-y-1">
              {mainNavigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  onClick={() => {
                    onSectionChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full justify-start text-sm border-2"
                  style={{ 
                    color: 'var(--text-dark)',
                    backgroundColor: activeSection === item.id ? item.color : 'transparent',
                    borderColor: activeSection === item.id ? item.color : 'transparent'
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Mobile Neurodiverzitet section */}
              <div className="border-t pt-2 mt-2" style={{ borderColor: 'rgba(47, 64, 58, 0.1)' }}>
                <Button
                  variant={activeSection === 'neurodiverzitet' ? "secondary" : "ghost"}
                  onClick={() => {
                    onSectionChange('neurodiverzitet');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full justify-start text-sm border-2 mb-1"
                  style={{ 
                    color: 'var(--text-dark)',
                    backgroundColor: activeSection === 'neurodiverzitet' ? 'var(--sld-color)' : 'transparent',
                    borderColor: activeSection === 'neurodiverzitet' ? 'var(--sld-color)' : 'transparent'
                  }}
                >
                  {language === 'bs' ? 'O neurodiverzitetu' : 'About Neurodiversity'}
                </Button>
                
                {conditionItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "secondary" : "ghost"}
                    onClick={() => {
                      onSectionChange(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start text-sm border-2 ml-4"
                    style={{ 
                      color: item.id === 'ts' && activeSection === item.id ? 'white' : 'var(--text-dark)',
                      backgroundColor: activeSection === item.id ? item.color : 'transparent',
                      borderColor: activeSection === item.id ? item.color : 'transparent'
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              {/* Mobile Događaji Button */}
              <Button
                variant={activeSection === dogadjajiItem.id ? "secondary" : "ghost"}
                onClick={() => {
                  onSectionChange(dogadjajiItem.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-sm border-2"
                style={{ 
                  color: 'var(--text-dark)',
                  backgroundColor: activeSection === dogadjajiItem.id ? dogadjajiItem.color : 'transparent',
                  borderColor: activeSection === dogadjajiItem.id ? dogadjajiItem.color : 'transparent'
                }}
              >
                {dogadjajiItem.label}
              </Button>

              {/* Mobile Pridruži se Button */}
              <Button
                variant={activeSection === pridruziSeItem.id ? "secondary" : "ghost"}
                onClick={() => {
                  onSectionChange(pridruziSeItem.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-sm border-2"
                style={{ 
                  color: 'var(--text-dark)',
                  backgroundColor: activeSection === pridruziSeItem.id ? pridruziSeItem.color : 'transparent',
                  borderColor: activeSection === pridruziSeItem.id ? pridruziSeItem.color : 'transparent'
                }}
              >
                {pridruziSeItem.label}
              </Button>

              {/* Mobile Contact Button */}
              <Button
                variant={activeSection === contactItem.id ? "secondary" : "ghost"}
                onClick={() => {
                  onSectionChange(contactItem.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-start text-sm border-2 mt-2"
                style={{ 
                  color: 'var(--text-dark)',
                  backgroundColor: activeSection === contactItem.id ? contactItem.color : 'transparent',
                  borderColor: activeSection === contactItem.id ? contactItem.color : 'transparent'
                }}
              >
                {contactItem.label}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}