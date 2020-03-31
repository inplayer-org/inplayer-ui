import React from 'react';
import styled from 'styled-components';
import { MdInfoOutline, MdWarning } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import colors from 'theme/colors';

import NoteWrapper, { NoteType } from './NoteWrapper';

interface Props {
  title: string;
  text: string;
  type: NoteType;
  className?: string;
  style?: any;
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
  success: <SuccessIcon color={colors.green} />,
  warning: <WarningIcon color={colors.yellow} />,
  danger: <DangerIcon color={colors.red} />,
};

const getIconFromNoteType = (type: NoteType) => NoteIcon[type];

const Note = ({ type, title, text, className = '', style = {} }: Props) => {
  const Icon = getIconFromNoteType(type);
  return (
    <NoteWrapper type={type} className={className} style={style}>
      {Icon} <strong>{title}</strong>
      {text}
    </NoteWrapper>
  );
};

export default Note;
