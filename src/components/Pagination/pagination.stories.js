import React from 'react';
import styled from 'styled-components';
import { Pagination, Typography, Colors } from 'src/index';

export default {
  component: Pagination,
  title: 'Pagination',
};

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
const BoxContainer = styled.div`
  border: 1px solid ${Colors.darkGray};
  width: 90%;
  padding: 30px;
`;
const HeadlineTypography = styled(Typography)`
  color: ${Colors.black};
`;
const paginateData = {
  total: 100,
};

export const Demo = () => (
  <Container>
    <HeadlineTypography variant="h1">Pagination</HeadlineTypography>
    <Typography variant="p" description>
      A component to render a pagination. It takes:
      <br /> - <b>totalItems</b> - the total number of the items
      <br /> - <b>startPage</b> - the start number of the page
      <br /> - <b>itemsPerPage</b> - number of items per page
      <br /> - <b>numberOfPagesDisplayer</b> - number of pages visible at once
      <br /> - <b>onPageChange</b> - handler for changing the page
    </Typography>
    <br />
    <BoxContainer>
      <Pagination totalItems={paginateData.total} />
    </BoxContainer>
  </Container>
);
