import React, { useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';
import colors from 'theme/colors';
import { fontSizes, fontWeights } from 'utils';

// editor styles
import 'react-quill/dist/quill.snow.css';

// utils
import throttle from 'lodash/throttle';

interface EditorContainerProps {
  readOnly?: boolean;
  displayToolbar?: boolean;
  isAssetPreviewTitle?: boolean;
  textBackground?: string;
  textColor?: string;
  isTextCenter?: boolean;
  isPadding?: boolean;
  lineHeight?: number;
  paddingBottom?: boolean;
}

interface Props extends EditorContainerProps {
  value: string | any;
  onChange?: (e: any) => any;
}

const EditorContainer = styled.div<EditorContainerProps>`
  width: 100%;
  .ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .ql-editor p,
  .ql-editor ol,
  .ql-editor ul,
  .ql-editor pre,
  .ql-editor blockquote,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    line-height: ${({ lineHeight }) => lineHeight || 1};
    color: ${({ textColor }) => textColor || colors.fontDarkGray};
    text-align: ${({ isTextCenter }) => isTextCenter && 'center'};
  }
  .ql-snow .ql-editor p,
  .ql-snow .ql-editor ol,
  .ql-snow .ql-editor ul,
  .ql-snow .ql-editor pre,
  .ql-snow .ql-editor blockquote,
  .ql-snow .ql-editor h1,
  .ql-snow .ql-editor h2,
  .ql-snow .ql-editor h3,
  .ql-snow .ql-editor h4,
  .ql-snow .ql-editor h5,
  .ql-snow .ql-editor h6 {
    font-weight: ${fontWeights('light')};
    font-size: ${fontSizes('medium')};
  }
  ${({ isAssetPreviewTitle }) =>
    isAssetPreviewTitle &&
    css`
      button.ql-link {
        display: none !important;
      }
    `}
  ${({ readOnly }) =>
    readOnly &&
    css`
      .ql-container.ql-snow {
        border: 0;
      }
      .ql-editor {
        padding-left: 0;
      }
      .ql-clipboard {
        display: none;
      }
      .ql-editor p,
      .ql-editor ol,
      .ql-editor ul,
      .ql-editor pre,
      .ql-editor blockquote,
      .ql-editor h1,
      .ql-editor h2,
      .ql-editor h3,
      .ql-editor h4,
      .ql-editor h5,
      .ql-editor h6 {
        padding: ${({ isPadding }: EditorContainerProps) => isPadding && '0.5em'};
        color: ${({ textColor }) => textColor || colors.black};chn
        padding-bottom: ${({ paddingBottom }) => paddingBottom && '0.5em'};
        background: ${({ textBackground }) => textBackground || 'transparent'};
      }
    `}
`;

const TextEditor = ({
  value,
  onChange,
  readOnly = false,
  displayToolbar = false,
  isAssetPreviewTitle = false,
  textBackground = '',
  textColor = '',
  isTextCenter = false,
  isPadding = false,
  lineHeight = 0,
  paddingBottom = false,
}: Props) => {
  const [editorState, setEditorState] = useState(value);

  useEffect(() => {
    setEditorState(value);
  }, [value]);

  const handleChange = useMemo(
    () =>
      throttle((val: string) => {
        setEditorState(val);
        if (onChange) onChange(val);
      }, 500),
    [onChange]
  );

  return (
    <EditorContainer
      readOnly={readOnly}
      isAssetPreviewTitle={isAssetPreviewTitle}
      textBackground={textBackground}
      textColor={textColor}
      isTextCenter={isTextCenter}
      isPadding={isPadding}
      lineHeight={lineHeight}
      paddingBottom={paddingBottom}
    >
      <ReactQuill
        value={editorState || ''}
        onChange={handleChange}
        readOnly={readOnly}
        modules={{ toolbar: displayToolbar }}
      />
    </EditorContainer>
  );
};

export default TextEditor;
