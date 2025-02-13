import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const fullDate = date.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });

  if (days < 1) {
    return "Today";
  } else if (days < 7) {
    return `${fullDate} (${days} day${days === 1 ? '' : 's'} ago)`;
  } else if (weeks < 4) {
    return `${fullDate} (${weeks} week${weeks === 1 ? '' : 's'} ago)`;
  } else if (months < 12) {
    return `${fullDate} (${months} month${months === 1 ? '' : 's'} ago)`;
  } else {
    return `${fullDate} (${years} year${years === 1 ? '' : 's'} ago)`;
  }
}