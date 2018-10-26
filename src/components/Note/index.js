// @flow
import React from 'react';
import NoteWrapper from './NoteWrapper';

type NoteType = informative | success | warning | danger;

type Props = {
  title: string,
  text: string,
  icon: string,
  type: NoteType,
};

const Note = ({ type, title, text, icon }: Props) => (
  <NoteWrapper type={type}>
    <i className={`ipic_${icon}`} />
    <strong>{title}</strong>
    {text}
  </NoteWrapper>
);

export default Note;
