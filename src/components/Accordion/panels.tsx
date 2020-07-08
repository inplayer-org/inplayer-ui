/* eslint-disable react/display-name */
import React from 'react';
import { MdInfo } from 'react-icons/md';

export const panels = [
  {
    label: 'Accordion1',
    icon: <MdInfo color="orange" />,
    renderContent: () => (
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
    label: 'Disabled Accordion',
    icon: <MdInfo color="gray" />,
    renderContent: () => (
      <div>
        <h1>Long Content for the accordion</h1>
        <h1>Long Content for the accordion</h1>
        <h1>Long Content for the accordion</h1>
        <h1>Long Content for the accordion</h1>
        <h1>Long Content for the accordion</h1>
        <h1>Long Content for the accordion</h1>
      </div>
    ),
    disabled: true,
  },
  {
    label: 'Accordion3',
    icon: <MdInfo color="green" />,
    renderContent: () => (
      <div>
        <h1>Long Content for the accordion3</h1>
        <h1>Long Content for the accordion3</h1>
        <h1>Long Content for the accordion3</h1>
        <h1>Long Content for the accordion3</h1>
        <h1>Long Content for the accordion3</h1>
        <h1>Long Content for the accordion3</h1>
      </div>
    ),
  },
];
