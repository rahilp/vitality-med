import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      icon,
      iconPosition = 'right',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center [font-family:var(--font-heading)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      primary: 'bg-teal-primary text-white hover:bg-teal-dark shadow-md hover:shadow-lg',
      secondary: 'bg-gradient-to-br from-gold-light via-gold-primary to-gold-dark text-teal-primary font-semibold hover:shadow-xl hover:shadow-gold-primary/40 shadow-lg shadow-gold-primary/25 transition-all duration-300 hover:brightness-105',
      outline: 'border-2 border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white',
      ghost: 'text-teal-primary hover:bg-gray-50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg',
      md: 'px-6 py-2 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    };

    const classNames = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    const buttonContent = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    if (asChild && React.isValidElement(children)) {
      const childElement = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(childElement, {
        className: cn(classNames, childElement.props.className),
        ...props,
      } as any);
    }

    return (
      <button
        className={classNames}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

