import styled from 'styled-components';

const Input = styled.input`
  height: ${props => props.height || '50px'};
  background-color: ${props => props.backgroundColor || '#CAF0F8'};
  border-radius: ${props => props.borderRadius || '10px'};
  border: ${props => props.border || '1px solid'};
  border-color: ${props => props.type === 'login' ? '#00B4D8' : 'black'};
  outline: none;
  font-size:24px;
  font-weight: normal;
`;

export default Input;
