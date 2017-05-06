import styled from 'styled-components';

export default styled.button`
  background-color: ${props => props.theme.colors.accentColor};
  color: ${props => props.theme.colors.whiteColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  padding: 12px;

  &:disabled {
    color: ${props => props.theme.colors.disabledTextColor};
    background-color: ${props => props.theme.colors.disabledBackgroundColod};
  }
`;
