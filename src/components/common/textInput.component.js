import styled from 'styled-components';

const TextInput = styled.input`
  background-color: ${props => props.theme.colors.lightBackgroundColor};
  border: none;
  color: ${props => props.theme.colors.primaryTextColor};
  border-radius: ${props => props.theme.borderRadius};
  flex-grow: 1;
  padding: 0 12px;
`;

export default TextInput;
