import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/ContactForm';
import { contactInfo } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: 'Contact Toys Services & Upholstery for a free quote on boat upholstery, marine flooring, and covers. Call (801) 759-4524 or request a quote online.',
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: contactInfo.phone,
      link: `tel:${contactInfo.phoneRaw}`,
      linkText: 'Call Now',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      content: contactInfo.address,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`,
      linkText: 'Get Directions',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      content: contactInfo.hours,
      subContent: contactInfo.hoursNote,
      link: `tel:${contactInfo.phoneRaw}`,
      linkText: 'Call to Confirm',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-200">
              Ready to transform your boat? Fill out the form below or give us a call. 
              We'll discuss your project and provide a detailed quote.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-text-dark mb-1">
                  {card.content}
                </p>
                {card.subContent && (
                  <p className="text-xs text-text-light mb-3">
                    {card.subContent}
                  </p>
                )}
                <a
                  href={card.link}
                  target={card.title === 'Address' ? '_blank' : undefined}
                  rel={card.title === 'Address' ? 'noopener noreferrer' : undefined}
                  className="text-sm text-accent hover:underline font-medium"
                >
                  {card.linkText}
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <Container size="md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Request a Quote
            </h2>
            <p className="text-lg text-text-light">
              Fill out the form below and we'll get back to you within 1 business day
            </p>
          </div>

          <ContactForm />
        </Container>
      </section>

      {/* Additional Info */}
      <section className="bg-sand py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              What Happens Next?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg mb-3">
                  1
                </div>
                <h4 className="font-semibold text-primary mb-2">We Review</h4>
                <p className="text-sm text-text-light">
                  We'll review your request and contact you to discuss details
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg mb-3">
                  2
                </div>
                <h4 className="font-semibold text-primary mb-2">We Quote</h4>
                <p className="text-sm text-text-light">
                  After understanding your needs, we'll provide a detailed quote
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-lg mb-3">
                  3
                </div>
                <h4 className="font-semibold text-primary mb-2">We Build</h4>
                <p className="text-sm text-text-light">
                  Once approved, we get to work transforming your boat
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
