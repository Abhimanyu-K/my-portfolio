import { Experience } from '../../types/experience';
import { Badge } from '../ui/Badge';
import { formatDateRange } from '../../utils/formatDate';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Date Range - Left Side */}
            <div className="md:text-right md:pr-8 relative">
              <div className="text-xs sm:text-sm font-medium text-accent dark:text-dark-accent">
                {formatDateRange(exp.startDate, exp.endDate)}
              </div>

              {/* Timeline Circle - positioned on the right edge of date column */}
              <div className="hidden md:block absolute right-0 top-0 translate-x-[9px] w-4 h-4 rounded-full bg-accent dark:bg-dark-accent border-4 border-background dark:border-dark-background z-10"></div>
            </div>

            {/* Vertical Line - Between date and content */}
            <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-0.5 bg-accent/30 dark:bg-dark-accent/30 -translate-x-1/2"></div>

            {/* Content - Right Side */}
            <div className="relative md:pl-0 pl-6 sm:pl-8 border-l-2 md:border-l-0 border-accent/30 dark:border-dark-accent/30">
              {/* Mobile Timeline Circle */}
              <div className="md:hidden absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent dark:bg-dark-accent border-4 border-background dark:border-dark-background"></div>

              {/* Mobile Date */}
              <div className="md:hidden text-xs sm:text-sm font-medium text-accent dark:text-dark-accent mb-2 sm:mb-3">
                {formatDateRange(exp.startDate, exp.endDate)}
              </div>

              <div className="bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-4 sm:p-6 hover:border-accent dark:hover:border-dark-accent transition-all duration-200 hover:shadow-lg">
                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground dark:text-dark-foreground mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted dark:text-dark-muted">
                    <span className="font-medium text-accent dark:text-dark-accent">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="mb-3 sm:mb-4 space-y-1.5 sm:space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-foreground dark:text-dark-foreground leading-relaxed"
                    >
                      <span className="text-accent dark:text-dark-accent mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {exp.techStack.map((tech) => (
                    <Badge key={tech} label={tech} variant="secondary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
