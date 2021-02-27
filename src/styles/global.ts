import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --light-blue: #15C3D6;
    --black: #4D6F80;
    --text: #979797;
    --white: #fff;
    --input: #EBF2F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, input, button, textarea {
    font: 400 16px 'Nunito', sans-serif;
  }

  body {
    background: var(--light-blue);
  }
`;