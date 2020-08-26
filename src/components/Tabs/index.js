import React from 'react';
import { StyledTabs, StyledTab } from './styles';

export function Tab(props) {
  const { selected, icon, onClick } = props;
  return (
    <StyledTab selected={selected} onClick={onClick}>
      {icon}
    </StyledTab>
  );
}

export function Tabs(props) {
  const { children } = props;
  return <StyledTabs>{children}</StyledTabs>;
}
