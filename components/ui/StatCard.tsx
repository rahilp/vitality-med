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
        'relative bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20',
        'hover:bg-white/15 hover:border-white/30 transition-all duration-300',
        className
      )}
    >
      {icon && (
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-light via-gold-primary to-gold-dark flex items-center justify-center border-2 border-gold-primary/40">
            {React.cloneElement(icon as React.ReactElement, {
              className: 'w-10 h-10 sm:w-12 sm:h-12 text-teal-dark stroke-[3]',
              strokeWidth: 3,
              fill: 'none',
            })}
          </div>
        </div>
      )}
      <div className="text-5xl sm:text-6xl font-bold text-gold-primary mb-2 leading-tight">
        {value}
      </div>
      <div className="text-base sm:text-lg text-gray-200 font-medium">
        {label}
      </div>
    </div>
  );
};

