import React, { useState } from 'react';
import { StyledLink } from './SidebarMenu';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

interface Props {
  navigationElements: string[];
  resetActiveElement?: boolean;
  changeResetActiveElement: (boolean) => void;
}
interface WrapperProps {
  isActive?: boolean;
}
const Wrapper = styled.div<WrapperProps>`
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

const UIElements: React.FC<Props> = ({ navigationElements, resetActiveElement, changeResetActiveElement }) => {
  const [id, setElement] = useState('');

  const handleOnClick = (element) => () => {
      setElement(element)
      changeResetActiveElement(false)
    }

  return (
    <>
      { navigationElements.map( element => { 
          const isActive =( element === id) && !resetActiveElement;      
          return ( 
            <Wrapper key={element} isActive={isActive}>
              <StyledLink onClick={handleOnClick(element)} to={`/${element}`}> {element} </StyledLink>
            </Wrapper>
          )
        }) 
      }
    </>
  )
}

export default UIElements;