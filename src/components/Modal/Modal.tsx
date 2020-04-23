import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';

import colors from 'theme/colors';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

interface ModalProps {
  /**
   * Modal state
   */
  isModalOpen: boolean;
  /**
   * Close modal
   */
  closeModal: () => any;
  children: ReactChild;
  /**
   * Modal title
   */
  title: string;
  /**
   * External CSS class name
   */
  className?: string;
  /**
   * Inline CSS
   */
  style?: any;
}

interface ModalWrapperProps {
  isOpen: boolean;
}

const ModalWrapper = styled.div<ModalWrapperProps>`
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
  border-radius: 3px;
  margin: auto;
`;

const Modal = ({
  isModalOpen,
  closeModal,
  children,
  title,
  className = '',
  style = {},
}: ModalProps) => (
  <ModalWrapper isOpen={isModalOpen} onClick={isModalOpen ? closeModal : undefined}>
    <ModalContainer className={className} style={style} onClick={(e) => e.stopPropagation()}>
      <ModalHeader closeModal={closeModal}>{title}</ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  </ModalWrapper>
);

export default Modal;
