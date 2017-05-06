import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../common/flex.component';
import Title from '../common/title.component';
import Action from '../common/action.component';

const StyledTitle = styled(Title)`
  margin-right: ${props => props.theme.calcGrid(2)};
`;

const ShortHistoryHeader = props => (
  <Flex layout="row" justify="flex-start" align="center">
    <StyledTitle>
      Previously shortened by you
    </StyledTitle>

    <Action
      onClick={props.handleActionClick}
    >
      Clear history
    </Action>
  </Flex>
);

ShortHistoryHeader.propTypes = {
  handleActionClick: PropTypes.func.isRequired,
};

export default ShortHistoryHeader;
