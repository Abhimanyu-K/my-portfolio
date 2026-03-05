import { personalInfo, socialLinks } from '../../data/personal';
import { Button } from '../ui/Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'email':
        return (
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-background dark:bg-dark-background border-t border-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground">
              {personalInfo.name}
            </h3>
            <p className="text-muted dark:text-dark-muted text-xs sm:text-sm">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground">
              Quick Links
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a href="/" className="text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors">
                Home
              </a>
              <a href="/projects" className="text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors">
                Projects
              </a>
              <a href="/experience" className="text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors">
                Experience
              </a>
              <a href="/blog" className="text-xs sm:text-sm text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors">
                Blog
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-foreground dark:text-dark-foreground">
              Connect
            </h3>
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center sm:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-accent transition-colors"
                  aria-label={link.platform}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
            <div className="flex justify-center sm:justify-start">
              <Button
                href={personalInfo.resume}
                variant="secondary"
                download
                className="text-xs sm:text-sm min-h-[44px]"
              >
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 sm:pt-6 border-t border-border dark:border-dark-border text-center">
          <p className="text-xs sm:text-sm text-muted dark:text-dark-muted">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
