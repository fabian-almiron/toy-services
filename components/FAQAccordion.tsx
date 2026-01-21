'use client';

import React, { useState } from 'react';
import { FAQ } from '@/lib/content';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-dark-card rounded-lg border border-white/10 overflow-hidden">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
            onClick={() => toggleFAQ(faq.id)}
            aria-expanded={openId === faq.id}
          >
            <span className="font-semibold text-white pr-8">{faq.question}</span>
            <svg
              className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                openId === faq.id ? 'transform rotate-180' : ''
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openId === faq.id && (
            <div className="px-6 py-4 bg-white/5 border-t border-white/10">
              <p className="text-text-light leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
