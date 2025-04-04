import * as React from "react";
import { styleReset } from "react95";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import SectionOrganization from "./section.organization.jsx";

import original from "react95/dist/themes/original";
// @ts-ignore
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// @ts-ignore
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

import { Title } from "./Title.jsx";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const PAGE_TITLES = [<SectionOrganization />];

const ThemeProviderProxy = ThemeProvider;

function SectionTeamDeveloper() {
  return <div></div>;
}

const Page = styled.div``;

export default SectionTeamDeveloper;
