import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family:  "Raleway","Open-Sans", Helvetica, Sans-Serif;
  }
`;

//device breakpoints
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}
//queries
export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 374px)`,
  mobileM: `(min-width: ${size.mobileM}) and (max-width: 424px)`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: 767px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1023px)`,
  laptop: `(min-width: ${size.laptop}) and (max-width: 1439px)`,
  laptopL: `(min-width: ${size.laptopL}) and (max-width: 2559px)`,
  desktop: `(min-width: ${size.desktop})`
};