'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { GalleryItem } from '@/lib/content';

interface GalleryGridProps {
  items: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'full-interior', label: 'Full Interior' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'repairs', label: 'Repairs' },
    { id: 'covers', label: 'Covers/Bimini' },
    { id: 'before-after', label: 'Before & After' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const goToPrevious = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    const previousIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setSelectedItem(filteredItems[previousIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeFilter === filter.id
                ? 'bg-accent text-white'
                : 'bg-white text-text-dark hover:bg-sand'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <button
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 focus:outline-none focus:ring-4 focus:ring-accent"
          >
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Gallery Image {item.id}</span>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p className="font-semibold mb-1">{item.boat}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.services.slice(0, 2).map((service, idx) => (
                    <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Previous image"
          >
            <svg className="h-12 w-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white hover:text-accent transition-colors z-10"
            aria-label="Next image"
          >
            <svg className="h-12 w-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/40 to-accent/40 rounded-lg flex items-center justify-center mb-6">
              <span className="text-white text-lg">Gallery Image {selectedItem.id}</span>
            </div>

            {/* Caption */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.boat}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedItem.services.map((service, idx) => (
                  <Badge key={idx} variant="accent">
                    {service}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-300">{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
