'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/lib/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/black-interior-slide.jpg)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />
      
      {/* Animated Geometric Pattern */}
      <div className="absolute inset-0">
        <div className="geo-pattern pattern-1"></div>
        <div className="geo-pattern pattern-2"></div>
      </div>

      <style jsx>{`
        /* Geometric Pattern Animations */
        .geo-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.08;
        }

        .pattern-1 {
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 80px,
              rgba(255, 255, 255, 0.15) 80px,
              rgba(255, 255, 255, 0.15) 82px,
              transparent 82px,
              transparent 160px,
              rgba(255, 255, 255, 0.08) 160px,
              rgba(255, 255, 255, 0.08) 240px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(255, 255, 255, 0.1) 80px,
              rgba(255, 255, 255, 0.1) 82px
            );
          animation: patternFlow1 25s ease-in-out infinite;
        }

        .pattern-2 {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.05) 100px,
              rgba(255, 255, 255, 0.05) 101px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.05) 100px,
              rgba(255, 255, 255, 0.05) 101px
            );
          animation: patternFlow2 20s ease-in-out infinite;
        }

        @keyframes patternFlow1 {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.08;
          }
          25% {
            transform: translate(50px, -30px) rotate(2deg);
            opacity: 0.12;
          }
          50% {
            transform: translate(80px, 0px) rotate(0deg);
            opacity: 0.08;
          }
          75% {
            transform: translate(50px, 30px) rotate(-2deg);
            opacity: 0.12;
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.08;
          }
        }

        @keyframes patternFlow2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
          33% {
            transform: translate(-40px, 40px) scale(1.05);
            opacity: 0.1;
          }
          66% {
            transform: translate(40px, -40px) scale(0.95);
            opacity: 0.06;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .geo-pattern {
            opacity: 0.05;
          }
        }
      `}</style>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
            Premium Marine Upholstery & Flooring
          </h1>
          <p className="text-xl md:text-2xl text-text-light mb-8 leading-relaxed">
            Transform your boat's interior with custom upholstery, marine flooring, and covers. 
            Trusted craftsmanship from West Jordan, serving Utah and neighboring states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-64">
              Request a Quote
            </Button>
            <Button
              href={`tel:${contactInfo.phoneRaw}`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-64 bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Call {contactInfo.phone}
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-lg shadow-black/20 hover:shadow-black/30 hover:border-white/30 transition-all duration-300">
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
