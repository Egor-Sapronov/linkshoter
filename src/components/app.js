import React from 'react';
import Container from './common/container.component';
import Navbar from './navbar.component';
import LinkForm from './linkForm.component';
import Section from './common/section.component';
import ShortHistory from './shortHistory/shortHistory.component';
import Title from './common/title.component';
import ShowApiError from './showApiError.component';

export default () => (
  <Container>
    <Navbar />
    <LinkForm />
    <ShowApiError>
      <Title>
        Server unavailable please try again later :(
      </Title>
    </ShowApiError>
    <Section>
      <ShortHistory />
    </Section>
  </Container>
);
