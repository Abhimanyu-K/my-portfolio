import { Section } from '../components/ui/Section';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <div className="animate-fade-in">
      <Section
        title="Work Experience"
        subtitle="My professional journey and achievements"
      >
        <ExperienceTimeline experiences={experiences} />
      </Section>

      {/* Education Section */}
      <Section
        title="Education"
        subtitle="Academic background"
        className="pt-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-dark-background border border-border dark:border-dark-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground dark:text-dark-foreground mb-2">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted dark:text-dark-muted mb-3">
              <span className="font-medium text-accent dark:text-dark-accent">
                Indian Institute of Information Technology Kottayam
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Kottayam, India</span>
              <span className="hidden sm:inline">•</span>
              <span>Aug 2019 - April 2023</span>
            </div>
            <p className="text-sm text-foreground dark:text-dark-foreground">
              Relevant coursework: Data Structures, Algorithms, Database Management Systems, Distributed Systems, Operating Systems
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
