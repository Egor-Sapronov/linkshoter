import React from 'react';
import Header from './common/header.component';
import SubHeader from './common/subHeader.component';
import Flex from './common/flex.component';

export default () => (
  <Flex layout="row" justify="space-between" align="baseline">
    <Header>
      Shooooort
    </Header>
    <SubHeader>
      The link shortener with a long name
    </SubHeader>
  </Flex>
);
