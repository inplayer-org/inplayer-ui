import React, { useState } from 'react';
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
}

const scope = {
    Checkbox: components.Checkbox,
    Button: components.Button,
};

const CodeEditor = ({code}: Props) => {
    const [viewCode, toggleViewCode] = useState(false);
    
    return (
        <Wrapper>
            <LiveProvider code={code}  scope={scope} noInline={false} theme={theme}>
                <LivePreview />
                <Button size="sm" onClick={() => toggleViewCode(!viewCode)}>View code</Button>
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