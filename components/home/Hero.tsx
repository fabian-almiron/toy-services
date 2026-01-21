'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { contactInfo } from '@/lib/content';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark text-white py-24 md:py-32 overflow-hidden">
      {/* Animated Geometry Background */}
      <div className="absolute inset-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-primary-dark"></div>
        
        {/* Animated Lines Layer 1 */}
        <div className="geo-lines lines-1"></div>
        
        {/* Animated Lines Layer 2 */}
        <div className="geo-lines lines-2"></div>
        
        {/* Animated Grid Overlay */}
        <div className="geo-grid"></div>
        
        {/* Glow Effect */}
        <div className="geo-glow"></div>
      </div>

      <style jsx>{`
        /* Animated Diagonal Lines - Layer 1 */
        .geo-lines {
          position: absolute;
          inset: 0;
          opacity: 0.15;
        }

        .lines-1 {
          background-image: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(59, 130, 246, 0.1) 100px,
              rgba(59, 130, 246, 0.1) 101px
            );
          animation: lineSlide1 20s linear infinite;
        }

        .lines-2 {
          background-image: 
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(96, 165, 250, 0.08) 80px,
              rgba(96, 165, 250, 0.08) 81px
            );
          animation: lineSlide2 15s linear infinite;
        }

        @keyframes lineSlide1 {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(141px) translateY(141px);
          }
        }

        @keyframes lineSlide2 {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-113px) translateY(113px);
          }
        }

        /* Animated Grid */
        .geo-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s linear infinite;
          opacity: 0.6;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        /* Subtle Glow Effect */
        .geo-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 30% 50%,
            rgba(59, 130, 246, 0.08) 0%,
            transparent 50%
          );
          animation: glowPulse 8s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .geo-lines {
            opacity: 0.1;
          }
          
          .geo-grid {
            background-size: 40px 40px;
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
