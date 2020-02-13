import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Colors } from '@inplayer-org/inplayer-ui'

interface PreviewDivProps {
  color: string;
}

const Flex = styled.div`
  display: flex;
`

export const FlexWrapper = styled(Flex)`
  margin-left: 16rem;
  width: 200rem;
  flex-direction: column;
`;


const PreviewColor = styled.div<PreviewDivProps>`
  width: 20px;
  height: 20px;
  background: ${({color}) => color};
  margin-left: .5rem;
  border: .5px solid darkgray;
`;

const Name = styled.p`
  padding-right: 12rem;
  margin: 0;
`

const Value = styled.p`
  margin: 0;
  font-weight: bold;
`

const Wrapper = styled(Flex)`
  margin: 1rem 0 .8rem;
  font-weight: 500;
  justify-content: space-between;
  color: #545353;
`

const Container = styled(Flex)`
  justify-content: space-around;
`

const Header = styled.h3`
  margin: 2rem 0 1rem;
` 

const MainHeader = styled.h1`
  text-align: center;
`

const fontSizes = {
  extraSmall: rem(12),
  small: rem(14),
  medium: rem(16),
  large: rem(18),
  extraLarge: rem(50),
  h1: rem(40),
  h2: rem(36),
  h3: rem(32),
  h4: rem(28),
  h5: rem(24),
  h6: rem(20),
};

const fontWeights = {
  thin: 100,
  light: 300,
  normal: 400,
  semiBold: 500,
  bold: 700,
};


const ColorsAndTheme: React.FC = () => {

  return (
  <FlexWrapper>
    <MainHeader>Theme</MainHeader>
    <Container>
      <div>
      <Header>InPlayer Colors</Header>
      {Object.keys(Colors).map((key) => 
        <Wrapper key={key}>
          <Name> { key } </Name>
          <Flex>
            <Value> { Colors[key] } </Value>
            <PreviewColor color={Colors[key]} />
          </Flex>
        </Wrapper>    
      )}
      </div>
      <div>
        <Header>Font sizes</Header>
        {Object.keys(fontSizes).map(key => 
          <Wrapper key={key}>
            <Name> { key } </Name>
            <Value> { fontSizes[key] } </Value>
          </Wrapper>
        )}
          
        <Header>Font weights</Header>
        {Object.keys(fontWeights).map(key => 
          <Wrapper key={key}>
            <Name> { key } </Name>
            <Value> { fontWeights[key] } </Value>
          </Wrapper>
        )}
      </div>
    </Container>
  </FlexWrapper>
  )
}

export default ColorsAndTheme;