import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { useEffect, useState } from 'react';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [contentElements, setContentElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!project) return;

    const lines = project.content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.trim() === '') {
        elements.push(<br key={`br-${i}`} />);
        i++;
        continue;
      }

      // Code blocks
      if (line.startsWith('```')) {
        const codeLines: string[] = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre
            key={`code-${i}`}
            className="bg-stone-100 dark:bg-stone-800 p-3 sm:p-4 rounded-lg overflow-x-auto my-3 sm:my-4 text-xs sm:text-sm font-mono whitespace-pre leading-relaxed"
          >
            <code className="font-mono">{codeLines.join('\n')}</code>
          </pre>
        );
        i++;
        continue;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${i}`} className="text-4xl font-bold mt-8 mb-4">
            {line.substring(2)}
          </h1>
        );
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-3xl font-bold mt-8 mb-4">
            {line.substring(3)}
          </h2>
        );
        i++;
        continue;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${i}`} className="text-2xl font-semibold mt-6 mb-3">
            {line.substring(4)}
          </h3>
        );
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === '---') {
        elements.push(
          <hr
            key={`hr-${i}`}
            className="my-8 border-t-2 border-border dark:border-dark-border"
          />
        );
        i++;
        continue;
      }

      // Lists
      if (line.trim().startsWith('- ')) {
        const listText = line.substring(line.indexOf('- ') + 2);
        const renderedListText = renderInlineFormatting(listText, i);
        elements.push(
          <li key={`li-${i}`} className="ml-6 my-2">
            {renderedListText}
          </li>
        );
        i++;
        continue;
      }

      if (/^\d+\./.test(line.trim())) {
        const listText = line.substring(line.indexOf('. ') + 2);
        const renderedListText = renderInlineFormatting(listText, i);
        elements.push(
          <li key={`li-${i}`} className="ml-6 my-2">
            {renderedListText}
          </li>
        );
        i++;
        continue;
      }

      // Regular paragraphs
      const renderedLine = renderInlineFormatting(line, i);
      elements.push(
        <p key={`p-${i}`} className="my-4 leading-relaxed text-lg">
          {renderedLine}
        </p>
      );
      i++;
    }

    setContentElements(elements);
  }, [project]);

  const renderInlineFormatting = (text: string, index: number) => {
    const parts: (string | JSX.Element)[] = [];
    let partIndex = 0;

    // Handle inline code
    const codeRegex = /`([^`]+)`/g;
    let match;
    let lastIndex = 0;

    while ((match = codeRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <code
          key={`code-${index}-${partIndex++}`}
          className="bg-stone-100 dark:bg-stone-800 px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono"
        >
          {match[1]}
        </code>
      );
      lastIndex = codeRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Handle bold
    const finalParts: (string | JSX.Element)[] = [];
    parts.forEach((part, idx) => {
      if (typeof part === 'string') {
        const boldRegex = /\*\*(.*?)\*\*/g;
        const boldParts = part.split(boldRegex);
        boldParts.forEach((boldPart, boldIdx) => {
          if (boldIdx % 2 === 1) {
            finalParts.push(
              <strong key={`bold-${index}-${idx}-${boldIdx}`}>{boldPart}</strong>
            );
          } else if (boldPart) {
            finalParts.push(boldPart);
          }
        });
      } else {
        finalParts.push(part);
      }
    });

    return finalParts.length > 0 ? finalParts : text;
  };

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="animate-fade-in">
      <Section className="pt-8 sm:pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back to Projects */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover mb-6 sm:mb-8 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-6 sm:mb-8">
            {/* Category Badge */}
            <div className="mb-3 sm:mb-4">
              <Badge label={project.category} variant="primary" />
              {project.featured && (
                <Badge label="Featured" variant="primary" className="ml-2" />
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground">
              {project.title}
            </h1>

            {/* Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
              {project.role && (
                <div>
                  <span className="text-muted dark:text-dark-muted">Role:</span>{' '}
                  <span className="font-medium">{project.role}</span>
                </div>
              )}
              {project.duration && (
                <div>
                  <span className="text-muted dark:text-dark-muted">Duration:</span>{' '}
                  <span className="font-medium">{project.duration}</span>
                </div>
              )}
              {project.team && (
                <div>
                  <span className="text-muted dark:text-dark-muted">Team:</span>{' '}
                  <span className="font-medium">{project.team}</span>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} label={tech} variant="secondary" />
                ))}
              </div>
            </div>

            {/* Impact */}
            {project.impact && project.impact.length > 0 && (
              <div className="bg-accent/5 dark:bg-dark-accent/5 border border-accent/20 dark:border-dark-accent/20 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground">
                  Key Impact
                </h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {project.impact.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-2 sm:gap-3 text-xs sm:text-sm text-foreground dark:text-dark-foreground"
                    >
                      <span className="text-accent dark:text-dark-accent mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </header>

          {/* Content */}
          <article className="prose prose-stone dark:prose-invert max-w-none prose-sm sm:prose-base">
            <div className="project-content">{contentElements}</div>
          </article>

          {/* Footer with Links */}
          <footer className="mt-12 pt-8 border-t border-border dark:border-dark-border">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to all projects
              </Link>

              {/* External Links */}
              {(project.links.github || project.links.live || project.links.demo) && (
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent dark:bg-dark-accent text-white rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover transition-colors text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-accent dark:border-dark-accent text-accent dark:text-dark-accent rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white transition-colors text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </footer>
        </div>
      </Section>
    </div>
  );
};
