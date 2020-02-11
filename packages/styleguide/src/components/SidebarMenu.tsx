import React, { useState } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import ComponentWrapper from './ComponentWrapper'
import Home from './Home';
import * as InplayerUi from '@inplayer-org/inplayer-ui';
import * as packageJson from '../../package.json';
import UIElements from './UIElements';
import { ifProp } from 'styled-tools';

const WrapperNavigation = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  font-size: .9em;;
  color: rgba(0,0,0,.5);
  height: 100%;
  border-radius: .2rem;
  font-weight: 400;
  box-shadow: 0 2px 3px 2px #e2e6ea;
  position: fixed;
  overflow-y: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0,0,0,.1);
    border-radius: 0;
  }
`
const WrapperSection = styled.div`
  border-top: 1px solid #e2e6ea;
  display: flex;
  flex-direction: column;
`

interface StyledLinkProps extends Link {
  isActive?: boolean;
}

export const StyledLink= styled(Link)<StyledLinkProps> `
  text-decoration: none;
  cursor: pointer;
  color: ${ifProp('isActive', 'black', '#9a9a9a')} ;
  padding: .5em 1.3em;


  &:hover {
  color: #292929;
}`

const Header = styled(StyledLink)`
  font-weight: bold;
  padding: 1em 1.3em;
  color: #292929;
`

const NavigationHeader = styled.h4`
  font-weight: bold;
  padding: 0 1.3em;
  color: #292929;
`

const NavigationInput = styled(InplayerUi.Input)`
  width: 85%;
  margin: 1rem;
`

const itemsToIgnore = ['Colors', 'ThemeWrapper']

const navigationElements = Object.keys(InplayerUi).filter(element => !itemsToIgnore.includes(element));

const libraryVersion = packageJson.dependencies["@inplayer-org/inplayer-ui"].replace(/[~>^]/gi, '');

const SidebarMenu: React.FC = () => {
  const [elements, filterElements] = useState(navigationElements);
  const [id, changeRoute] = useState('');


  const handleInputChange = (input: string) => {
    filterElements(navigationElements.filter(el => el.toLowerCase().includes(input.toLowerCase())));
  }

    return (
      <Router>
        <WrapperNavigation>
          <WrapperSection>
            <Header to='/'> InPlayer UI | {libraryVersion} </Header>
          </WrapperSection>
          <WrapperSection>
          <NavigationInput onChange={(e) => handleInputChange(e.currentTarget.value)} type="text" name="filter" placeholder="Filter by name" />
            <NavigationHeader> Components</NavigationHeader>
            <UIElements activeElement={id} navigationElements={elements} />
          </WrapperSection>
        </WrapperNavigation>

        <Switch>
          <Route path="/:id">
            <ComponentWrapper changeRoute={(id) => changeRoute(id)} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default SidebarMenu;
