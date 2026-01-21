'use client';

import React from 'react';
import { FacebookReel } from '@/lib/content';

interface FacebookReelsSectionProps {
  reels: FacebookReel[];
}

export const FacebookReelsSection: React.FC<FacebookReelsSectionProps> = ({ reels }) => {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          See Our Work in Action
        </h2>
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          Check out our latest projects and behind-the-scenes looks at our craftsmanship
        </p>
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Video Embed Container */}
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                src={reel.embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={reel.title}
              />
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-primary mb-2">
                {reel.title}
              </h3>
              <p className="text-sm text-text-light">
                {reel.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More CTA */}
      <div className="text-center mt-8">
        <a
          href="https://www.facebook.com/ToysServicesUpholstery/reels/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg hover:bg-[#145dbf] transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
          View All Reels on Facebook
        </a>
      </div>
    </div>
  );
};
