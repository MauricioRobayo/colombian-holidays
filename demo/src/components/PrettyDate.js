import React from 'react';

const PrettyDate = ({ date, locale, weekday, year, month, day }) => (
  <time dateTime={date}>
    {new Intl.DateTimeFormat(locale, {
      weekday,
      year,
      month,
      day,
    }).format(new Date(`${date}T05:00Z`))}
  </time>
);

PrettyDate.defaultProps = {
  locale: 'en',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default PrettyDate;
