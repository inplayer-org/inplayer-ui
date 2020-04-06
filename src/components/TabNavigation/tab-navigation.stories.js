// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

// components
import TabNavigation from './index';
import Typography from '../../elements/Typography/index';

export default {
  component: TabNavigation,
  title: 'TabNavigation',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const TabNavContainer = styled.div`
  align-self: center;
  border: solid 1px #eee;
  padding: 10px;
  margin-top: 2%;
`;

export const demo = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const onTabClick = (index) => {
    setSelectedTabIndex(index);
  };
  return (
    <Container>
      <Typography variant="h1" color="black">
        Tab Navigation
      </Typography>
      <Typography variant="p" description>
        The TabNavigation is recommended for usage as a secondary navigation, the primary one being
        the Navbar.
      </Typography>
      <TabNavContainer>
        <TabNavigation
          tabs={[
            {
              title: 'Hello',
            },
            {
              title: 'Tabs',
            },
          ]}
          selectedTabIndex={selectedTabIndex}
          onTabClick={onTabClick}
        />
      </TabNavContainer>
    </Container>
  );
};
