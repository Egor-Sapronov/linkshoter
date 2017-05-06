import PropTypes from 'prop-types';

export const link = PropTypes.shape({
  lastSeenDate: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  redirectCount: PropTypes.number.isRequired,
  shortcode: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
});

export const linksList = PropTypes.arrayOf(link);
