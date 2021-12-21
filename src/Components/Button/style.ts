import styled from 'styled-components'

export const Buttons = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  background: var(--second-color);
  color: var(--background);
  padding: 0.8rem 1.2rem;
  min-width: 8rem;
  box-sizing: border-box;
  border: none;
  transition: 0.1s;
  &:focus, &:hover{
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled{
    opacity: 0.5;
    cursor: wait;
  }
`
