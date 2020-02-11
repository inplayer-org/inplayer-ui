import React from 'react';
import { StyledLink } from './SidebarMenu';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

interface Props {
  navigationElements: string[];
  activeElement?: string;
}
interface Propss {
  isActive?: boolean;
}
const Wrapper = styled.div<Propss>`
  a {
    color: ${ifProp('isActive', '#333030', '#9a9a9a')} ;
    transition: 0.3s;
  }
  text-decoration: none;
  cursor: pointer;
  padding: .5em 1.3em;

  &:hover {
    color: #292929;
  }
`

const UIElements: React.FC<Props> = ({ navigationElements, activeElement }) => {
  return (
    <>
      { navigationElements.map( element => { 
          const isActive = element === activeElement;
      
          return ( 
            <Wrapper key={element} isActive={isActive}>
              <StyledLink to={`/${element}`}> {element} </StyledLink>
            </Wrapper>
          )
        }) 
      }
    </>
  )
}

export default UIElements;