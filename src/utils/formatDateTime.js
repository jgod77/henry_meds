export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
}
