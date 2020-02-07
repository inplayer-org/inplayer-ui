import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
import { Button, Colors } from '@inplayer-org/inplayer-ui';
import styled from 'styled-components';
import * as components from '@inplayer-org/inplayer-ui';
import theme from 'prism-react-renderer/themes/github';
import moment from 'moment';

const Wrapper = styled.div`
    width: 50rem;

    > * {
        margin-top: 10px;
    }
`;

const EditorWrapper = styled.div`
    border: 1px solid ${Colors.gray};
    border-radius: 3px;
`;

interface Props {
  code: string;
  displayCodeButton: boolean;
}

const scope = {
  ...components,
  moment,
};

const CodeEditor = ({ code, displayCodeButton }: Props) => {
  let { id } = useParams();
  const [viewCode, toggleViewCode] = useState(false);

  useEffect(() => {
    toggleViewCode(false);
  }, [id]);
  
  return (
    <Wrapper>
      <LiveProvider code={code.trimRight()} scope={scope} noInline={false} theme={theme}>
        <LivePreview />
        {displayCodeButton && <Button size="sm" onClick={() => toggleViewCode(!viewCode)}>View code</Button>}
        {viewCode && (
          <EditorWrapper>
            <LiveEditor />
            <LiveError />
          </EditorWrapper>
        )}
      </LiveProvider>
    </Wrapper>
  );
}

export default CodeEditor;