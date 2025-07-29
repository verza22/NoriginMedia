import moment from 'moment';

export function formatTimeDifference(start: moment.Moment, end: moment.Moment): string {
  const diff = moment.duration(end.diff(start));

  const days = Math.floor(diff.asDays());
  const hours = diff.hours();
  const minutes = diff.minutes();

  let result = '';

  if (days > 0) {
    result += `${days}d `;
  }

  if (hours > 0 || days > 0) {
    result += `${hours}h `;
  }

  if (minutes > 0 && days === 0) {
    result += `${minutes}m`;
  }

  return result.trim();
}