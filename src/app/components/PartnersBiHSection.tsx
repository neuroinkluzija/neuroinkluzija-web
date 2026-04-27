import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Partner {
  name: string;
  description: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
}

interface PartnersBiHSectionProps {
  language?: 'bs' | 'en';
}

export function PartnersBiHSection({ language = 'sr' }: PartnersBiHSectionProps) {
  const content = {
    bs: {
      title: "Partneri Bosna i Hercegovina",
      description: "Naši partneri u Bosni i Hercegovini pružaju podršku i resurse za osobe sa neurodiverzitetom i njihove familije. Zajedno radimo na promociji razumevanja i inkluzije.",
      becomePartner: "Želite postati partner?",
      becomePartnerDesc: "Kontaktirajte nas ako želite da se pridružite našoj mreži partnera u Bosni i Hercegovini.",
      contactUs: "Kontaktirajte nas",
      visitWebsite: "Posetite website",
      partners: [
        {
          name: "EDUS - Edukacija za sve",
          description: "Organizacija posvećena inkluzivnom obrazovanju i podršci za osobe sa neurodiverzitetom u Bosni i Hercegovini.",
          email: "edus.bih@gmail.com",
          phone: "062 696 235",
          location: "Zvornička 9, 71000 Sarajevo, Bosnia and Herzegovina",
          website: "https://edusbih.org"
        },
        {
          name: "Udruženje Colibri",
          description: "Organizacija fokusirana na podršku i razvoj osoba sa neurodiverzitetom i njihovih porodica u Bosni i Hercegovini.",
          email: "udruzenjecolibri@gmail.com",
          phone: "033 836-534",
          location: "Ćemaluša 3, Sarajevo, Bosnia and Herzegovina",
          website: "https://colibri.ba"
        },
        {
          name: "JU Centar za odgoj, obrazovanje i rehabilitaciju Vladimir Nazor",
          description: "Javna ustanova fokusirana na odgoj, obrazovanje i rehabilitaciju osoba sa poteškoćama u Bosni i Hercegovini.",
          email: "vnazor@hotmail.com",
          phone: "+387 33 650 196",
          location: "Azize Šaćirbegović 80, Sarajevo",
          website: "https://vladimirnazor.edu.ba/"
        },
        {
          name: "Predškolski odgoj More nade",
          description: "Ustanova za predškolski odgoj i obrazovanje koja pruža podršku deci sa poteškoćama i njihovim porodicama kroz inkluzivne programe i specijalizovane servise.",
          phone: "033 654 990",
          location: "Kemala Kapetanovića 43, Sarajevo",
          website: "#"
        }
      ]
    },
    en: {
      title: "Partners Bosnia and Herzegovina",
      description: "Our partners in Bosnia and Herzegovina provide support and resources for neurodivergent individuals and their families. Together we work on promoting understanding and inclusion.",
      becomePartner: "Want to become a partner?",
      becomePartnerDesc: "Contact us if you want to join our network of partners in Bosnia and Herzegovina.",
      contactUs: "Contact Us",
      visitWebsite: "Visit website",
      partners: [
        {
          name: "EDUS - Education for All",
          description: "Organization dedicated to inclusive education and support for neurodivergent individuals in Bosnia and Herzegovina.",
          email: "edus.bih@gmail.com",
          phone: "062 696 235",
          location: "Zvornička 9, 71000 Sarajevo, Bosnia and Herzegovina",
          website: "https://edusbih.org"
        },
        {
          name: "Colibri Association",
          description: "Organization focused on support and development of neurodivergent individuals and their families in Bosnia and Herzegovina.",
          email: "udruzenjecolibri@gmail.com",
          phone: "033 836-534",
          location: "Ćemaluša 3, Sarajevo, Bosnia and Herzegovina",
          website: "https://colibri.ba"
        },
        {
          name: "PI Center for Education and Rehabilitation Vladimir Nazor",
          description: "Public institution focused on education and rehabilitation of individuals with difficulties in Bosnia and Herzegovina.",
          email: "vnazor@hotmail.com",
          phone: "+387 33 650 196",
          location: "Azize Šaćirbegović 80, Sarajevo",
          website: "https://vladimirnazor.edu.ba/"
        },
        {
          name: "Predškolski odgoj More nade",
          description: "Ustanova za predškolski odgoj i obrazovanje koja pruža podršku deci sa poteškoćama i njihovim porodicama kroz inkluzivne programe i specijalizovane servise.",
          phone: "033 654 990",
          location: "Kemala Kapetanovića 43, Sarajevo",
          website: "#"
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section 
      className="py-16 px-4"
      style={{ backgroundColor: 'var(--background-cream)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <h1 
          className="text-4xl md:text-5xl text-center mb-4"
          style={{ color: 'var(--text-dark)', fontWeight: 'bold' }}
        >
          {text.title}
        </h1>
        
        <p 
          className="text-center mb-12 max-w-3xl mx-auto"
          style={{ color: 'var(--text-dark)' }}
        >
          {text.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {text.partners.map((partner, index) => (
            <Card 
              key={index}
              className="border-0 hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: 'var(--background-white)' }}
            >
              <CardHeader>
                <CardTitle 
                  className="text-xl"
                  style={{ color: 'var(--text-dark)', fontWeight: 'bold' }}
                >
                  {partner.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p 
                  className="text-sm"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {partner.description}
                </p>
                
                <div className="space-y-2">
                  {partner.email && (
                    <div className="flex items-center space-x-2">
                      <Mail 
                        className="h-4 w-4" 
                        style={{ color: 'var(--adhd-color)' }}
                      />
                      <a 
                        href={`mailto:${partner.email}`}
                        className="text-sm hover:underline"
                        style={{ color: 'var(--text-dark)' }}
                      >
                        {partner.email}
                      </a>
                    </div>
                  )}
                  
                  {partner.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone 
                        className="h-4 w-4" 
                        style={{ color: 'var(--autism-color)' }}
                      />
                      <a 
                        href={`tel:${partner.phone}`}
                        className="text-sm hover:underline"
                        style={{ color: 'var(--text-dark)' }}
                      >
                        {partner.phone}
                      </a>
                    </div>
                  )}
                  
                  {partner.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin 
                        className="h-4 w-4" 
                        style={{ color: 'var(--dcd-color)' }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: 'var(--text-dark)' }}
                      >
                        {partner.location}
                      </span>
                    </div>
                  )}
                  
                  {partner.website && partner.website !== "#" && (
                    <div className="flex items-center space-x-2">
                      <ExternalLink 
                        className="h-4 w-4" 
                        style={{ color: 'var(--sld-color)' }}
                      />
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline"
                        style={{ color: 'var(--text-dark)' }}
                      >
                        {text.visitWebsite}
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div 
          className="mt-12 p-6 rounded-lg text-center"
          style={{ backgroundColor: 'var(--autism-color)' }}
        >
          <h3 
            className="text-xl mb-2"
            style={{ color: 'var(--text-dark)', fontWeight: 'bold' }}
          >
            {text.becomePartner}
          </h3>
          <p 
            className="mb-4"
            style={{ color: 'var(--text-dark)' }}
          >
            {text.becomePartnerDesc}
          </p>
          <a 
            href="mailto:info@neurodiverzitet.com"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-md transition-colors hover:bg-white/20"
            style={{ backgroundColor: 'var(--adhd-color)', color: 'var(--text-dark)' }}
          >
            <Mail className="h-4 w-4" />
            <span>{text.contactUs}</span>
          </a>
        </div>
      </div>
    </section>
  );
}