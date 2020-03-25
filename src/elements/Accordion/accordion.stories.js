// @flow
import React from 'react';
import styled from 'styled-components';
import { uiColors } from 'utils';

// components
import { MdInfo } from 'react-icons/md';
import Accordion from './index';
import Typography from '../Typography/index';

export default {
  component: Accordion,
  title: 'Accordion',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const StyledIcon = styled(MdInfo)`
  color: ${uiColors('primary.main')};
`;

export const demo = () => {
  const panels = [
    {
      label: 'Accordion1',
      icon: <StyledIcon />,
      renderContent: ({ closePanel }) => (
        <div>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
          <Typography variant="h1" color="black">
            Long Content for the accordion1
          </Typography>
        </div>
      ),
    },
    {
      label: 'Accordion2',
      icon: <StyledIcon />,
      iconTooltip: {
        content: 'This is a disabled panel with optional icon with a tooltip',
        placement: 'left',
      },
      renderContent: ({ closePanel }) => <h5>Content for the accordionh2</h5>,
      disabled: true,
    },
    {
      label: 'Accordion3',
      renderContent: () => (
        <Typography variant="h5" color="black">
          Content for the accordion h3
        </Typography>
      ),
    },
  ];

  return (
    <Container>
      <Typography variant="h1" color="black">
        Accordion
      </Typography>
      <Typography variant="p" description>
        Accordion or expansion panel is a component that generates Accordion component with more
        accordion panels.It takes <b>panels</b> - array of objects and each object should contain:
        <br /> - <b>label</b> (title)
        <br /> - <b>icon</b> (icon displayed next to the title)
        <br /> - <b>renderContent</b> (action used to render the content)
        <br /> - <b>iconTooltip</b> (optional parameter - a tooltip to display on hovering the icon,
        see <b>Tooltip</b>'s prop list) - default <b>null</b>
        <br /> - <b>disabled</b>(optional paremeter - a boolean to disable clicking or opening the
        panel) - default <b>false</b>
        <br />
        <br />
        Other props that the accordion accepts:
        <br /> - <b>isExtendable</b> (display arrow and allow the accordion to extend)
        <br /> - <b>width</b> (optional parameter - sets the width for the Accordion wrapper) -
        default 100 %
        <br /> - <b>extendWidth</b> (optional parameter - defines the width the accordion should
        extend) - default 20 %
        <br /> - <b>contentHeight</b> - that determines the height of the wrapper.
        <br /> - <b>onActivePanelChange</b> - function to be executed when the accordion tab changes
      </Typography>
      <Accordion
        onActivePanelChange={(index) => console.log(index)}
        panels={panels}
        contentHeight="100vh"
        isExtendable
        width="80%"
        extendWidth="20%"
      />
    </Container>
  );
};
