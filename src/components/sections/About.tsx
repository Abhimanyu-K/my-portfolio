import { Section } from '../ui/Section';
import { personalInfo } from '../../data/personal';

export const About = () => {
  const stats = [
    { label: 'Years Experience', value: '~3' },
    { label: 'Projects Delivered', value: '15+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me and what I do"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Bio */}
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-base sm:text-lg leading-relaxed text-foreground dark:text-dark-foreground max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-5 sm:p-6 rounded-lg bg-white dark:bg-dark-background border border-border dark:border-dark-border hover:border-accent dark:hover:border-dark-accent transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent dark:text-dark-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted dark:text-dark-muted font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
