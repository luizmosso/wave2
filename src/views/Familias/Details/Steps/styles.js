import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../../../../shared';
import withBaseStyles from '../../../../shared/baseStyle';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-left: ${({ isMobile }) => (!isMobile ? '44px' : '0')};
  padding-right: ${({ isMobile }) => (!isMobile ? '44px' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ spaceBetween }) =>
    spaceBetween ? 'space-evenly' : 'flex-start'};
`;

const RowBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Row = withBaseStyles(RowBase);

export const ThinButton = styled.button`
  background: ${colors.light};
  border: none;
  color: ${colors.white};
  align-self: flex-start;
  border-radius: 3px;
`;

export const Beneficios = styled.div`
  height: 35vh;
  width: 100%;
  overflow-y: auto;
`;

export const Membros = styled.div`
  height: 65vh;
  width: 100%;
  overflow-y: auto;
`;

export const SubTitle = styled.h4`
  color: ${colors.light};
`;

export const Label = styled.p`
  font-size: 1rem;
  margin-right: 12px;
  color: ${colors.regular};
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  font-size: 0.8rem;
  color: ${colors.light};
  margin-top: 4px;
  margin-bottom: 0;
  ${({ bold }) => bold && 'font-weight: bold;'}
`;

export const SwitchStyle = createGlobalStyle`
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
    content: " ";
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
