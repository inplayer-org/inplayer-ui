import React, { useEffect, useMemo, useState, FunctionComponent } from 'react';
import styled, { StyledComponent, css } from 'styled-components';
import ReactQuill from 'react-quill';
import { Theme, Colors } from '@inplayer-org/inplayer-ui';

// editor styles
import 'react-quill/dist/quill.snow.css';

// utils
import throttle from 'lodash/throttle';

interface Props {
  value: string | any;
  readOnly?: boolean;
  onChange?: (e: any) => any;
  displayToolbar?: boolean;
  isAssetPreviewTitle?: boolean;
  textBackground?: string;
  textColor?: string;
  isTextCenter?: boolean;
  isPadding?: boolean;
  lineHeight?: number;
}

interface StyledEditorContainerProps {
  readOnly?: boolean;
  isAssetPreviewTitle?: boolean;
  textBackground?: string;
  textColor?: string;
  isTextCenter?: boolean;
  isPadding?: boolean;
  lineHeight?: number;
}

const EditorContainer: StyledComponent<'div', Theme, StyledEditorContainerProps> = styled.div`
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
    font-family: Roboto;
    font-weight: ${({ theme }) => theme.font.weights.light};
    line-height: ${({ lineHeight }) => lineHeight || 1};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    color: ${({ textColor }) => textColor || Colors.fontDarkGray};
    text-align: ${({ isTextCenter }) => isTextCenter && 'center'};
  }

  ${({ isAssetPreviewTitle }: StyledEditorContainerProps) =>
    isAssetPreviewTitle &&
    css`
      button.ql-link {
        display: none !important;
      }
    `}

  ${({ readOnly }: StyledEditorContainerProps) =>
    readOnly &&
    css`
      .ql-container.ql-snow {
        border: 0;
      }

      .ql-editor {
        padding-left: 0;
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
        color: ${({ textColor }) => textColor || Colors.black};
        padding: ${({ isPadding }) => isPadding && '0.5em'};
        background: ${({ textBackground }) => textBackground || 'transparent'};
      }
    `}
`;

const TextEditor: FunctionComponent<Props> = ({
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
}) => {
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

export default TextEditor;
