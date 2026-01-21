import React from 'react';
import { Container } from '@/components/ui/Container';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Premium Craftsmanship',
      description: '20+ years of marine upholstery expertise',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Marine-Grade Materials',
      description: 'UV-resistant vinyl, closed-cell foam, premium fabrics',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fast Turnaround',
      description: 'Typical 5–7 working days on many projects',
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Custom Designs',
      description: 'Personalized colors, stitching, and patterns',
    },
  ];

  return (
    <section className="py-16 bg-dark-lighter border-y border-white/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 border border-accent/20">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-text-light">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
