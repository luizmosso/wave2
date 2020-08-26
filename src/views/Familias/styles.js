import styled from 'styled-components';
import { colors } from '../../shared';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  background: ${colors.white};
`;

export const Header = styled.div`
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
    ${colors.blue} 0%,
    ${colors.lightBlue} 100%
  );
  background: -o-linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlue} 100%
  );
  background: -ms-linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlue} 100%
  );
  background: linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlue} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.blue}', endColorstr='${colors.lightBlue}', GradientType=1 );
   width: 100%;
   display: flex;
   align-items: center;
   height: 70px;
   -webkit-box-shadow: 0px 7px 15px -6px ${colors.darkBlue};
  -moz-box-shadow: 0px 7px 15px -6px ${colors.darkBlue};
  box-shadow: 0px 7px 15px -6px ${colors.darkBlue};
`;

export const Content = styled.div`
  height: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
