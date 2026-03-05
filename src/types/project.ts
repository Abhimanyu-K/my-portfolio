export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;  // Full detailed content
  techStack: string[];
  category: 'professional' | 'open-source' | 'personal';
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  image?: string;
  featured?: boolean;
  duration?: string;
  role?: string;
  team?: string;
  impact?: string[];
}
