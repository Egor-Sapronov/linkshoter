import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { linksList } from './../shortHistory.props';
import Flex from '../../common/flex.component';
import FlexItem from '../../common/flexItem.component';
import TableItem from './tableItem.component';

const ColumnHeader = styled.p`
  font-size: ${props => props.theme.font.fontSizeSm};
  color: ${props => props.theme.colors.secondaryTextColor};
  text-transform: uppercase;
`;

const RightColumn = styled(FlexItem)`
  text-align: right;
`;

const CenterColumn = styled(FlexItem)`
  text-align: center;
`;

const ShortHistoryTable = props => (
  <Flex>
    <Flex layout="row" align="center">
      <FlexItem flex="50">
        <ColumnHeader>
          link
        </ColumnHeader>
      </FlexItem>
      <CenterColumn flex="10">
        <ColumnHeader>
          visits
        </ColumnHeader>
      </CenterColumn>
      <RightColumn flex="15">
        <ColumnHeader>
          last visited
        </ColumnHeader>
      </RightColumn>
    </Flex>

    {props.links.map(linkItem =>
      <TableItem
        isNew={props.lastAddedShortcode === linkItem.shortcode}
        key={linkItem.shortcode}
        link={linkItem}
      />,
    )}
  </Flex>
);

ShortHistoryTable.propTypes = {
  links: linksList.isRequired,
  lastAddedShortcode: PropTypes.string.isRequired,
};

export default ShortHistoryTable;
