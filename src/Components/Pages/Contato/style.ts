import styled from 'styled-components'

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;

form{

  div{
    display: flex;
    flex-direction: column !important;
    height: 6rem;
    position: relative;
  }
 
  input:-internal-autofill-selected{
    background: transparent !important;
    color: transparent !important;
  }
  input{
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.2s;
    width: 34rem;
    text-align: center;
    background: transparent;
    color: white;
  & + input{
    margin-bottom: 3rem;
  }
   

    &:focus, &:hover{
      outline: none;
      border-color: #fb1;
      background: transparent;
      box-shadow: 0 0 0 3px #fea;
    }

    
  }
  
  .textarea{
    display: block;
    width: 100%;
    font-size: 1rem;
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    height: 30%;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;
    &:focus,
    &:hover {
    outline: none;
    border-color: var(--second-color);
    background: white;
    box-shadow: 0 0 03px #fea;
}
    }
  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
    position: absolute;
    left:  0.8rem;
    top: -0.5rem;
    background: var(--background);
    }
  .error {
  color: var(--second-color);
  font-size: 0.875rem;
  margin-top:1rem;
  }
  @media(max-width: 595px){
    
      input{
        width: 25rem !important;
      }
    
  }
  @media(max-width: 412px){
    
    input{
      width: 18rem !important;
    }
  
}
}
`