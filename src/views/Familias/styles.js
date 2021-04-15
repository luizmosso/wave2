import styled from 'styled-components';
import { colors } from '../../shared';
import { Link } from 'react-router-dom';

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
  position: relative;
`;

export const BackLink = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  color: ${colors.lightBlue};
  font-weight: bold;
  top: 0;
  font-size: 0.8rem;
  right: 10px;
  cursor: pointer;
  text-decoration: none;
`;

export const ChevronLabel = styled.p`
  margin: 0;
  margin-left: -6px;
`;

export const SwitchStyle = styled.span`
  .rc-switch {
    color: white;
    position: relative;
    display: flex;
    box-sizing: border-box;
    width: 70px;
    height: 22px;
    line-height: 20px;
    vertical-align: middle;
    border-radius: 20px 20px;
    border: 1px solid ${colors.pink};
    background-color: ${colors.pink};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
  }

  .rc-switch-inner {
    font-size: 12px;
    position: absolute;
    left: 24px;
    color: ${colors.white};
  }
  .rc-switch:after {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: #fff;
    content: ' ';
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: 0.3s;
    animation-name: rcSwitchOff;
  }
  .rc-switch:hover:after {
    transform: scale(1.1);
    animation-name: rcSwitchOn;
  }
  .rc-switch:focus {
    box-shadow: 0 0 0 2px #d5f1fd;
    outline: none;
  }
  .rc-switch-checked {
    border: 1px solid ${colors.lightBlue};
    background-color: ${colors.lightBlue};
  }
  .rc-switch-checked .rc-switch-inner {
    left: 6px;
  }
  .rc-switch-checked:after {
    left: 48px;
  }
  .rc-switch-disabled {
    cursor: no-drop;
    background: #ccc;
    border-color: #ccc;
  }

  .rc-switch-disabled:after {
    background: #9e9e9e;
    animation-name: none;
    cursor: no-drop;
  }
  .rc-switch-disabled:hover:after {
    transform: scale(1);
    animation-name: none;
  }
  .rc-switch-label {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    user-select: text;
  }
  @keyframes rcSwitchOn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1.1);
    }
  }
  @keyframes rcSwitchOff {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
