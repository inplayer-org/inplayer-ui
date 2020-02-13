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
import UIElements from './UIElements';
import ColorsAndTheme from './Theme';

import * as InplayerUi from '@inplayer-org/inplayer-ui';
import * as packageJson from '../../package.json';

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
  background-color: #f7f7f7;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,.25);
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

export const StyledLink= styled(Link) `
  text-decoration: none;
  cursor: pointer;
  padding: .5em 1.3em;

  &:hover {
  color: #333030;
}`

const Header = styled(StyledLink)`
  font-weight: bold;
  padding: 1em 1.3em;
  font-size: 1.2rem;
  color: #333030;
`

const NavigationHeader = styled.h4`
  font-weight: bold;
  padding: 0 1.3em;
  color: #333030;
`

const NavigationInput = styled(InplayerUi.Input)`
  width: 85%;
  margin: 1rem;
`

const elementsToIgnore = ['Colors', 'ThemeWrapper'];

const additionalElements = ['Theme']

const navigationElements = Object.keys(InplayerUi).filter(element => !elementsToIgnore.includes(element));

const libraryVersion = packageJson.dependencies["@inplayer-org/inplayer-ui"].replace(/[~>^]/gi, '');

const SidebarMenu: React.FC = () => {
  const [elements, filterElements] = useState([...navigationElements, ...additionalElements]);
  const [resetActiveElement, changeResetActiveElement] = useState(false);


  const handleInputChange = (input: string) => {
    filterElements(navigationElements.filter(el => el.toLowerCase().includes(input.toLowerCase())));
  }

  const handleOnClick = () => {
    changeResetActiveElement(true)
  }

    return (
      <Router>
        <WrapperNavigation>
          <WrapperSection>
            <Header onClick={handleOnClick} to='/'> InPlayer UI | {libraryVersion} </Header>
          </WrapperSection>
          <WrapperSection>
          <NavigationInput onChange={(e) => handleInputChange(e.currentTarget.value)} type="text" name="filter" placeholder="Filter by name" />
            <NavigationHeader> Components</NavigationHeader>
            <UIElements changeResetActiveElement={changeResetActiveElement} resetActiveElement={resetActiveElement} navigationElements={elements} />
          </WrapperSection>
        </WrapperNavigation>

        <Switch>
          <Route path="/Theme">
            <ColorsAndTheme  />
          </Route>
          <Route path="/:id">
            <ComponentWrapper />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default SidebarMenu;
