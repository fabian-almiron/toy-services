import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  const alignmentClasses = centered ? 'text-center' : '';
  
  return (
    <div className={`${alignmentClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-light max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
