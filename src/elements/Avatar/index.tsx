
import React from 'react'
import styled from 'styled-components';
import Avatar from './Avatar'


const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
  background-color: white;
`;



function Demo() {
  return (
    <div className='app-container'>
      <Container>
        <Avatar />
      </Container>
    </div>
  )
}
export default Demo