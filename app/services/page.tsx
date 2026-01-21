import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Marine Upholstery & Flooring',
  description: 'Boat upholstery, marine flooring, covers, bimini tops, and repair services. Expert craftsmanship for Utah boat owners.',
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-16 md:py-24 border-b border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Marine Interior Solutions
            </h1>
            <p className="text-xl text-text-light">
              From custom upholstery to precision flooring, we provide everything you need 
              to transform your boat's interior with marine-grade quality.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-dark">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.slug}>
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Image Placeholder */}
                  <div className="flex-1">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-dark-card border border-white/10 flex items-center justify-center">
                      <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-accent/10 text-accent border border-accent/20">
                        <ServiceIcon type={service.icon} className="h-16 w-16" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-text-light mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">
                        What We Do
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-text">
                            <svg className="h-5 w-5 text-accent flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <Card className="p-4 mb-6 bg-white/5">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-3">
                        Best For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.bestFor.map((item, idx) => (
                          <Badge key={idx} variant="accent">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </Card>

                    {/* Materials & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                          Materials
                        </h3>
                        <ul className="space-y-1 text-sm text-text-light">
                          {service.materials.map((material, idx) => (
                            <li key={idx}>• {material}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                          Typical Timeline
                        </h3>
                        <p className="text-sm text-text-light">{service.timeline}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button href="/contact" variant="accent" size="lg">
                      {service.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Divider (except last item) */}
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark-lighter border-t border-white/10 py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-text-light mb-8">
              We're happy to discuss your boat and recommend the best solutions for your needs and budget.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
