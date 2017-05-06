import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { link } from './../shortHistory.props';
import Flex from '../../common/flex.component';
import FlexItem from '../../common/flexItem.component';
import TextLight from '../../common/textLight.component';
import LinkItem from './linkItem.component';

const RightColumn = styled(FlexItem)`
  text-align: right;
`;

const CenterColumn = styled(FlexItem)`
  text-align: center;
`;

const HighlightableFlex = styled(Flex)`
  padding: ${props => props.theme.calcGrid(2)} 0;
  padding-left: ${props => props.isHighlithed && props.theme.calcGrid(1.5)};
  margin-left: ${props => props.isHighlithed && props.theme.calcGrid(-2)};
  border-color: ${props => props.theme.colors.accentColor};
  border-left: ${props => props.isHighlithed
    ? '4px solid'
    : 'none'
  };
`;

const TableItem = props => (
  <HighlightableFlex isHighlithed={props.isNew} layout="row" justify="space-between" align="center">
    <FlexItem flex="50">
      <LinkItem link={props.link} />
    </FlexItem>
    <CenterColumn flex="10">
      <TextLight>{props.link.redirectCount}</TextLight>
    </CenterColumn>
    <RightColumn flex="15">
      <TextLight>{moment(props.link.lastSeenDate).fromNow()}</TextLight>
    </RightColumn>
  </HighlightableFlex>
);

TableItem.propTypes = {
  link: link.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default TableItem;
