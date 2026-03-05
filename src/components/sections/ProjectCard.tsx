import { Link } from 'react-router-dom';
import { Project } from '../../types/project';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block h-full">
      <Card className="h-full flex flex-col hover:scale-[1.02] transition-transform p-4 sm:p-6">
        {/* Category Badge */}
        <div className="mb-2 sm:mb-3">
          <Badge
            label={project.category}
            variant={project.featured ? 'primary' : 'secondary'}
          />
          {project.featured && (
            <Badge label="Featured" variant="primary" className="ml-2" />
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-muted dark:text-dark-muted mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <Badge key={tech} label={tech} variant="secondary" />
            ))}
            {project.techStack.length > 5 && (
              <Badge label={`+${project.techStack.length - 5}`} variant="secondary" />
            )}
          </div>
        </div>

        {/* Read More */}
        <div className="flex items-center gap-2 text-sm font-medium text-accent dark:text-dark-accent pt-3 sm:pt-4 border-t border-border dark:border-dark-border">
          Read full case study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </Card>
    </Link>
  );
};
