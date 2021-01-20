import { createGlobalStyle } from 'styled-components';
import { color } from '../../package.json';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }

  body, input, button {
    font: 16px;
    font-family: 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500px;
  }

  button, input {
    border: 0;
    background: none;
    color: var(--primary);
    transition: color .2s ease-out;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* * {
   -moz-user-select: none;
   -khtml-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;
   user-select: none;
  } */

  :root {
    --white: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #ccc;
    --gray-dark: #24292e;
    --primary: ${color.primary};
    --primary-light: ${color.primary_light};
    --logo: #fff;
    --header: #24292e;
    --username: #666;
    --search: rgba(255; 255; 255; 0.13);
    --search-placeholder: hsla(0;0%;100%;.75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;

    --green: #39e600;
    --fontcolor: #646464;
    --star-on: #f8da48;
    --star-off: #e2e2e2;

    --navbar: ${color.navbar.bg};
    --navbarcolor: ${color.navbar.color};
    --navbarhover: ${color.navbar.hover};

    --menucolor: #ffffff;

    --btn-canc: #ff0000;
    --btn-finish: #00b300;

    --select-on:  #ccffcc;
    --select-b-on: #00b300;

    --cardbg: #fff;
    --cardborder: ${color.primary};
    --cardselbg: #ccffcc;
    --cardselborder: #00b300;
    --cardhoverbg: #ccc;
    --cardhoverborder: #666

  }
`;
