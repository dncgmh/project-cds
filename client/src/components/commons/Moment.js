import React from 'react';
import PropTypes from 'prop-types';
import ReactMoment from 'react-moment';
import 'moment/locale/vi';

function Moment({ locale, fromNow, format, date }) {
  return (
    <ReactMoment locale={locale} fromNow={fromNow} format={format}>
      {date}
    </ReactMoment>
  );
}

Moment.propTypes = {
  locale: PropTypes.string,
  fromNow: PropTypes.bool,
  format: PropTypes.string,
  date: PropTypes.string
};

export default Moment;
