import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../shared';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: Open Sans;
  }
`;

export const AppContainer = styled.div`
  background: ${colors.lightBlue};
  background: -moz-linear-gradient(
    45deg,
    ${colors.lightBlue} 0%,
    ${colors.blue} 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, ${colors.lightBlue}),
    color-stop(100%, ${colors.blue})
  );
  background: -webkit-linear-gradient(
    45deg,
    ${colors.lightBlue} 0%,
    ${colors.blue} 100%
  );
  background: -o-linear-gradient(
    45deg,
    ${colors.lightBlue} 0%,
    ${colors.blue} 100%
  );
  background: -ms-linear-gradient(
    45deg,
    ${colors.lightBlue} 0%,
    ${colors.blue} 100%
  );
  background: linear-gradient(
    45deg,
    ${colors.lightBlue} 0%,
    ${colors.blue} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.lightBlue}', endColorstr='${colors.blue}', GradientType=1 );
  display: flex;
  align-items: center;
  justify-content: center;
`;
