import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button/index';
import Typography from '../../elements/Typography/index';
import Modal from './index';

export default {
  component: Modal,
  title: 'Modal',
};
const Container = styled.div`
  margin: auto;
  margin-top: 2%;
  width: 90%;
`;
export const demo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      <Typography variant="h1" color="black">
        Modal
      </Typography>
      <Button onClick={openModal}>Open Modal</Button>

      <Modal title="Lorem Ipsum" isModalOpen={isOpen} closeModal={closeModal}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium nec nisi
          pulvinar lacinia. Sed dapibus id dui vel varius. Duis erat ligula, posuere nec massa nec,
          ultricies bibendum velit. Nam vehicula lectus a convallis varius. Duis ullamcorper felis
          ac sem pulvinar pretium pellentesque id urna. Aliquam erat volutpat. Pellentesque sagittis
          congue lorem, at ultricies mauris lobortis a. Nam dignissim lectus eget tellus eleifend
          dictum.
        </p>
      </Modal>
    </Container>
  );
};
