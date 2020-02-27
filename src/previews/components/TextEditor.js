// @flow
import React, { useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';
import colors from 'config/colors';

// editor styles
import 'react-quill/dist/quill.snow.css';

// utils
import throttle from 'lodash/throttle';

type Props = {
  value: string | any,
  readOnly?: boolean,
  onChange: (e: any) => any,
  displayToolbar?: boolean,
  isAssetPreviewTitle?: boolean,
  textBackground?: string,
  textColor?: string,
  isTextCenter?: boolean,
  isPadding?: boolean,
  lineHeight?: number,
};

const EditorContainer = styled.div`
  width: 100%;

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
    font-weight: ${({ theme }) => theme.font.weights.light};
    line-height: ${({ lineHeight }) => lineHeight || 1};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    color: ${({ textColor }) => textColor || colors.fontDarkGray};
    text-align: ${({ isTextCenter }) => isTextCenter && 'center'};
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
        visibility: hidden;
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
        font-weight: ${({ theme }) => theme.font.weights.normal};
        color: ${({ textColor }) => textColor || colors.black};
        padding: ${({ isPadding }) => isPadding && '0.5em'};
        background: ${({ textBackground }) => textBackground || 'transparent'};
      }
    `}
`;

const TextEditor = ({
  value,
  onChange,
  readOnly,
  displayToolbar,
  isAssetPreviewTitle,
  textBackground,
  textColor,
  isTextCenter,
  isPadding,
  lineHeight,
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

TextEditor.defaultProps = {
  readOnly: false,
  displayToolbar: false,
  isAssetPreviewTitle: false,
  textBackground: '',
  textColor: '',
  isTextCenter: false,
  isPadding: false,
  lineHeight: 0,
};

export default TextEditor;
