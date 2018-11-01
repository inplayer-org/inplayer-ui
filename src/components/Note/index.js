// @flow
import React from 'react';
import Icon from 'elements/Icon';
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

const NoteIcon = {
  informative: null,
  success: 'check-circle',
  warning: 'info-circle',
  danger: 'exclamation-triangle',
};

const NoteIconModifier = {
  informative: null,
  success: 'statusColorPrimary',
  warning: 'statusColorWarning',
  danger: 'statusColorDanger',
};

const getIconFromNoteType = (icon: string, type: NoteType) =>
  type !== 'informative' && (NoteIcon[type] || icon);

const Note = ({ type, title, text, icon, className }: Props) => {
  const iconType = getIconFromNoteType(icon, type);
  return (
    <NoteWrapper type={type} className={className}>
      {iconType && (
        <Icon name={getIconFromNoteType(icon, type)} modifiers={[NoteIconModifier[type]]} />
      )}{' '}
      <strong>{title}</strong>
      {text}
    </NoteWrapper>
  );
};

Note.defaultProps = {
  className: '',
};

export default Note;
