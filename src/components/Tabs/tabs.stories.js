// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Tabs from './index';
import Typography from '../../elements/Typography/index';

export default {
  component: Tabs,
  title: 'Tabs',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

export const demo = () => {
  const tabs = [{ name: 'Account' }, { name: 'User' }, { name: 'Contact' }];

  return (
    <Container>
      <Typography variant="h1" color="black">
        Tabs
      </Typography>
      <Typography variant="p" description>
        Tabs is a component which generates switching tabs. You can use it directly like this:
      </Typography>
      <Tabs
        tabs={tabs}
        style={{ 'margin-top': '2%' }}
        selectedTabIndex={0}
        onTabClick={(index) => console.log(index)}
      />
    </Container>
  );
};

export const withIcons = () => {
  const tabs = [
    { name: 'Account', icon: 'user-circle', iconModifiers: 'statusColorWarning' },
    { name: 'User', icon: 'user', iconPosition: 'right' },
    { name: 'Contact' },
  ];

  return (
    <Container>
      <Typography variant="h1" color="black">
        Tabs
      </Typography>
      <Typography variant="p" description>
        Tabs is a component which generates switching tabs. You can use it directly like this:
      </Typography>
      <Tabs
        tabs={tabs}
        style={{ 'margin-top': '2%' }}
        selectedTabIndex={0}
        onTabClick={(index) => console.log(index)}
      />
    </Container>
  );
};
