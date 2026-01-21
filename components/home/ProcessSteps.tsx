import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/content';

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-20 bg-dark">
      <Container>
        <SectionHeading
          title="Our Process"
          subtitle="From consultation to completion - here's how we transform your boat"
          centered
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-accent/20" style={{ transform: 'translateX(-50%)' }} />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number Circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent text-white text-2xl font-bold mb-4 shadow-lg shadow-accent/20 border border-accent-light">
                  {step.number}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
