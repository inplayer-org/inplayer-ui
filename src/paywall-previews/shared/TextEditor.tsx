import React, { useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';

// editor styles
import 'react-quill/dist/quill.snow.css';

// utils
import throttle from 'lodash/throttle';

import colors from '../../theme/colors';

interface EditorContainerProps {
  readOnly?: boolean;
  displayToolbar?: boolean;
  isAssetPreviewTitle?: boolean;
  textBackground?: string;
  textColor?: string;
  isTextCenter?: boolean;
  lineHeight?: number;
  padding?: string;
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

    /* Must be set to overwrite browser(user agent) fall-back (browsers defaults) */
    margin: 0;
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
    font-weight: ${({ theme }) => theme.font.weights.light};
    font-size: ${({ theme }) => theme.font.sizes.medium};
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
        padding: ${({ padding }: EditorContainerProps) => padding};
        color: ${({ textColor }) => textColor || colors.black};
        background: ${({ textBackground }) => textBackground || 'transparent'};

        /* Must be set to overwrite browser(user agent) fall-back (browsers defaults) */
        margin: 0;
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
  padding = '',
  lineHeight = 0,
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
      padding={padding}
      lineHeight={lineHeight}
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
