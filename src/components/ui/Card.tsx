import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, href, onClick }: CardProps) => {
  const baseStyles = "bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, "block", className)}
      >
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(baseStyles, "w-full text-left", className)}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={cn(baseStyles, className)}>
      {children}
    </div>
  );
};
