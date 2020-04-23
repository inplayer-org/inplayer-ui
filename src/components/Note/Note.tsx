import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { MdInfoOutline, MdWarning } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import colors from 'theme/colors';

import NoteWrapper, { NoteType } from './NoteWrapper';

interface NoteProps {
  /**
   * Title note
   */
  title: string;
  /**
   * Actual note that is displayed
   */
  text: string;
  /**
   * Note type
   */
  type: NoteType;
  /**
   * External CSS class name
   */
  className?: string;
  /**
   * Inline CSS
   */
  style?: CSSProperties;
}

interface IconProps {
  color?: string;
}

const createIconStyles = ({ color }: IconProps) => ({
  width: '1.5rem',
  height: '1.5rem',
  color,
  'margin-right': '0.5rem',
});

const SuccessIcon = styled(IoIosCheckmarkCircle)`
  ${createIconStyles}
`;

const WarningIcon = styled(MdInfoOutline)`
  ${createIconStyles}
`;

const DangerIcon = styled(MdWarning)`
  ${createIconStyles}
`;

const NoteIcon = {
  informative: null,
  success: <SuccessIcon color={colors.skyBlue} />,
  warning: <WarningIcon color={colors.yellow} />,
  danger: <DangerIcon color={colors.red} />,
};

const getIconFromNoteType = (type: NoteType) => NoteIcon[type];

const Note = ({ type, title, text, className = '', style = {} }: NoteProps) => {
  const Icon = getIconFromNoteType(type);
  return (
    <NoteWrapper type={type} className={className} style={style}>
      {Icon} <strong>{title}</strong>
      {text}
    </NoteWrapper>
  );
};

export default Note;
