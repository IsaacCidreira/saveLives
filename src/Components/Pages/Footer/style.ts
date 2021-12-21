import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 9rem;
  margin-top: 62px;
  background-color: var(--second-color);
  .logo{
    margin-left: 62px;
  }
  p{
    margin-right: 62px;
    color: var(--background);
  }

  @media (max-width: 886px){
    .logo{
      margin-left: 62px;
      width: 180px;

    }
  }

  @media(max-width: 441px){

    
      
    
    .logo{
      margin-left: 18px !important;
      width: 140px;

    }
    p{
      margin-right: 18px !important;
      font-size: 12px;
      text-align: end;
    }
    }
 
  
`