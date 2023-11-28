export type FormattedDates = {
  yesterday: string;
  today: string;
  tomorrow: string;
};

export const getFormattedDates = (): FormattedDates => {
  const months: Record<string, string> = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  };

  const getFormattedDate = (date: Date): string => {
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString();
    const formattedMonth = months[month];
    return `${day} ${formattedMonth}`;
  };

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return {
    yesterday: getFormattedDate(yesterday),
    today: getFormattedDate(today),
    tomorrow: getFormattedDate(tomorrow),
  };
};
