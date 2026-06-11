import { format } from 'date-fns';

export function formatDisplayDate(date, pattern = 'MMM d, yyyy') {
  return format(date, pattern);
}
