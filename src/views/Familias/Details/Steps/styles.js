import styled from 'styled-components';
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
