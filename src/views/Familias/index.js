import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Header, Content } from './styles';
import { FamilyProvider } from '../../contexts';
import {
  DashboardIcon,
  FamilyIcon,
  GroupAddIcon,
  Tabs,
  Tab,
} from '../../components';
import General from './General';
import List from './List';
import Details from './Details';

function getFamilyId(location) {
  if (location) {
    const urlArr = location.pathname.split('/familias/');
    if (urlArr.length > 0 && urlArr[1] !== '') return urlArr[1];
  }
  return null;
}

function Familias() {
  const location = useLocation();
  const familyId = getFamilyId(location);

  const [selectedTab, setSelectedTab] = React.useState(
    familyId ? 'DETAILS' : 'GENERAL'
  );
  const tabs = [
    { name: 'GENERAL', icon: <DashboardIcon width="6vw" maxWidth={32} /> },
    { name: 'LIST', icon: <FamilyIcon width="6vw" maxWidth={32} /> },
    { name: 'DETAILS', icon: <GroupAddIcon width="7vw" maxWidth={32} /> },
  ];
  const content = {
    GENERAL: <General />,
    LIST: <List />,
    DETAILS: <Details familyId={familyId} />,
  };
  return (
    <FamilyProvider>
      <Container>
        <Header>
          <Tabs>
            {tabs.map(({ name, icon }) => (
              <Tab
                key={name}
                selected={selectedTab === name}
                icon={icon}
                onClick={() => setSelectedTab(name)}
              />
            ))}
          </Tabs>
        </Header>
        <Content>{content[selectedTab]}</Content>
      </Container>
    </FamilyProvider>
  );
}

export default Familias;
