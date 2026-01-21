import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/lib/content';

export const CTABand: React.FC = () => {
  return (
    <section className="bg-dark-card border-y border-accent/20 text-white py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Boat?
          </h2>
          <p className="text-xl text-text-light mb-8">
            Request a free quote today and let's discuss how we can transform your boat's interior.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Request a Free Quote
            </Button>
            <Button
              href={`tel:${contactInfo.phoneRaw}`}
              variant="secondary"
              size="lg"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Call {contactInfo.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
