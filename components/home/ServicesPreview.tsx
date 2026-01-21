import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';

export const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: 'upholstery' as const,
      title: 'Boat Upholstery',
      description: 'Custom interior work from captain chairs to complete redesigns with marine-grade materials.',
      href: '/services#upholstery',
    },
    {
      icon: 'flooring' as const,
      title: 'Marine Flooring',
      description: 'EVA foam flooring, snap-in systems, and carpet replacement for a modern, non-slip deck.',
      href: '/services#flooring',
    },
    {
      icon: 'covers' as const,
      title: 'Covers & Bimini Tops',
      description: 'Custom-fit covers and bimini tops to protect your boat from the elements.',
      href: '/services#covers',
    },
    {
      icon: 'repairs' as const,
      title: 'Repairs & Restoration',
      description: 'Expert seam repairs, tear patching, and restoration to extend your upholstery life.',
      href: '/services#repairs',
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Complete marine interior solutions for every boat owner"
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
