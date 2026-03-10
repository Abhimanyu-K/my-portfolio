import { cn } from '../../utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  download?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button',
  download = false,
}: ButtonProps) => {
  const variants = {
    primary: 'bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover transition-all duration-200 hover:-translate-y-0.5',
    secondary: 'border border-accent dark:border-dark-accent text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white transition-all duration-200',
    ghost: 'text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-accent/10 transition-all duration-200',
  };

  const baseStyles = cn(
    'font-medium inline-flex items-center justify-center gap-2',
    variants[variant],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
        {...(download && { download: true })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
    >
      {children}
    </button>
  );
};
