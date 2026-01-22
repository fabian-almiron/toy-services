import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-xl overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-br from-white/20 to-white/10 text-white hover:from-white/30 hover:to-white/20 focus:ring-white/50 border border-white/30 hover:border-white/40',
    secondary: 'bg-gradient-to-br from-white/10 to-white/5 text-white hover:from-white/20 hover:to-white/10 focus:ring-white/50 border border-white/20 hover:border-white/30',
    accent: 'bg-gradient-to-br from-accent/80 to-accent/60 text-white hover:from-accent/90 hover:to-accent/70 focus:ring-accent/50 border border-accent-light/40 hover:border-accent-light/60',
  };
  
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };
  
  const glassShine = (
    <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  );
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {glassShine}
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {glassShine}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
