// @flow
import React from 'react';
import NoteWrapper from './NoteWrapper';

type Props = {
  type: string,
  title: string,
  text: string,
  icon: string,
};

const Note = ({ type, title, text, icon }: Props) => (
  <NoteWrapper type={type}>
    <i className={`ipic_${icon}`} />
    <strong>{title}</strong>
    {text}
  </NoteWrapper>
);

export default Note;
