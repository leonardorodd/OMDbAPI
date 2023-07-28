import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle` 
  :root {
    --primary-gray: #B0B0B0;
    --secondary-gray: #7B8C98; 
    --border-color: #323232;
    --base-white: #FFF;
    --base-black: #1f1f1f;
    --base-red: #D32F2F;
  }

  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100%;
    width: 100%;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

/*   #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  } */

  button {
    cursor: pointer;
  }

  .Toastify__toast--error {
    background: var(--base-black) !important;
  }
`;