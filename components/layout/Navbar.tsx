'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { businessInfo, contactInfo } from '@/lib/content';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark/98 backdrop-blur-md shadow-xl border-b border-white/10 py-3' 
            : 'bg-dark/85 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 relative z-10 transition-transform duration-300 hover:scale-105"
            >
              <Image 
                src="/logo-transperant.png" 
                alt={businessInfo.name}
                width={200}
                height={70}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-11' : 'h-14'
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg group ${
                    isActive(link.href) 
                      ? 'text-accent' 
                      : 'text-text-light hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-300 ${
                      isActive(link.href) 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Hover background */}
                  <span 
                    className={`absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isActive(link.href) ? 'opacity-100' : ''
                    }`}
                  />
                </Link>
              ))}
              
              {/* Contact Info */}
              <div className="hidden xl:flex items-center ml-4 mr-2 text-text-light border-l border-white/20 pl-6">
                <svg 
                  className="w-4 h-4 mr-2 text-accent" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm font-medium hover:text-accent transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <Button 
                href="/contact" 
                variant="accent" 
                size="sm"
                className="ml-2 shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 p-2 rounded-lg text-text-light hover:text-accent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-dark-lighter shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <Image 
            src="/logo-transperant.png" 
            alt={businessInfo.name}
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <button
            className="p-2 rounded-lg text-text-light hover:text-accent hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
          <div className="flex-1 px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-accent/20 text-accent shadow-lg shadow-accent/10'
                    : 'text-text-light hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {isActive(link.href) && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-white/10 space-y-4 bg-dark/50">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-white/5 text-text-light hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <svg 
                className="w-5 h-5 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <span className="font-medium">{contactInfo.phone}</span>
            </a>
            <Button 
              href="/contact" 
              variant="accent" 
              size="md" 
              className="w-full shadow-lg shadow-accent/20"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
