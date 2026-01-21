import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/lib/content';

export const Testimonials: React.FC = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-dark-lighter border-y border-white/5">
      <Container>
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Trusted by boat owners across Utah and neighboring states"
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};
