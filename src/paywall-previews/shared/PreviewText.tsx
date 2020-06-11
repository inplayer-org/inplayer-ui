import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

import colors from '../../theme/colors';

interface EditorContainerProps {
  textBackground?: string;
  textColor?: string;
  isTextCenter?: boolean;
  lineHeight?: number;
  padding?: string;
}

const TextContainer = styled.div<EditorContainerProps>`
  color: ${({ textColor }) => textColor || colors.black};
  background: ${({ textBackground }) => textBackground || 'transparent'};
  text-align: ${({ isTextCenter }) => isTextCenter && 'center'};
  line-height: ${({ lineHeight }) => lineHeight || 1};
  padding: ${({ padding }) => padding};
  margin: 1rem 0;
  p,
  ol,
  ul,
  pre,
  blockquote,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

interface Props extends EditorContainerProps {
  value: string | any;
}

const PreviewText = ({
  value,
  textBackground = '',
  textColor = '',
  isTextCenter = false,
  padding = '',
  lineHeight = 0,
}: Props) => (
  <TextContainer
    textBackground={textBackground}
    textColor={textColor}
    isTextCenter={isTextCenter}
    padding={padding}
    lineHeight={lineHeight}
  >
    {convert(DOMPurify.sanitize(value))}
  </TextContainer>
);

export default PreviewText;
