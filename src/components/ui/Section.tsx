import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export const Section = ({ children, title, subtitle, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn('section-container', className)}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12 text-center">
          {title && (
            <h2 className="text-section-title mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted dark:text-dark-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
