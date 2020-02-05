import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const WrapperNavigationChild = styled.div`
  margin-left: 16rem;
`

const ComponentWrapper: React.FC = () => {
  let { id } = useParams();

  return (
    <WrapperNavigationChild>
      <h3>ID: {id}</h3>
    </WrapperNavigationChild>
  );
  };

export default ComponentWrapper;
