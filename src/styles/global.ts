import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  :root{
    --background: #110F0A;
    --second-color: #FFD335;
    --text: #fff
  }
  
  body {
    background: var(--background);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
  .App{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 9rem);
  }
  .AppBody{
    flex: 1;
  }
`;