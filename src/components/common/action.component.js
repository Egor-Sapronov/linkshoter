import styled from 'styled-components';

export default styled.a`
  color: ${props => props.theme.colors.accentColor};
  font-weight: ${props => props.theme.font.fontWeightLight};
  cursor: pointer;
`;
