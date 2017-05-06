import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.layout};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

Flex.defaultProps = {
  'justify-content': 'flex-start',
  'align-items': 'stretch',
  layout: 'column',
};

export default Flex;
