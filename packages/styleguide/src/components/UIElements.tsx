import React from 'react';
import { StyledLink } from './SidebarMenu';

interface Props {
  navigationElements: string[];
  activeElement?: string;
}

const UIElements: React.FC<Props> = ({ navigationElements, activeElement }) => {
  return (
    <>
      { navigationElements.map( element => { 
          const isActive = element === activeElement;
      
          return <StyledLink isActive={isActive} to={`/${element}`}> {element} </StyledLink>
        }) 
      }
    </>
  )
}

export default UIElements;