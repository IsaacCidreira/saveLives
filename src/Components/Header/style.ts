import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    width: 100%;
    height: 113px;

  nav{
    display: flex;
    width: 100%;
    height: 113px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--second-color);

    a{
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: bold;
      color:var(--background) ;
    }
    .logo{
      margin-left: 62px;
    }
    .contato{
      margin-right: 62px;
    }
  }
  @media (max-width: 886px){
    .logo{
      margin-left: 62px;
      width: 180px;

    }
  }

  @media(max-width: 441px){

    nav{
      display: flex;
      justify-content: space-between;
      align-content: center;
      a{
        text-align: center;
      }
    
    .logo{
      margin-left: 18px !important;
      width: 140px;

    }
    .contato{
      margin-right: 18px;
    }
  }

}
`;
