import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Monoton&display=swap');
/* font-family: 'Press Start 2P', cursive; */
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
/* font-family: 'VT323', monospace; */
@import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
/* font-family: 'Wallpoet', cursive; */
@import url('https://fonts.googleapis.com/css?family=Wallpoet&display=swap');
/* font-family: 'Muli', sans-serif; */
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');


html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      outline: none;
    }

    H1T0ML5 display-role reset for older browsers
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
      
     
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    html,
    body,#root {
      height: 100%;
    }
    html {
      font-size: 10px;
      scroll-behavior: smooth;
    }
    body {
      font-size: 1.6rem;
      background: #121212;
      font-family: Arial, Helvetica, sans-serif ;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
    }
    ul {
      list-style-type: none;
    }


        /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    #root{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    body{
      /* padding-top: 30px; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export default GlobalStyle;
