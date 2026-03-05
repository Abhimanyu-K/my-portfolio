export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;  // Full blog post content (supports markdown-style formatting)
  date: string;  // ISO date string (YYYY-MM-DD)
  tags: string[];
  readTime?: string;
  author?: string;
}
