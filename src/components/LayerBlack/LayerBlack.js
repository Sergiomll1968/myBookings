import styled from 'styled-components';

const LayerBlack = styled.div`
  height: ${props => props.height || '800px'};
  background-color: ${props => props.backgroundColor || '#0000009e'};
  border-radius: ${props => props.borderRadius || '20px'};
  margin: 0 auto;
`;

export default LayerBlack;
