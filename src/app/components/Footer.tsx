import React from 'react';
import { Mail, Facebook, Instagram, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onSectionChange?: (section: string) => void;
  language?: 'bs' | 'en';
}

export function Footer({ onSectionChange, language }: FooterProps) {
  const content = {
    bs: {
      contact: 'Kontakt',
      contactDescription: 'Za pitanja, predloge ili saradnju, slobodno nas kontaktirajte.',
      followUs: 'Pratite nas',
      partnersAndResources: 'Partneri i resursi',
      copyrightText: '© Udruženje za inkluziju i afirmaciju neurodiverziteta',
      missionText: 'Posvećeno promociji razumevanja i prihvatanja neurološke različitosti',
      partnerLinks: []
    },
    en: {
      contact: 'Contact',
      contactDescription: 'For questions, suggestions, or collaboration, feel free to contact us.',
      followUs: 'Follow Us',
      partnersAndResources: 'Partners & Resources',
      copyrightText: '© Association for Inclusion and Affirmation of Neurodiversity',
      missionText: 'Dedicated to promoting understanding and acceptance of neurological diversity',
      partnerLinks: []
    }
  };

  const text = content[language || 'sr'];
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer 
      className="py-6 px-4 mt-auto"
      style={{ backgroundColor: 'var(--ts-color)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div 
          className="flex flex-wrap items-start justify-between gap-6"
          style={{ color: 'var(--background-white)' }}
        >
          
          {/* Contact Information */}
          <div className="flex items-center gap-2">
            <h3 className="text-sm" style={{ fontWeight: 600 }}>{text.contact}</h3>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-white/20 h-7 w-7 p-0"
                style={{ color: 'var(--background-white)' }}
                asChild
              >
                <a href="mailto:info@neuroinkluzija.org" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <span className="text-xs">info@neuroinkluzija.org</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-2">
            <h3 className="text-sm" style={{ fontWeight: 600 }}>{text.followUs}</h3>
            <div className="flex space-x-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-white/20 h-7 w-7 p-0"
                    style={{ color: 'var(--background-white)' }}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <IconComponent className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div 
          className="border-t mt-4 pt-4 text-center"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <p 
            className="text-xs text-center mx-auto"
            style={{ color: 'var(--background-white)', opacity: 0.6 }}
          >
            {text.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}