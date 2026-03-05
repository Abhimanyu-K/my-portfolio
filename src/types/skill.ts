export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;  // Icon identifier (e.g., 'github', 'linkedin', 'email')
}
