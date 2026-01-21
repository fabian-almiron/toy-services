import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  const baseClasses = 'bg-dark-card rounded-xl border border-white/10';
  const hoverClasses = hover ? 'transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
