import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-white/5 text-text-light border border-white/10',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    outline: 'border border-white/20 text-text-light',
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
