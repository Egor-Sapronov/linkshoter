import styled from 'styled-components';

export default styled.p`
  color: ${props => props.theme.colors.unimportantTextColor};
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  margin-top: ${props => props.theme.calcGrid(1)};
`;
