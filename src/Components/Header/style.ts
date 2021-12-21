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
`;
