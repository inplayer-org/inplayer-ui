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
  style?: Object,
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

const Note = ({ type, title, text, icon, className, style }: Props) => {
  const iconType = getIconFromNoteType(icon, type);
  return (
    <NoteWrapper type={type} className={className} style={style}>
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
  style: {},
};

export default Note;
