import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-2.5 text-base',
      lg: 'px-8 py-3 text-lg',
      icon: 'p-2 h-10 w-10',
    };

    const accentColor = '#4B9CD3';

    const variantStyles: Record<string, React.CSSProperties> = {
      default: {
        backgroundColor: accentColor,
        color: 'white',
      },
      outline: {
        border: `2px solid ${accentColor}`,
        color: accentColor,
      },
      ghost: {
        color: accentColor,
      },
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${className || ''}`}
        style={{
          ...variantStyles[variant],
          focusRingColor: accentColor,
        }}
        onMouseEnter={(e) => {
          if (variant === 'default') {
            (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
          } else if (variant === 'outline') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#f0f8ff';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'default') {
            (e.currentTarget as HTMLButtonElement).style.opacity = '1';
          } else if (variant === 'outline') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
