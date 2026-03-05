import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { formatDate } from '../utils/formatDate';
import { useEffect, useState } from 'react';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [contentElements, setContentElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!post) return;

    const lines = post.content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Skip empty lines
      if (line.trim() === '') {
        elements.push(<br key={`br-${i}`} />);
        i++;
        continue;
      }

      // Code blocks
      if (line.startsWith('```')) {
        const codeLines: string[] = [];
        i++; // Skip opening ```
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
        i++; // Skip closing ```
        continue;
      }

      // H1
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={`h1-${i}`} className="text-4xl font-bold mt-8 mb-4">
            {line.substring(2)}
          </h1>
        );
        i++;
        continue;
      }

      // H2
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${i}`} className="text-3xl font-bold mt-8 mb-4">
            {line.substring(3)}
          </h2>
        );
        i++;
        continue;
      }

      // H3
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

      // Numbered lists
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

      // Regular paragraph with inline formatting
      const renderedLine = renderInlineFormatting(line, i);
      elements.push(
        <p key={`p-${i}`} className="my-4 leading-relaxed text-lg">
          {renderedLine}
        </p>
      );
      i++;
    }

    setContentElements(elements);
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const renderInlineFormatting = (text: string, index: number) => {
    const parts: (string | JSX.Element)[] = [];
    let currentIndex = 0;
    let partIndex = 0;

    // Handle inline code `code`
    const codeRegex = /`([^`]+)`/g;
    let match;
    let lastIndex = 0;

    while ((match = codeRegex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add code element
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
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    // Handle bold **text**
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

  return (
    <div className="animate-fade-in">
      <Section className="pt-8 sm:pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back to Blog */}
          <Link
            to="/blog"
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
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground dark:text-dark-foreground">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted dark:text-dark-muted mb-4 sm:mb-6">
              {post.author && (
                <>
                  <span className="font-medium">{post.author}</span>
                  <span>•</span>
                </>
              )}
              <time dateTime={post.date}>{formatDate(post.date, 'long')}</time>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} label={tag} variant="primary" />
              ))}
            </div>
          </header>

          {/* Content */}
          <article className="prose prose-stone dark:prose-invert max-w-none prose-sm sm:prose-base">
            <div className="blog-content">{contentElements}</div>
          </article>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border dark:border-dark-border">
            <Link
              to="/blog"
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
              Back to all posts
            </Link>
          </footer>
        </div>
      </Section>
    </div>
  );
};
