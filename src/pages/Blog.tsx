import { Section } from '../components/ui/Section';
import { BlogPostCard } from '../components/sections/BlogPostCard';
import { blogPosts } from '../data/blog';

export const Blog = () => {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="animate-fade-in">
      <Section
        title="Blog & Articles"
        subtitle="Thoughts, tutorials, and insights on software development"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sortedPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
