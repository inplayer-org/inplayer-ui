import React from 'react';
import { ThemeWrapper } from '@inplayer-org/inplayer-ui';
import { ThemeProvider } from 'styled-components';

import SidebarMenu from './components/SidebarMenu';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`

const Root: React.FC= () => (
  <ThemeWrapper withProvider={ThemeProvider}>
    <Wrapper>
      <SidebarMenu />
    </Wrapper>
  </ThemeWrapper>
);

export default Root;
