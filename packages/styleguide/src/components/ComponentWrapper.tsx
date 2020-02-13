import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InPlayerIcon } from '@inplayer-org/inplayer-ui';

import CodePreview from './CodePreview';
import CodeEditor from './CodeEditor';
import PropsPreview from './PropsPreview';
import { getComponent } from '../utils/generateComponentData';
import DescriptionWrapper from './DescriptionWrapper';

export const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
  width: 200rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PathWrapper = styled.div`
  padding-bottom: 10px;
  width: 50rem;
`;

const ExampleWrapper = styled.div`
  margin-bottom: 20px; 
`;

const StyledIcon = styled(InPlayerIcon)`
  cursor: pointer;
  margin-left: 5px;
`;

const ComponentWrapper: React.FC = () => {
  let { id } = useParams();
  const { description, path, usage, examples, propsAndMethods } = getComponent(id);

  return (
    <WrapperNavigationChild>
      <div>
        <h1>{id}</h1>
        {path && <PathWrapper>
          {path}
          <CopyToClipboard text={path}>
            <StyledIcon name="file" title="Copy to clipboard" />
          </CopyToClipboard>
        </PathWrapper>}
        {propsAndMethods && <PropsPreview propsAndMethods={propsAndMethods} />}
        {description && <DescriptionWrapper description={description.trim()} />}
        {usage && <CodePreview code={usage} />}
        {examples?.map(({ exampleId, code, title, displayCode = true}) => {
          return (
            <ExampleWrapper key={exampleId ?? title}>
              <h3>{title}</h3>
              <CodeEditor displayCodeButton={displayCode} code={code} />
            </ExampleWrapper>
          );
        })}
      </div>
    </WrapperNavigationChild>
  );
};

export default ComponentWrapper;
