// @flow
import React from 'react';
import NoteWrapper from './NoteWrapper';

type NoteType = 'informative' | 'success' | 'warning' | 'danger';

type Props = {
  title: string,
  text: string,
  icon: string,
  type: NoteType,
  /** A className can be passed down for further styling or extending with CSS-in-JS */
  className?: string,
};

const Note = ({ type, title, text, icon, className }: Props) => (
  <NoteWrapper type={type} className={className}>
    <i className={`ipic_${icon}`} />
    <strong>{title}</strong>
    {text}
  </NoteWrapper>
);

Note.defaultProps = {
  className: '',
};

export default Note;
