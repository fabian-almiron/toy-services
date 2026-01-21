import React from 'react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { businessInfo, contactInfo } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Marine Upholstery Experts',
  description: 'Learn about our 20+ years of marine upholstery expertise, quality materials, and commitment to craftsmanship in West Jordan, Utah.',
};

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '20+ Years Experience',
      description: 'Decades of hands-on experience working with all types of boats and marine interiors. We\'ve seen it all and know how to handle any challenge.',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Quality Materials',
      description: 'We use only marine-grade materials built to withstand UV exposure, water, and constant use. Premium vinyl, closed-cell foam, and stainless hardware.',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Personalized Service',
      description: 'One-on-one consultations to understand your vision. We work directly with you from design to completion, ensuring every detail meets your expectations.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Craftsmanship You Can Trust
            </h1>
            <p className="text-xl text-gray-200">
              20+ years of marine upholstery expertise, serving boat owners across Utah and neighboring states
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-gray-400">Shop Photo</span>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  For over two decades, {businessInfo.name} has been the trusted choice for marine 
                  upholstery and flooring in Utah. What started as a passion for craftsmanship has 
                  grown into a full-service shop serving boat owners throughout the region.
                </p>
                <p>
                  We believe every boat deserves an interior that's both beautiful and built to last. 
                  That's why we use only marine-grade materials designed to withstand the harsh 
                  conditions of sun, water, and constant use. From premium UV-resistant vinyl to 
                  closed-cell marine foam, every component is chosen for durability.
                </p>
                <p>
                  Our approach is personal. We take the time to understand your vision, discuss 
                  material options, and work with you throughout the process. Whether you're 
                  restoring a classic boat or customizing a new wake boat, we treat every project 
                  with the same attention to detail and pride in workmanship.
                </p>
                <p>
                  Based in West Jordan, we're proud to serve the local boating community and 
                  boat owners from across Utah and neighboring states. Stop by our shop to see 
                  our work firsthand and discuss your next project.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-sand">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-text-light">
              Experience, quality, and service that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-light">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Area Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Service Area
              </h2>
              <p className="text-lg text-text-light mb-6">
                Based in West Jordan, we proudly serve boat owners throughout Utah and neighboring states.
              </p>

              <div className="space-y-3">
                {businessInfo.serviceArea.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-dark">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-sand rounded-lg">
                <p className="text-sm text-text-light">
                  <strong className="text-primary">Note:</strong> Not sure if we can service your area? 
                  Give us a call at <a href={`tel:${contactInfo.phoneRaw}`} className="text-accent hover:underline">{contactInfo.phone}</a> and 
                  we'll be happy to discuss your location.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="h-16 w-16 text-accent mx-auto mb-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-text-light">Map placeholder</p>
                  <p className="text-sm text-text-light mt-2">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today to discuss your project and get a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" size="lg">
                Request a Quote
              </Button>
              <Button
                href={`tel:${contactInfo.phoneRaw}`}
                variant="secondary"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                Call {contactInfo.phone}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
