import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'ghost' | 'gradient' | 'premium' | 'accent';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'relative overflow-hidden font-medium rounded-xl transition-all duration-500 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none';

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      icon: 'p-2.5 h-11 w-11',
    };

    const variantStyles = {
      default: 'bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
      ghost: 'text-primary hover:bg-primary/10 hover:shadow-md',
      gradient: 'bg-gradient-to-r from-primary via-accent to-premium text-white hover:shadow-glow hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0',
      premium: 'bg-gradient-to-br from-premium to-primary text-white hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 border border-white/20',
      accent: 'bg-accent text-accent-foreground hover:bg-accent-dark hover:shadow-glow-accent hover:-translate-y-0.5 active:translate-y-0',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className || ''} group`}
        {...props}
      >
        {/* Shimmer effect overlay */}
        {(variant === 'gradient' || variant === 'premium') && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        )}

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>

        {/* Glow effect on hover */}
        {(variant === 'gradient' || variant === 'premium') && (
          <span className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-primary via-accent to-premium opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
