import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/lib/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark text-white py-24 md:py-32 overflow-hidden">
      {/* Geometric Background Elements - matching logo style */}
      <div className="absolute inset-0">
        {/* Top border line */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        {/* Left accent line */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-accent/20 to-transparent"></div>
        
        {/* Right accent line */}
        <div className="absolute top-1/3 right-0 w-32 h-px bg-gradient-to-l from-accent/20 to-transparent"></div>
        
        {/* Bottom border line */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
        
        {/* Corner accents matching logo frame style */}
        <div className="absolute top-24 left-[5%] w-16 h-16 border-t-2 border-l-2 border-accent/20"></div>
        <div className="absolute top-24 right-[5%] w-16 h-16 border-t-2 border-r-2 border-accent/20"></div>
        <div className="absolute bottom-24 left-[5%] w-16 h-16 border-b-2 border-l-2 border-accent/20"></div>
        <div className="absolute bottom-24 right-[5%] w-16 h-16 border-b-2 border-r-2 border-accent/20"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo centered */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Image 
                src="/logo-transperant.png" 
                alt="Toy's Services & Upholstery"
                width={400}
                height={120}
                className="h-auto w-full max-w-md"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
            Premium Marine Upholstery & Flooring
          </h1>
          <p className="text-xl md:text-2xl text-text-light mb-8 leading-relaxed">
            Transform your boat's interior with custom upholstery, marine flooring, and covers. 
            Trusted craftsmanship from West Jordan, serving Utah and neighboring states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/contact" variant="accent" size="lg">
              Request a Quote
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

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <svg className="h-5 w-5 text-accent" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium text-text-light">West Jordan, UT • Serving Utah & Neighboring States</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
