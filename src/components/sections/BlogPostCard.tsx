import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { formatDate } from '../../utils/formatDate';

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Date and Read Time */}
      <div className="flex items-center gap-3 mb-3 text-sm text-muted dark:text-dark-muted">
        <time dateTime={post.date}>{formatDate(post.date, 'long')}</time>
        {post.readTime && (
          <>
            <span>•</span>
            <span>{post.readTime}</span>
          </>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-dark-foreground">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-muted dark:text-dark-muted mb-4 flex-grow leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="secondary" />
          ))}
        </div>
      </div>

      {/* Read More Link */}
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent dark:text-dark-accent hover:text-accent-hover dark:hover:text-dark-accent-hover transition-colors pt-4 border-t border-border dark:border-dark-border"
      >
        Read full article
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
      </Link>
    </Card>
  );
};
