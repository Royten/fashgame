import styled from 'styled-components';

export default styled.button`
  border: 1px solid ${props => props.disabled ? 'grey' : 'black'};
  border-radius: 10px;
  background-color: white;
  cursor: ${props => props.disabled ? '' : 'pointer'};
  width: 27vw;
  height: 7vh;
  margin: 1% 3%;
  color: ${props => props.disabled ? 'grey' : 'black'};
`
