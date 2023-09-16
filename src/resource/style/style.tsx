import { createGlobalStyle } from 'styled-components';


const Style = createGlobalStyle`
  * {
    font-family: 'Pretendard', sans-serif;
  }

  body {
    margin: 0;
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

`;

export default Style;
