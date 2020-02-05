import React, { useState } from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live';
import { Button } from '@inplayer-org/inplayer-ui';
import styled from 'styled-components';
import * as components from '@inplayer-org/inplayer-ui';

const Wrapper = styled.div`
    width: 100%;
    padding-left: 10px;
    margin-left: 10px;
`;

interface Props {
    code: string;
    scopeComponent: UiComponentType;
}

type UiComponentType = keyof typeof components;

const CodeEditor = ({code, scopeComponent}: Props) => {
    const [viewCode, toggleViewCode] = useState(false);
    // @ts-ignore
    const MyComponent = components[scopeComponent];
    const scope = {
        [scopeComponent]: MyComponent
    };
    return (
        <Wrapper>
            <LiveProvider code={code}  scope={scope} noInline={false}>
                <LivePreview />
                <Button size="sm" onClick={() => toggleViewCode(!viewCode)}>View code</Button>
                {viewCode && (
                    <div>
                    <LiveEditor />
                    <LiveError />
                    </div>    
                )}
            </LiveProvider>
        </Wrapper>
    );
}

export default CodeEditor;