/* eslint-disable react/display-name */
import React from 'react';
import { MdInfo } from 'react-icons/md';
import Accordion from '.';

const Usage = () => {
  const panels = [
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
      icon: null,
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
      icon: null,
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

  return (
    <Accordion
      onActivePanelChange={(index) => console.log(index)}
      panels={panels}
      contentHeight="46vh"
      isExtendable
      width="80%"
      extendWidth="20%"
    />
  );
};

export default Usage;
