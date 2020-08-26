import styled from 'styled-components';
import { colors } from '../../shared';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  height: 20vh;
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Footer = styled(Link)`
  position: fixed;
  bottom: 1rem;
  color: ${colors.white};
  text-decoration: none;
`;

export const BoxContainer = styled.div`
  background: ${colors.darkerBlueAlpha};
  width: calc(45% - 0.5rem);
  min-width: 100px;
  max-width: 200px;
  height: 45vw;
  max-height: 150px;
  min-height: 100px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.2rem;
  margin-bottom: 25px;
  box-shadow: 1px 3px 3px 0px ${colors.darkBlue};
  cursor: pointer;
`;

export const BoxImage = styled.img`
  width: 50%;
  max-width: 135px;
`;

export const BoxTitle = styled.p`
  margin: 0;
  margin-top: 3px;
  color: ${colors.white};
`;
