import styled from 'styled-components';

export default styled.p`
  color: ${props => props.theme.colors.unimportantTextColor};
  font-weight: ${props => props.theme.font.fontWeightLight};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  margin-top: ${props => props.theme.calcGrid(1)};
`;
