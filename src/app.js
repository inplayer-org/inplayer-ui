import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import {
  ThemeWrapper,
  Grid,
  Preview1,
  Preview2,
  Preview3,
  Preview4,
  Preview5,
  Preview6,
  Preview7,
} from './index.js';

const { Container, Cell } = Grid;

const StyledContainer = styled(Container)`
  margin: 3rem;
`;

function App() {
  return (
    <ThemeWrapper withProvider={ThemeProvider}>
      <StyledContainer gap="1rem">
        <Cell width={6}>
          <Preview1 />
        </Cell>
        <Cell width={6}>
          <Preview2 />
        </Cell>
        <Cell width={6}>
          <Preview3 />
        </Cell>
        <Cell width={6}>
          <Preview4 />
        </Cell>
        <Cell width={6}>
          <Preview5 />
        </Cell>
        <Cell width={6}>
          <Preview6 />
        </Cell>
        <Cell width={6}>
          <Preview7 />
        </Cell>
      </StyledContainer>
    </ThemeWrapper>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
