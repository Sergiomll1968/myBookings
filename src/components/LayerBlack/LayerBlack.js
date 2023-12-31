import styled from 'styled-components';

const LayerBlack = styled.div`
  height: ${props => props.height || '100%'};
  background-color: ${props => props.backgroundColor || '#0000009e'};
  border-radius: ${props => props.$borderradius || '20px'};
  padding: 10px;
  margin: 0 auto;
`;

export default LayerBlack;
