// @flow
import React from 'react';
import { MdInfoOutline, MdWarning } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import styled from 'styled-components';

import colors from 'theme/colors';
import NoteWrapper from './NoteWrapper';

const createIconStyles = ({ color }: { color?: string }) => ({
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
type NoteType = 'informative' | 'success' | 'warning' | 'danger';


interface Props {
    title: string;
    text: string;
    type: NoteType;
    /** A className can be passed down for further styling or extending with CSS-in-JS */
    className?: string;
    style?: Object;
};

const NoteIcon = {
    informative: null,
    success: <SuccessIcon color={colors.green} />,
    warning: <WarningIcon color={colors.yellow} />,
    danger: <DangerIcon color={colors.red} />,
};

const getIconFromNoteType = (type: NoteType) => NoteIcon[type];

const Note = ({ type, title, text, className, style }: Props) => {
    const Icon = getIconFromNoteType(type);
    return (
        <NoteWrapper type={type} className={className} style={style}>
            {Icon} <strong>{title}</strong>
            {text}
        </NoteWrapper>
    );
};

Note.defaultProps = {
    className: '',
    style: {},
};

export default Note;
