import styled from 'styled-components';

const FlexItem = styled.div`
  overflow: hidden;
  flex: ${props => props.flex};
`;

FlexItem.defaultProps = {
  flex: 1,
};

export default FlexItem;
