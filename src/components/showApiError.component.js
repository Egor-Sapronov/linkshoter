import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ShowApiError = props => (
  <div>
    {props.isApiError && props.children}
  </div>
);

ShowApiError.propTypes = {
  isApiError: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default connect(
  state => ({
    isApiError: !!state.general.isApiError,
  }),
)(ShowApiError);
