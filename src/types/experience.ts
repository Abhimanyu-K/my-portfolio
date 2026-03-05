export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;  // ISO date string (YYYY-MM-DD)
  endDate: string | 'Present';
  achievements: string[];
  techStack: string[];
  logo?: string;
}
