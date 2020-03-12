// @flow
import React from 'react';
import styled from 'styled-components';

// components
import Button from '../../elements/Button/index';
import Tooltip from './index';
import Typography from '../../elements/Typography/index';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90%;
`;

const TooltipContainer = styled.div`
  align-self: center;
  border: solid 1px #eee;
  padding: 10px;
  margin-top: 2%;
`;

export const demo = () => (
  <>
    <Container>
      <Typography variant="h1" color="black">
        Tooltip
      </Typography>
      <Typography variant="p" description>
        Tooltip a is a component for displaying additional information on hover some element. The
        position of the tooltip attribute can be: up, down, right, left. You can use it directly
        like this:
      </Typography>
      <TooltipContainer>
        <Tooltip content="😎">
          <Button>Hover me!</Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Tooltip at the left" placement="left">
          <Button>Hover me too!</Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Tooltip at the right" placement="right">
          <Button>Hover me as well!</Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content={`Tooltip at the bottom\nSecond line example`} placement="bottom">
          <Button>Hover me also!</Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Hello!" behavior="click" placement="right">
          <Button>Click me!</Button>
        </Tooltip>
      </TooltipContainer>
    </Container>
  </>
);

export const withCustomColor = () => (
  <>
    <Container>
      <Typography variant="h1" color="black">
        Tooltip
      </Typography>
      <Typography variant="p" description>
        Tooltip a is a component for displaying additional information on hover some element. The
        position of the tooltip attribute can be: up, down, right, left. You can use it directly
        like this:
      </Typography>
      <TooltipContainer>
        <Tooltip
          arrow={15}
          background="#000"
          border="#000"
          color="#fff"
          content="😎"
          fadeDuration={0}
          fadeEasing="linear"
          fixed={false}
          fontFamily="inherit"
          fontSize="inherit"
          offset={0}
          padding={2}
          placement="top"
          radius={0}
          zIndex={1}
        >
          <Button>Hover me !</Button>
        </Tooltip>
      </TooltipContainer>
    </Container>
  </>
);
