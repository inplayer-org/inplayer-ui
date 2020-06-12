import React from 'react';
import parse from 'html-react-parser';
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
  background: ${({ textBackground }) => textBackground || 'transparent'};
  line-height: ${({ lineHeight }) => lineHeight || 1};
  padding: ${({ padding }) => padding};
  margin: 1rem 0;
  /* Increase specificity to override any other styles */
  && p,
  && ol,
  && ul,
  && pre,
  && blockquote,
  && h1,
  && h2,
  && h3,
  && h4,
  && h5,
  && h6 {
    margin: 0;
    text-align: ${({ isTextCenter }) => (isTextCenter ? 'center' : 'left')};
    color: ${({ textColor }) => textColor || colors.black};
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
    {parse(DOMPurify.sanitize(value))}
  </TextContainer>
);

export default PreviewText;
