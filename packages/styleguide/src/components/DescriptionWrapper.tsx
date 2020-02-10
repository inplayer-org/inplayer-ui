import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';

interface Props {
  description: string;
}

const Description = styled.div`
  padding-bottom: 10px;
  width: 50rem;
  white-space: pre-wrap;
  line-height: 25px;
`;

const DescriptionWrapper = ({ description }: Props) => {
  return (
   <Description>
     { ReactHtmlParser(description) }
   </Description>
  );
}

export default DescriptionWrapper;