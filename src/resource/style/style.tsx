import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');


  /* @font-face {
      font-family: 'Rajdhani';
      src: url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
      font-weight: 400;
      font-style: normal;
  }

      @font-face {
        font-family: 'GangwonEduPowerExtraBoldA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
          }

        @font-face {
        font-family: 'GangwonEdu_OTFBoldA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        }

        @font-face {
      font-family: 'SejonghospitalBold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2312-1@1.1/SejonghospitalBold.woff2') format('woff2');
      font-weight: 700;
      font-style: normal;
} */
@font-face {
    font-family: 'PartialSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  * {
font-family: "Rajdhani", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  body {
    margin: 0;
    width: 100vw;
    background-color: rgb(27, 29, 32);
    color:white;
    border-top: 2px solid rgba(99, 99, 99, 0.349);
  }

  nav {
    position: sticky;
    top: 0;
  }

  main {
    //width: 80%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  footer {
    position: relative;
    bottom: 0;
  }

  a {
    text-decoration: none;
  }
  main {
    margin:0;
  }
  
`;

export default Style;
