import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/personal';

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-hover dark:from-dark-accent dark:to-dark-accent-hover p-1">
            <div className="w-full h-full rounded-full bg-background dark:bg-dark-background flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-accent dark:text-dark-accent">
              {personalInfo.name.charAt(0)}
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground to-accent dark:from-dark-foreground dark:to-dark-accent bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-accent dark:text-dark-accent font-medium mb-4 sm:mb-6">
          {personalInfo.title}
        </p>

        <p className="text-base sm:text-lg text-muted dark:text-dark-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            to="/projects"
            className="bg-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg hover:bg-accent-hover dark:hover:bg-dark-accent-hover active:bg-accent-hover transition-all duration-200 hover:-translate-y-0.5 font-medium inline-flex items-center justify-center gap-2 min-h-[44px]"
          >
            View Projects
          </Link>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent dark:border-dark-accent text-accent dark:text-dark-accent px-6 py-3 rounded-lg hover:bg-accent dark:hover:bg-dark-accent hover:text-white active:bg-accent transition-all duration-200 font-medium inline-flex items-center justify-center gap-2 min-h-[44px]"
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};
