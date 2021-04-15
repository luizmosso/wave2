import styled from 'styled-components';
import { colors } from '../../../shared';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 12px;
`;

export const Title = styled.h3`
  align-self: flex-start;
  color: ${colors.regular};
`;

export const ListBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  border-right: 3px solid
    ${({ active }) => (active ? colors.lightBlue : colors.pink)};
  -webkit-box-shadow: 6px 5px 10px 1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 6px 5px 10px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 6px 5px 10px 1px rgba(0, 0, 0, 0.15);
  padding: 12px;
  width: 100%;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
`;
export const Code = styled.p`
  background: ${colors.light};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  color: ${colors.white};
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-right: 8px;
`;
export const Name = styled.p`
  font-size: 1rem;
  width: 60%;
  margin: 0;
`;
export const Endereco = styled.p`
  font-size: 0.8rem;
  color: ${colors.light};
  margin: 0;
  margin-top: 8px;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButton = styled.button`
  background: ${colors.blue};
  width: 70px;
  height: 70px;
  border-radius: 70px;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: none;
  align-self: flex-end;
  margin-top: 12px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const SwitchContainer = styled.div`
  margin-left: 10px;
`;
