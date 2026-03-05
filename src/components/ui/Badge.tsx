import { cn } from '../../utils/cn';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Badge = ({ label, variant = 'primary', className }: BadgeProps) => {
  const variants = {
    primary: 'bg-accent/10 dark:bg-dark-accent/10 text-accent dark:text-dark-accent border border-accent/20 dark:border-dark-accent/20',
    secondary: 'bg-muted/10 dark:bg-dark-muted/10 text-muted dark:text-dark-muted border border-muted/20 dark:border-dark-muted/20',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
};
