import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import CodePreview from './CodePreview';
import CodeEditor from './CodeEditor';
import { generateExamples, getUsage } from '../utils/generateComponentData';

const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
`

const ComponentWrapper: React.FC = () => {
  let { id } = useParams();

  return (
    <WrapperNavigationChild>
      <h3>ID: {id}</h3>
      <CodeEditor code={generateExamples(id)} scopeComponent={id} />
      <CodePreview code={getUsage(id)} />
    </WrapperNavigationChild>
  );
  };

export default ComponentWrapper;
