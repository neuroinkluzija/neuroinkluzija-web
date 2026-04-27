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

interface PartnersSerbijaProps {
  language?: 'bs' | 'en';
}

export function PartnersSerbijaSection({ language = 'sr' }: PartnersSerbijaProps) {
  const content = {
    bs: {
      title: "Partneri Srbija",
      description: "Naši partneri u Srbiji pružaju podršku i resurse za osobe sa neurodiverzitetom i njihove familije. Zajedno radimo na promociji razumevanja i inkluzije.",
      becomePartner: "Želite postati partner?",
      becomePartnerDesc: "Kontaktirajte nas ako želite da se pridružite našoj mreži partnera u Srbiji.",
      contactUs: "Kontaktirajte nas",
      visitWebsite: "Posetite website",
      partners: [
        {
          name: "Psihološki centar HAJA",
          description: "Psihološki centar koji pruža stručnu podršku i pomoć osobama sa neurodiverzitetom i njihovim porodicama u Novom Pazaru i okolini.",
          phone: "064 578 66 22",
          location: "Zgrada Svojbor, Čerkez Mahala br. 5, Novi Pazar",
          website: "#"
        },
        {
          name: "Dnevni boravak", 
          description: "Ustanova koja pruža dnevne usluge boravka, podrške i aktivnosti za osobe sa poteškoćama u razvoju u Novom Pazaru.",
          email: "mnrlnp@yahoo.com",
          phone: "020 317 402",
          location: "Dositejeva bb, Novi Pazar",
          website: "https://mnrl.org.rs"
        },
        {
          name: "CODE - Centar za autizam i razvojne smetnje",
          description: "Specijalizovani centar posvećen dijagnostici, terapiji i podršci za osobe sa autizmom i razvojnim smetnjama u Novom Pazaru i okolini.",
          phone: "063 635306",
          location: "Sutjeska bb, Novi Pazar",
          website: "https://centarcode.com"
        },
        {
          name: "Centar Terapija",
          description: "Centar za logopedsku dijagnostiku i ranu intervenciju koji pruža specijalizovane terapijske usluge za osobe sa govorno-jezičkim poteškoćama.",
          location: "Generala Živkovića 68, Novi Pazar",
          website: "#"
        }
      ]
    },
    en: {
      title: "Partners Serbia",
      description: "Our partners in Serbia provide support and resources for neurodivergent individuals and their families. Together we work on promoting understanding and inclusion.",
      becomePartner: "Want to become a partner?",
      becomePartnerDesc: "Contact us if you want to join our network of partners in Serbia.",
      contactUs: "Contact Us",
      visitWebsite: "Visit website",
      partners: [
        {
          name: "Psychological Center HAJA",
          description: "Psychological center that provides professional support and assistance to neurodivergent individuals and their families in Novi Pazar and surrounding areas.",
          phone: "064 578 66 22",
          location: "Svojbor Building, Čerkez Mahala No. 5, Novi Pazar",
          website: "#"
        },
        {
          name: "Day Care Center", 
          description: "Institution that provides daily care services, support and activities for individuals with developmental difficulties in Novi Pazar.",
          email: "mnrlnp@yahoo.com",
          phone: "020 317 402",
          location: "Dositejeva bb, Novi Pazar",
          website: "https://mnrl.org.rs"
        },
        {
          name: "CODE - Center for Autism and Developmental Disorders",
          description: "Specialized center dedicated to diagnosis, therapy, and support for individuals with autism and developmental disorders in Novi Pazar and surrounding areas.",
          phone: "063 635306",
          location: "Sutjeska bb, Novi Pazar",
          website: "https://centarcode.com"
        },
        {
          name: "Therapy Center",
          description: "Center for speech and language therapy diagnosis and early intervention that provides specialized therapeutic services for individuals with communication disorders.",
          location: "Generala Živkovića 68, Novi Pazar",
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