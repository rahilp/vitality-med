import React from 'react';
import { cn } from '@/lib/utils';

export interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        'relative bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/10',
        'hover:bg-white/10 hover:border-white/20 transition-all duration-300',
        className
      )}
    >
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-gold-primary/20 to-gold-dark/20 flex items-center justify-center border border-gold-primary/30">
            {React.cloneElement(icon as React.ReactElement, {
              className: 'w-5 h-5 sm:w-6 sm:h-6 text-gold-primary',
              strokeWidth: 2,
              fill: 'none',
            })}
          </div>
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-semibold text-gold-primary mb-1 leading-tight">
        {value}
      </div>
      <div className="text-sm sm:text-base text-gray-300 font-normal">
        {label}
      </div>
    </div>
  );
};

