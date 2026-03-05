import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/sections/ProjectCard';
import { projects } from '../data/projects';

export const Projects = () => {
  // Separate featured and regular projects
  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <div className="animate-fade-in">
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <Section
          title="Featured Projects"
          subtitle="Highlighting my most impactful work"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* All Projects */}
      <Section
        id="projects"
        title={featuredProjects.length > 0 ? 'More Projects' : 'Projects'}
        subtitle="A collection of projects I've worked on"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
