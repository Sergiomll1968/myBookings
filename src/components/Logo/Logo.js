import styled from 'styled-components';

const LayerBlack = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '312px'};
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export default LayerBlack;