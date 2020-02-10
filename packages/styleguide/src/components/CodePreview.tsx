import React from 'react';
import { Colors } from '@inplayer-org/inplayer-ui';
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';

interface Props {
  code: string;
  padding?: string;
}

interface PreProps {
  padding?: string;
}

const Pre = styled.pre<PreProps>`
  width: 50rem;
  background-color: ${Colors.lightGray};
  border: 1px solid ${Colors.gray};
  border-radius: 3px;
  padding: ${({ padding }) => ifProp('padding', padding)}
`;

const CodePreview = ({ code, padding }: Props) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre padding={padding}>{tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
          </div>
        ))}</Pre>
      )}
    </Highlight>
  );
}

export default CodePreview;