import styled from 'styled-components';
import { colors } from '../../shared';
import loginPic from '../../assets/loginPic.png';
import withBaseStyle from '../../shared/baseStyle';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '90%' : '70%')};
  height: 80vh;
  -webkit-box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
  -moz-box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
  box-shadow: 0px 2px 20px -4px ${colors.darkBlue};
`;

export const Form = styled.div`
  background: ${colors.white};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '50%')};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FieldsBase = styled.div`
  width: 100%;
`;
export const Fields = withBaseStyle(FieldsBase);

export const SubTitle = styled.p`
  font-family: Open Sans;
  color: ${colors.light};
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${loginPic});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
`;

export const InfoCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  background: ${colors.lightBlueAlpha};
  background: -moz-linear-gradient(
    45deg,
    ${colors.lightBlueAlpha} 0%,
    ${colors.blue} 100%
  );
  background: -webkit-gradient(
    left bottom,
    right top,
    color-stop(0%, ${colors.lightBlueAlpha}),
    color-stop(100%, ${colors.blue})
  );
  background: -webkit-linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlueAlpha} 100%
  );
  background: -o-linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlueAlpha} 100%
  );
  background: -ms-linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlueAlpha} 100%
  );
  background: linear-gradient(
    45deg,
    ${colors.blue} 0%,
    ${colors.lightBlueAlpha} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${colors.blue}', endColorstr='${colors.lightBlueAlpha}', GradientType=1 );
  display: flex;
  align-items: center;
`;

export const InfoText = styled.div`
  margin-left: 2rem;
  width: 350px;
`;

export const InfoTitle = styled.h1`
  font-family: Open Sans;
  color: ${colors.white};
`;

export const InfoDescription = styled.p`
  font-family: Open Sans;
  color: ${colors.white};
`;
