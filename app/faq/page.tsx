import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqs, contactInfo } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Common Questions About Marine Upholstery',
  description: 'Frequently asked questions about boat upholstery, marine flooring, covers, timelines, materials, and our service area.',
};

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about our services, materials, timelines, and process.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <Container size="md">
          <FAQAccordion faqs={faqs} />
        </Container>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-sand py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-text-light mb-8">
              We're here to help! Give us a call or stop by our shop to discuss your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`tel:${contactInfo.phoneRaw}`}
                variant="accent"
                size="lg"
              >
                Call {contactInfo.phone}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Send a Message
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Explore Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/services#upholstery"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Boat Upholstery</h4>
                <p className="text-sm text-text-light">
                  Custom interior work from captain chairs to complete redesigns
                </p>
              </a>
              <a
                href="/services#flooring"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Marine Flooring</h4>
                <p className="text-sm text-text-light">
                  EVA foam flooring, snap-in systems, and carpet replacement
                </p>
              </a>
              <a
                href="/services#covers"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Covers & Bimini Tops</h4>
                <p className="text-sm text-text-light">
                  Custom-fit covers and bimini tops to protect your boat
                </p>
              </a>
              <a
                href="/services#repairs"
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-lg font-bold text-primary mb-2">Repairs & Restoration</h4>
                <p className="text-sm text-text-light">
                  Expert seam repairs, tear patching, and restoration
                </p>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
