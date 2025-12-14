import React from 'react';
import { cn } from '@/lib/utils';
import { spacing } from '@/design-tokens';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'teal' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'white',
  spacing = 'lg',
  fullWidth = false,
  id,
}) => {
  const backgroundClasses = {
    white: 'bg-white text-gray-900',
    gray: 'bg-gradient-to-b from-gray-50 to-white text-gray-900',
    teal: 'bg-teal-primary text-white',
    gradient: 'bg-gradient-to-br from-teal-primary to-teal-dark text-white',
  };

  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-32',
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className
      )}
    >
      <div className={cn(
        fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      )}>
        {children}
      </div>
    </section>
  );
};

