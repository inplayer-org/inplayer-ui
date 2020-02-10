import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { InPlayerIcon } from '@inplayer-org/inplayer-ui';

import CodePreview from './CodePreview';
import CodeEditor from './CodeEditor';
import PropsPreview from './PropsPreview';
import { getComponent } from '../utils/generateComponentData';

const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
  width: 200rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
`;

const Description = styled.div`
  padding-bottom: 10px;
  width: 50rem;
`;

const ExampleWrapper = styled.div`
  margin-bottom: 20px; 
`;

const ComponentName = styled.h1`
`;

const ExampleTitle = styled.h3`
`;

const StyledIcon = styled(InPlayerIcon)`
  cursor: pointer;
  margin-left: 5px;
`;

interface Props {
  changeRoute: (string) => void;
}

const ComponentWrapper: React.FC<Props> = ({ changeRoute }) => {
  let { id } = useParams();
  const { description, path, usage, examples, propsAndMethods } = getComponent(id);


  useEffect(() => {
    changeRoute(id);
  }, [id, changeRoute]);

  return (
    <WrapperNavigationChild>
      <Wrapper>
        <ComponentName>{id}</ComponentName>
        {path && <Description>
          {path}
          <CopyToClipboard text={path}>
            <StyledIcon name="file" title="Copy to clipboard" />
          </CopyToClipboard>
          {
            propsAndMethods && <PropsPreview propsAndMethods={propsAndMethods} />
          }
        </Description>}
        {description && <Description>{description}</Description>}
        {usage && <CodePreview code={usage} />}
        {examples && examples.map(({ code, title, displayCode = true}) => {
          return (
            <ExampleWrapper>
              <ExampleTitle>{title}</ExampleTitle>
              <CodeEditor displayCodeButton={displayCode} code={code} />
            </ExampleWrapper>
          );
        })}
      </Wrapper>
    </WrapperNavigationChild>
  );
};

export default ComponentWrapper;
