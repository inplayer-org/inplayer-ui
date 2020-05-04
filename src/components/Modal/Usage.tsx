import React, { useState } from 'react';
import { Button } from 'components';
import Modal from './Modal';

const Usage = () => {
  const [opened, setOpened] = useState(false);
  const closeModal = () => setOpened(false);
  const openModal = () => setOpened(true);
  return (
    <div>
      <Button onClick={openModal}>Open modal</Button>
      <Modal title="Modal" isModalOpen={opened} closeModal={closeModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloribus illo aliquid
          tempora dolore a nam, culpa assumenda iure. Dolorem pariatur quos incidunt ullam, animi at
          dolore perspiciatis repellendus quaerat ad laborum. Nemo, dolor quia! Dolor inventore
          officia repellat excepturi cupiditate magni delectus itaque omnis eligendi provident vel
          animi necessitatibus quam qui autem enim, quo dolorem rem hic voluptates? Tenetur error
          eius nihil placeat suscipit nemo, obcaecati molestias laborum dignissimos nulla numquam
          ducimus perferendis libero, debitis sint eum maiores quia.
        </p>
      </Modal>
    </div>
  );
};

export default Usage;
