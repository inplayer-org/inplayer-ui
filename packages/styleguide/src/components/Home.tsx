import React from 'react';
import styled from 'styled-components';
import { WrapperNavigationChild, Wrapper } from './ComponentWrapper';
import CodePreview from './CodePreview';
import { Button } from '@inplayer-org/inplayer-ui';

const Home: React.FC = () => {
  const usage = `
    import React from "react";
    import ReactDOM from "react-dom";
    import styled from "styled-components";
    import { ThemeProvider } from "styled-components";
    import { ThemeWrapper, Button } from "@inplayer-org/inplayer-ui";
    
    function App() {
      return (
        <ThemeWrapper withProvider={ThemeProvider}>
          <Button size="lg">
            Hello World
          </Button>
        <ThemeWrapper/>
      );
    }
    
    ReactDOM.render(<App />, document.querySelector('#app'));
  `
  const styleguideExample = `
    // Adding new component named Checkbox

    const Checkbox: ComponentData = {
      description: \`
          Checkbox input is a input component for checkbox. You can use it directly like this:
        \`,
      path: 'src/components/Checkbox/index.js',
      usage,
      examples: [
        {
          title: 'Demo',
          code: demoCode,
        }
      ],
      propsAndMethods: [
        { name: 'checked', type: 'boolean', default: 'Required' },
        { name: 'id', type: 'string', default: 'Required' },
      ],
    }
  `

  const Header = styled.h2`
    margin-bottom: 2rem;
  `

  const Title = styled.h4``

  const PropertiesList = styled.ul`
    width: 50rem;
    list-style-type: none;

    > li:before {
    content: "–"; /* en dash */
    position: absolute;
    margin-left: -1.1em; 
  }
  `
  const PropertyItem = styled.li`
    font-weight: 400;
  `

  const Description = styled.p`
    margin: 1.5rem 0;
  `

  return (
    <WrapperNavigationChild>
      <Wrapper>
        <Header>InPlayer React UI Components</Header>

        <Description>Modern React UI library. Code less, do more.</Description>
        <CodePreview padding={'1rem'} code='yarn add @inplayer-org/inplayer-ui styled-components' />

        <Description>InPlayer UI is a style system / UI library for React. It works with Styled Components</Description>

        <Title>Up & Running</Title>
        <Description>To install dependencies with Yarn, run:</Description>
        <CodePreview padding={'1rem'} code='$ yarn install' />
        <Description>or to install with npm, run:</Description>
        <CodePreview padding={'1rem'} code='$ npm install' />

        <Title> Usage</Title>
        <Description>Here is a quick example to get you started, it's all you need:</Description>
        <CodePreview code={usage} />

        <Description>Yes, it's really all you need to get started as you can see in this live and interactive demo:</Description>

        <Button onClick={() => window.open("https://codesandbox.io/s/k5qqq2797")}>Edit on CodeSandbox</Button>
        <Header>Styleguide</Header>
        <Title>Steps for adding a new component</Title>
        <Description>1. Add a new file in src/data/components</Description>
        <Description>2. The new object which is representing the component should contain the following properties:</Description>
        <PropertiesList> 
          <PropertyItem>description</PropertyItem>
          <PropertyItem>path</PropertyItem>
          <PropertyItem>usage</PropertyItem>
          <PropertyItem>examples - the code property in examples object can be a class/functional component or jsx element (should be wrapped in a div element)
          </PropertyItem>
          <PropertyItem>propsAndMethods</PropertyItem>
        </PropertiesList>
        <Description>3. Import and export in src/data/data.ts</Description>
        <Title> Example </Title>
        <CodePreview code={styleguideExample} />
      </Wrapper>
    </WrapperNavigationChild>

  )
}


export default Home;