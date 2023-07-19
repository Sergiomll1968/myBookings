import styled from 'styled-components';

const BtnAuth = styled.button`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '50px'};
  background-color: ${props => props.type === 'login' ? '#D9D9D9' : '#00B4D8'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || '1px solid'};
  border-color: ${props => props.type === 'login' ? '#00B4D8' : 'black'};
  font-weight: bold;
`;

export default BtnAuth;