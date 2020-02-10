import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InPlayerIcon } from '@inplayer-org/inplayer-ui';

import CodePreview from './CodePreview';
import CodeEditor from './CodeEditor';
import PropsPreview from './PropsPreview';
import { getComponent } from '../utils/generateComponentData';
import DescriptionWrapper from './DescriptionWrapper';

const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
  width: 200rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
`;

const PathWrapper = styled.div`
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
  rootChanged: (string) => void;
}

const ComponentWrapper: React.FC<Props> = ({ rootChanged }) => {
  let { id } = useParams();
  const { description, path, usage, examples, propsAndMethods } = getComponent(id);


  useEffect(() => {
    rootChanged(id);
  }, [id]);

  return (
    <WrapperNavigationChild>
      <Wrapper>
        <ComponentName>{id}</ComponentName>
        {path && <PathWrapper>
          {path}
          <CopyToClipboard text={path}>
            <StyledIcon name="file" title="Copy to clipboard" />
          </CopyToClipboard>
        </PathWrapper>}
        {propsAndMethods && <PropsPreview propsAndMethods={propsAndMethods} />}
        {description && <DescriptionWrapper description={description.trim()} />}
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
