// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

// components
import { FaBeer } from 'react-icons/fa';
import Dropdown from '../../elements/Dropdown/index';
import Input from '../../elements/Input/index';
import Typography from '../../elements/Typography/index';
import Table from './index';
import Pagination from '../Pagination/index';

export default {
  component: Table,
  title: 'Table',
};

const PaginationContainer = styled.div`
  margin-top: 2%;
`;

const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;

const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '',
    key: 'icon',
  },
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
  },
  {
    title: 'Director',
    key: 'director',
    render: ({ value, rowValues }) => `${value} - ${rowValues.dateCreated}`,
  },
];

const data = [
  {
    id: 22,
    icon: 'music',
    name: "Won't You Be My Neighbour?",
    director: 'Morgan Neville',
    dateCreated: '2018/07/24',
  },
  {
    id: 28,
    icon: 'code',
    name: 'Soundtrack: No Country',
    director: 'Coen Brothers',
    dateCreated: '2018/07/21',
  },
];

export const withArrayOfRowFunctions = () => {
  const [page, setPage] = useState(1);

  const limitPerPage = 10;

  const onPageChange = (newPageNum) => {
    setPage(newPageNum);
  };

  return (
    <>
      <Container>
        <Typography variant="h1" color="black">
          Table
        </Typography>
        <Typography variant="p" description>
          Table is a component for displaying information in order user to look for patterns and
          easy to scan details.
          <br />
          <br /> The columns contain <b>title</b> - which is presented at the top od the columns and
          <b> key </b>for each column.
          <br /> The data props contain object of each keys that are presented in the table cell
          according to the key.
          <br /> The <b>options</b> object contains table options like row selection and row
          actions.
        </Typography>
        <Typography variant="h1" color="black">
          With array of row actions
        </Typography>
        <Input
          type="search"
          placeholder="Search"
          onChange={() => console.log('onChange')}
          style={{ maxWidth: 300 }}
        />
        <br />
        <Table
          columns={columns}
          data={data}
          options={{
            rowSelection: {
              active: true,
              action: (newData) => console.log(newData),
            },
            rowActions: ({ row }) => <FaBeer />,
          }}
        />
        <PaginationContainer>
          <Pagination
            totalItems={data.length}
            startPage={page}
            numberOfPagesDisplayed={5}
            itemsPerPage={limitPerPage}
            onPageChange={onPageChange}
          />
        </PaginationContainer>
      </Container>
    </>
  );
};

export const withHeaderSection = () => {
  const [page, setPage] = useState(1);

  const limitPerPage = 10;

  const onPageChange = (newPageNum) => {
    setPage(newPageNum);
  };

  const renderHeaderSection = () => {
    const options = [
      { value: 'Option 1', displayName: 'Option 1' },
      { value: 'Option 2', displayName: 'Option 2' },
    ];
    return (
      <div>
        <Dropdown options={options} value={options[0].value} onChange={console.log} />
        <Dropdown options={options} value={options[0].value} onChange={console.log} />
      </div>
    );
  };

  return (
    <>
      <Container>
        <Typography variant="h1" color="black">
          Table
        </Typography>
        <Typography variant="p" description>
          Table is a component for displaying information in order user to look for patterns and
          easy to scan details.
          <br />
          <br /> The columns contain <b>title</b> - which is presented at the top od the columns and
          <b> key </b>for each column.
          <br /> The data props contain object of each keys that are presented in the table cell
          according to the key.
          <br /> The <b>options</b> object contains table options like row selection and row
          actions.
        </Typography>
        <Typography variant="h1" color="black">
          With header section
        </Typography>
        <br />
        <Table
          columns={columns}
          data={data}
          options={{
            rowSelection: {
              active: true,
              action: (newData) => console.log(newData),
            },
            rowActions: ({ row }) => <FaBeer />,
            headerSection: renderHeaderSection(),
          }}
          tableButton={{
            label: 'Add new',
            icon: <FaBeer />,
            onClick: () => console.log('Clicked'),
          }}
        />
        <PaginationContainer>
          <Pagination
            totalItems={data.length}
            startPage={page}
            numberOfPagesDisplayed={5}
            itemsPerPage={limitPerPage}
            onPageChange={onPageChange}
          />
        </PaginationContainer>
      </Container>
    </>
  );
};
