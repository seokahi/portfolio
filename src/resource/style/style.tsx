import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,400..700;1,400..700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Rajdhani:wght@300;400;500;600;700&display=swap');
  @font-face {
      font-family: 'PartialSansKR-Regular';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }


  * {
  padding: 0;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

body {
  font-family: "Poppins", "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: rgb(21, 24, 27);
  overflow-x: hidden;
}

*::-webkit-scrollbar {
  display: none !important;
}

::-moz-selection {
  color: rgb(255, 255, 255);
  background: rgb(78, 29, 124);
}

::selection {
  color: rgb(255, 255, 255);
  background: rgb(78, 29, 124);
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}



@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@media (max-width: 900px) {
  html {
    font-size: 15px !important;
  }
}
@media (max-width: 450px) {
  html {
    font-size: 14px !important;
  }
  h1 {
    font-size: 2.1rem !important;
  }
}
`;

export default Style;
