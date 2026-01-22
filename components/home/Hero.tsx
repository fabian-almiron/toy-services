'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/lib/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark text-white -mt-20 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark"></div>
      
      {/* Animated Stitching Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="stitch-svg" width="100%" height="100%">
          <defs>
            <pattern id="stitch1" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <line x1="0" y1="50" x2="200" y2="50" className="stitch-line stitch-line-1" />
              <line x1="0" y1="150" x2="200" y2="150" className="stitch-line stitch-line-2" />
            </pattern>
            <pattern id="stitch2" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              <line x1="50" y1="0" x2="50" y2="250" className="stitch-line stitch-line-3" />
              <line x1="180" y1="0" x2="180" y2="250" className="stitch-line stitch-line-4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stitch1)" />
          <rect width="100%" height="100%" fill="url(#stitch2)" />
        </svg>
      </div>

      <style jsx>{`
        .stitch-svg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
        }

        .stitch-line {
          stroke: rgba(255, 255, 255, 0.4);
          stroke-width: 2;
          stroke-linecap: round;
          fill: none;
        }

        .stitch-line-1 {
          stroke-dasharray: 15 20;
          animation: stitchDash1 25s linear infinite;
        }

        .stitch-line-2 {
          stroke-dasharray: 12 25;
          animation: stitchDash2 30s linear infinite;
        }

        .stitch-line-3 {
          stroke-dasharray: 18 22;
          animation: stitchDash3 28s linear infinite;
        }

        .stitch-line-4 {
          stroke-dasharray: 10 30;
          animation: stitchDash4 32s linear infinite;
        }

        @keyframes stitchDash1 {
          to {
            stroke-dashoffset: -200;
          }
        }

        @keyframes stitchDash2 {
          to {
            stroke-dashoffset: -200;
          }
        }

        @keyframes stitchDash3 {
          to {
            stroke-dashoffset: -250;
          }
        }

        @keyframes stitchDash4 {
          to {
            stroke-dashoffset: -250;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .stitch-svg {
            opacity: 0.1;
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
