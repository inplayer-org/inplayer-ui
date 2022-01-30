import React from 'react';
import { FaMusic, FaCode } from 'react-icons/fa';
import { object, string } from 'yup';
import { TableColumn } from '../../..';

export const columns: Array<TableColumn<any>> = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '',
    key: 'icon',
    render: () => <FaMusic />,
  },
  {
    title: 'Name',
    key: 'name',
    editable: true,
    fn: ({ value, currentValue, id }) => console.log(value, currentValue, id),
    validationSchema: object().shape({
      rowField: string()
        .required('*Required')
        .matches(/[a-zA-Z0-9_]+\.csv/, 'Filename must end with .csv'),
    }),
  },
  {
    title: 'Date Created',
    key: 'dateCreated',
    render: ({ value }: any) => value.dt,
  },
  {
    title: 'Director',
    key: 'director',
    render: ({ value, rowValues }: any) => `${value} - ${rowValues.dateCreated}`,
  },
];

export const data = [
  {
    id: 2,
    icon: <FaMusic />,
    name: "Won't You Be My Neighbour?",
    director: 'Morgan Neville',
    dateCreated: '2018/07/24',
  },
  {
    id: 8,
    icon: <FaCode />,
    name: 'Soundtrack: No Country',
    director: 'Coen Brothers',
    dateCreated: '2018/07/24',
  },
];

export const totalPages = Math.ceil(data.length / 5);
