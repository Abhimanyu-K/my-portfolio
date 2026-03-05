import { Section } from '../ui/Section';
import { Badge } from '../ui/Badge';
import { skills } from '../../data/skills';

export const Skills = () => {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Tools and technologies I work with"
    >
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
        {skills.map((category, index) => (
          <div
            key={category.category}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} label={skill} variant="primary" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
