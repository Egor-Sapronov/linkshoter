import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';
import { clearHistory } from '../../actions/history.actions';
import Flex from '../common/flex.component';
import Table from './table/table.component';
import ShortHistoryHeader from './shortHistory.header.component';
import linksSelector from '../../reducers/entities/entities.reducer.selector';
import { linksList } from './shortHistory.props';

class ShortHistory extends Component {
  render() {
    const isHistoryExists = !isEmpty(this.props.links);

    return isHistoryExists && (
      <Flex>
        <ShortHistoryHeader
          handleActionClick={this.props.clearHistory}
        />
        <Table
          lastAddedShortcode={this.props.lastAddedShortcode}
          links={this.props.links}
        />
      </Flex>
    );
  }
}

ShortHistory.propTypes = {
  links: linksList.isRequired,
  clearHistory: PropTypes.func.isRequired,
  lastAddedShortcode: PropTypes.string,
};

ShortHistory.defaultProps = {
  lastAddedShortcode: '',
};

export default connect(
  state => ({
    links: linksSelector(state),
    lastAddedShortcode: state.general.lastAddedShortcode,
  }),
  { clearHistory },
)(ShortHistory);
