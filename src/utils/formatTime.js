export const formatTime = (time) => {
  if (!time) return '';
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${hours12}:${formattedMinutes} ${period}`;
};
