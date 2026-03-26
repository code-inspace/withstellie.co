import React, { useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import gsap from 'gsap';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;

      const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = button.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.2); // moderate magnetism
        yTo(y * 0.2);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      // Only apply magnetic effect on desktop
      if (window.matchMedia("(min-width: 768px)").matches) {
        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    const variants = {
      primary: "bg-[#1a3a32] text-white",
      secondary: "bg-[#1a1a1a] text-[#f4f7f4]",
      outline: "border border-[#1a1a1a]/20 text-[#1a1a1a] hover:border-[#1a1a1a]/40 shadow-sm",
      ghost: "bg-transparent text-[#1a1a1a] hover:bg-[#1a1a1a]/5",
    };

    const sizes = {
      sm: "px-6 py-3 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 ease-magnetic hover:scale-[1.03] group hover:-translate-y-[1px]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant !== 'ghost' && (
          <span 
            className={cn(
              "absolute inset-0 translate-y-[100%] rounded-full transition-transform duration-500 ease-magnetic group-hover:translate-y-0",
              variant === 'primary' ? "bg-bliss" : variant === 'outline' ? "bg-sunbeam" : "bg-eclipse"
            )}
          />
        )}
        <span className={cn(
          "relative z-10 flex items-center justify-center gap-2",
          variant === 'outline' ? "group-hover:text-eclipse transition-colors duration-300" : ""
        )}>
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = 'Button';
