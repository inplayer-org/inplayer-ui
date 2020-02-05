import React from 'react';
import { Colors } from '@inplayer-org/inplayer-ui';
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github';
import styled from 'styled-components';

interface Props {
  code: string;
}

const Pre = styled.pre`
  width: 100%;
  background-color: ${Colors.lightGray};
  margin: 50px;
  padding-top:10px;
  padding-bottom: 30px;
  border: 1px solid ${Colors.gray};
  border-radius: 3px;
`;

const CodePreview = ({ code }: Props) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre>{tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
          </div>
        ))}</Pre>
      )}
    </Highlight>
  );
}

export default CodePreview;