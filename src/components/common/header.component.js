import styled from 'styled-components';

export default styled.h1`
  font-family: ${props => props.theme.font.fontFamilyHeading}
  font-size: ${props => props.theme.font.fontSizeHeader};
  color: ${props => props.theme.colors.accentColor};
  text-decoration: underline;
  margin: 1.6em 0;
`;
