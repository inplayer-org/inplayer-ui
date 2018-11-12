// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';
import { transparentize } from 'polished';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

type Props = {
  isModalOpen: boolean,
  closeModal: Function,
  children: Node,
  title: string,
};

const ModalWrapper = styled.div`
  display: ${ifProp('isOpen', 'flex', 'none')};
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: ${transparentize(0.28, colors.black)};
`;

const ModalContainer = styled.div`
  background: ${colors.white};
  width: 72%;
  max-width: 980px;
  transition-duration: 4s;
  transition-timing-function: linear;
  border-radius: 3px;
  margin: auto;
`;

const Modal = ({ isModalOpen, closeModal, children, title }: Props) => (
  <ModalWrapper isOpen={isModalOpen} onClick={isModalOpen ? closeModal : undefined}>
    <ModalContainer onClick={e => e.stopPropagation()}>
      <ModalHeader closeModal={closeModal}>{title}</ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  </ModalWrapper>
);

export default Modal;
