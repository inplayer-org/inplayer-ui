// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Accordion from './index';

export default {
  component: Accordion,
  title: 'Accordion',
};

const InfoContainer = styled.p`
  margin-top: 0;
  margin-bottom: 2%;
  color: #333;
  font-size: inherit;
  line-height: 1.5;
`;

export const AccordionDemo = () => {
  const panels = [
    {
      label: 'Accordion1',
      icon: 'info-circle',
      renderContent: ({ closePanel }) => (
        <div>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
          <h1>Long Content for the accordion1</h1>
        </div>
      ),
    },
    {
      label: 'Accordion2',
      icon: 'info-circle',
      iconTooltip: {
        content: 'This is a disabled panel with optional icon with a tooltip',
        placement: 'left',
      },
      renderContent: ({ closePanel }) => <h5>Content for the accordionh2</h5>,
      disabled: true,
    },
    {
      label: 'Accordion3',
      renderContent: () => <h5>Content for the accordionh3</h5>,
    },
  ];

  return (
    <>
      <InfoContainer>
        Accordion or expansion panel is a component that generates Accordion component with more
        accordion panels.It takes`panels` - array of objects and each object should contain:
        <br /> - `label`(title)
        <br /> - `icon`(icon displayed next to the title)
        <br /> - `renderContent`(action used to render the content)
        <br /> - `iconTooltip`(optional parameter - a tooltip to display on hovering the icon,
        see`Tooltip`'s prop list) - default `null`
        <br /> - `disabled`(optional paremeter - a boolean to disable clicking or opening the panel)
        - default `false`
        <br />
        <br />
        Other props that the accordion accepts:
        <br /> - `isExtendable`(display arrow and allow the accordion to extend)
        <br /> - `width`(optional parameter - sets the width for the Accordion wrapper) - default
        100 %
        <br /> - `extendWidth`(optional parameter - defines the width the accordion should extend) -
        default 20 %
        <br /> - `contentHeight` - that determines the height of the wrapper.
        <br /> - `onActivePanelChange` - function to be executed when the accordion tab changes
      </InfoContainer>
      <Accordion
        onActivePanelChange={index => console.log(index)}
        panels={panels}
        contentHeight="100vh"
        isExtendable
        width="80%"
        extendWidth="20%"
      />
    </>
  );
};
