import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { galleryItems } from '@/lib/content';

export const FeaturedGallery: React.FC = () => {
  const featuredItems = galleryItems.slice(0, 6);

  return (
    <section className="py-20 bg-dark-lighter border-y border-white/5">
      <Container>
        <SectionHeading
          title="Our Work"
          subtitle="See the quality and craftsmanship that goes into every project"
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-card border border-white/10">
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                <span className="text-text-light text-sm">Gallery Image {item.id}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold">{item.boat}</p>
                  <p className="text-sm text-text-light">{item.services.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/gallery" variant="primary" size="lg">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
};
