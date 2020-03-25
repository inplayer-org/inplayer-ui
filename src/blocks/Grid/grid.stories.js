// @flow
import React from 'react';
import { flatMap, range } from 'lodash-es';
import styled from 'styled-components';

// components
import Cell from './Cell';
import Container from './Container';
import Typography from '../../elements/Typography/index';

export default {
  component: Cell,
  title: 'Grid',
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const StyledCell = styled(Cell)`
  border: solid 1px #ddd;
  background-color: #eee;
  color: #286090;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCellNoPos = styled(Cell)`
  border: solid 1px #ddd;
  background-color: #eee;
  color: #286090;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled(Container)`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const AlignmentHeadings = styled(Typography)`
  align-self: center;
`;

export const traditionalGrid = () => {
  const rows = (counts) =>
    flatMap(counts, (number) =>
      range(number).map((i) => (
        <StyledCell width={12 / number} key={`${number}_${i}`}>
          {i + 1}/{number}
        </StyledCell>
      ))
    );
  return (
    <PageContainer>
      <Typography variant="h1" color="black">
        Traditional Grid
      </Typography>
      <Typography variant="p" description>
        Grid, itself, is not a component, you can import several components from it. Container and
        Cell, all live within Grid. Each of these components is Flexbox-based.
      </Typography>
      <StyledContainer columns={12} minRowHeight="45px">
        {rows([12, 6, 4, 2, 1])}
      </StyledContainer>
    </PageContainer>
  );
};

export const transponsedGrid = () => {
  const columns = (counts) =>
    flatMap(counts, (count, i) =>
      range(count).map((number) => (
        <StyledCell height={12 / count} key={`${number}_${i}`}>
          {number + 1}/{count}
        </StyledCell>
      ))
    );
  return (
    <PageContainer>
      <Typography variant="h1" color="black">
        Transponsed Grid
      </Typography>
      <Typography variant="p" description>
        For transponsed grid use height instead of width and add flow="column" to the Grid
        component. This maps directly to the grid-auto-flow CSS property.
      </Typography>
      <StyledContainer flow="column" columns={5}>
        {columns([12, 6, 4, 2, 1])}
      </StyledContainer>
    </PageContainer>
  );
};

export const positioning = () => (
  <PageContainer>
    <Typography variant="h1" color="black">
      Positioning
    </Typography>
    <Typography variant="p" description>
      You can use the left and top props to set the grid-column-start and grid-row-start CSS
      properties, respectively. This allows you to offset content or have finer grain control over
      the position of cells.
      <br />
      <br />
      Keep in mind that the top-left coordinate is (1, 1), not (0, 0).
    </Typography>
    <StyledContainer columns={3} minRowHeight="65px">
      <StyledCell>Top Left</StyledCell>
      <StyledCell left={3}>Top Right</StyledCell>
      <StyledCell left={2} top={2}>
        Middle
      </StyledCell>
      <StyledCell top={3}>Bottom Left</StyledCell>
      <StyledCell top={3} left={3}>
        Bottom Right
      </StyledCell>
    </StyledContainer>
  </PageContainer>
);

export const responsive = () => (
  <PageContainer>
    <Typography variant="h1" color="black">
      Responsive Layout
    </Typography>
    <Typography variant="p" description>
      The grid-template-columns CSS property is incredibly powerful for building responsive content.
      When the columns prop is a number, it is a shorthand for grid-template-columns: repeat(N,
      1fr). However, when you pass a string, the value is passed directly to the CSS property,
      allowing you leverage the full power of this property.
      <br />
      <br />
      If you're just after basic responsive content that will automatically fit to your content, you
      can use repeat(auto-fit, minmax(120px, 1fr)) as your columns prop, which will create columns
      to auto-fit your content with a minimum width of 120px.
    </Typography>
    <StyledContainer columns="repeat(auto-fit, minmax(120px, 1fr))" minRowHeight="45px">
      <StyledCell>A</StyledCell>
      <StyledCell>B</StyledCell>
      <StyledCell>C</StyledCell>
      <StyledCell>D</StyledCell>
      <StyledCell>E</StyledCell>
      <StyledCell>F</StyledCell>
    </StyledContainer>
  </PageContainer>
);

export const holyGrailLayout = () => (
  <PageContainer>
    <Typography variant="h1" color="black">
      Holy Grail Layout
    </Typography>
    <Typography variant="p" description>
      The Holy Grail layout is trivial using the rows prop. This prop is forwarded to the
      grid-template-rows CSS property. In this example we set the first and last rows to be at least
      45px tall, but auto-grow if the content grows. The middle row is set to 1fr, which will grow
      to take up all available space.
    </Typography>
    <StyledContainer columns="100px 1fr 100px" rows="minmax(45px, auto) 1fr minmax(45px, auto)">
      <StyledCell width={3}>
        <h1>Header</h1>
      </StyledCell>
      <StyledCell>Menu</StyledCell>
      <StyledCell>Content</StyledCell>
      <StyledCell>Ads</StyledCell>
      <StyledCell width={3}>Footer</StyledCell>
    </StyledContainer>
  </PageContainer>
);

export const areas = () => (
  <PageContainer>
    <Typography variant="h1" color="black">
      Areas
    </Typography>
    <Typography variant="p" description>
      This example takes the holy grail layout and applies "areas" to it. Using areas means you no
      longer need to use width and height on your cells. Instead you specify areas (which maps to
      grid-template-areas) on your Grid, and use the names you supplied on the Cells using the area
      prop, which again maps directly to the grid-areas CSS property.
      <br />
      <br />
      Notice that this gives you the flexibility to arrange the HTML in a different order to how it
      is displayed on screen.
    </Typography>
    <StyledContainer
      columns="100px 1fr 100px"
      rows="45px 1fr 45px"
      areas={['header header  header', 'menu   content ads   ', 'footer footer  footer']}
    >
      <StyledCell area="header">Header</StyledCell>
      <StyledCell area="content">Content</StyledCell>
      <StyledCell area="menu">Menu</StyledCell>
      <StyledCell area="ads">Ads</StyledCell>
      <StyledCell area="footer">Footer</StyledCell>
    </StyledContainer>
  </PageContainer>
);

export const horizontalAndVerticalAlignment = () => {
  const alignments = [
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ];

  return (
    <PageContainer>
      <Typography variant="h1" color="black">
        Alignment
      </Typography>
      <Typography variant="p" description>
        Horizontal alignment of columns can be modified using the justifyContent.
      </Typography>
      <StyledContainer columns="repeat(auto-fit, minmax(200px, 1fr))">
        {alignments
          .filter((x) => x !== 'stretch')
          .map((alignment) => (
            <StyledCellNoPos style={{ display: 'flex', flexDirection: 'column' }} key={alignment}>
              <AlignmentHeadings variant="p" color="#286090">
                {alignment}
              </AlignmentHeadings>
              <StyledContainer columns="50px 50px 50px" justifyContent={alignment}>
                <StyledCellNoPos>A</StyledCellNoPos>
                <StyledCellNoPos>B</StyledCellNoPos>
                <StyledCellNoPos>C</StyledCellNoPos>
              </StyledContainer>
            </StyledCellNoPos>
          ))}
      </StyledContainer>
      <br />
      <br />
      <Typography variant="p" description>
        Vertical alignment of rows can be modified using the alignContent.
      </Typography>
      <StyledContainer columns="repeat(auto-fit, minmax(130px, 1fr))" minRowHeight="150px">
        {alignments.map((alignment) => (
          <StyledCellNoPos key={alignment} style={{ display: 'flex', flexDirection: 'column' }}>
            <AlignmentHeadings variant="p" color="#286090">
              {alignment}
            </AlignmentHeadings>
            <StyledContainer columns={1} alignContent={alignment}>
              <StyledCellNoPos>A</StyledCellNoPos>
              <StyledCellNoPos>B</StyledCellNoPos>
              <StyledCellNoPos>C</StyledCellNoPos>
            </StyledContainer>
          </StyledCellNoPos>
        ))}
      </StyledContainer>
    </PageContainer>
  );
};

export const centeringContent = () => (
  <PageContainer>
    <Typography variant="h1" color="black">
      Centering Content
    </Typography>
    <Typography variant="p" description>
      Centering content (especially verticically) has traditionally been quite difficult in CSS.
      styled-css-grid offers two helper props, middle and center to simpify the process.
    </Typography>
    <StyledContainer columns={2} minRowHeight="45px">
      <StyledCellNoPos middle={false} center={false}>
        Default
      </StyledCellNoPos>
      <StyledCellNoPos center={false} middle>
        Middle
      </StyledCellNoPos>
      <StyledCellNoPos center middle={false}>
        Center
      </StyledCellNoPos>
      <StyledCellNoPos center middle>
        Center-Middle
      </StyledCellNoPos>
    </StyledContainer>
  </PageContainer>
);
