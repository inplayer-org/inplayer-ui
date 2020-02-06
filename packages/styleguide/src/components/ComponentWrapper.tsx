import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import CodePreview from './CodePreview';
import CodeEditor from './CodeEditor';
import PropsPreview from './PropsPreview';
import { getUsage, getExamples, getPropsAndMethods } from '../utils/generateComponentData';


const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
  width: 200rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ComponentWrapper: React.FC = () => {
  let { id } = useParams();
  const examples = getExamples(id); 
  const propsAndMethods = getPropsAndMethods(id);
  return (
    <WrapperNavigationChild>
      <h1>{id}</h1>
      <PropsPreview propsAndMethods={propsAndMethods} />
      <CodePreview code={getUsage(id)} />
      {examples.map(({code, title}) => {
        return (
          <div>
            <h3>{title}</h3>
            <CodeEditor code={code} />
          </div>
        );
      })}
    </WrapperNavigationChild>
  );
  };

export default ComponentWrapper;
