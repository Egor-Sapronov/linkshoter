import React from 'react';
import Header from './common/header.component';
import UnimportantText from './common/unimportantText.component';
import Flex from './common/flex.component';

export default () => (
  <Flex layout="row" justify="space-between" align="baseline">
    <Header>
      Shooooort
    </Header>
    <UnimportantText>
      The link shortener with a long name
    </UnimportantText>
  </Flex>
);
