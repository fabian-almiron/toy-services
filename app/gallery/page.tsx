import React from 'react';
import { Container } from '@/components/ui/Container';
import { GalleryGrid } from '@/components/GalleryGrid';
import { FacebookReelsSection } from '@/components/FacebookReelsSection';
import { galleryItems, facebookReels } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Marine Upholstery Projects',
  description: 'View our portfolio of custom boat upholstery, marine flooring, and cover projects. See the quality craftsmanship we deliver.',
};

export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-200">
              Browse our gallery of completed projects showcasing custom upholstery, 
              marine flooring, covers, and restoration work.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <Container>
          <GalleryGrid items={galleryItems} />
        </Container>
      </section>

      {/* Facebook Reels Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <FacebookReelsSection reels={facebookReels} />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-sand py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Transform Your Boat?
            </h2>
            <p className="text-lg text-text-light mb-8">
              Let's create a custom interior that matches your style and exceeds your expectations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-accent text-white hover:bg-accent-dark transition-all duration-200"
            >
              Get Your Free Quote
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
