/**
 * Format an ISO date string to a human-readable format
 * @param dateString - ISO date string (e.g., "2024-03-15")
 * @param format - Format type: "short" (Mar 2024) or "long" (March 15, 2024)
 * @returns Formatted date string
 */
export function formatDate(dateString: string, format: 'short' | 'long' = 'short'): string {
  if (dateString === 'Present') {
    return 'Present';
  }

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString; // Return original if invalid
  }

  if (format === 'short') {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  }

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format a date range (e.g., "Mar 2022 - Present")
 */
export function formatDateRange(startDate: string, endDate: string | 'Present'): string {
  const start = formatDate(startDate, 'short');
  const end = endDate === 'Present' ? 'Present' : formatDate(endDate, 'short');
  return `${start} - ${end}`;
}
