import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { useParams } from "react-router-dom";

const ContentWrapper = styled.div`
  width: 50rem;
  font-size: .8rem;
`

const Row = styled.div`
  padding: 0.6rem;
  display: flex;
`

const Col = styled.div`
  flex: 1;
  color: ${( {color} ) => ifProp('color', color)};
  font-weight: bold;
`
const Header = styled(Col)`
  font-weight: bolder;
  color: black;
`

const HeaderType = styled(Col)`
  flex: 1.5;
`

const HeaderRow = styled(Row)`
  border-bottom: 1px solid lightgray;
`

const Name = styled(Col)`
  color: #7E9A44;
`

const Type = styled(Col)`
  color: #BF8BB4;
  flex: 1.5;
`
interface DefaultProps {
  isDefault?: boolean;
}

const Default = styled(Col)<DefaultProps>`
  color: ${ifProp('isDefault', '#959595')};
`

const Description = styled(Col)`
  font-size: .7rem;
`

const Title = styled.h3`
  text-transform: uppercase;

  :hover{
    color: skyblue;
    cursor: pointer;
  }
`

interface Props {
  propsAndMethods: any;
}

const PropsPreview: React.FC<Props> = ({ propsAndMethods }: Props) => {
  let { id } = useParams();
  const [viewProps, toggleViewProps] = useState(false);

  useEffect(() => {
    toggleViewProps(false);
  }, [id]);
  
  return (
    <ContentWrapper>
      <Title onClick={() => {toggleViewProps(!viewProps)}}>Props and methods</Title>
      {
        viewProps && (<>
          <HeaderRow>
            <Header>Prop name</Header>
            <HeaderType>Type</HeaderType>
            <Header>Default</Header>
            <Header>Description</Header>
          </HeaderRow>
          {   
            propsAndMethods.map(prop => {
              return (
                <Row>
                  <Name> {prop.name}</Name>
                  <Type>{prop.type}</Type>
                  <Default isDefault>{prop.default}</Default>
                  <Description> {prop.description} </Description>
                </Row> 
              )
            })
          }
        </>)
      }
    </ContentWrapper>
  );
  };

export default PropsPreview;
