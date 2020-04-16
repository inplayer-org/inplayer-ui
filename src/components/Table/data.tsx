import React from 'react';
import { FaMusic } from 'react-icons/fa';

export const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '',
    key: 'icon',
    render: ({ value }: any) => <FaMusic />,
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
    render: ({ value, rowValues }: any) => `${value} - ${rowValues.dateCreated}`,
  },
];

export const data = [
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

export const totalPages = Math.ceil(data.length / 5);
