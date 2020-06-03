import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';

import colors from '../../theme/colors';

import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';

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
  overflow-y: scroll;
`;

const ModalContainer = styled.div<{ isOverflowVisible?: boolean }>`
  background: ${colors.white};
  width: 72%;
  max-width: 980px;
  border-radius: 3px;
  margin: auto;
  overflow: ${({ isOverflowVisible }) => (isOverflowVisible ? 'visible;' : 'hidden;')};
`;

type Props = {
  /**
   * Modal state
   */
  isModalOpen: boolean;
  /**
   * Close modal
   */
  closeModal: () => any;
  /**
   * Modal title
   */
  title: string;
  /**
   * Modal overflow
   */
  isOverflowVisible?: boolean;
  /**
   * External class name
   */
  className?: string;
  children: ReactChild;
};

const Modal = ({
  isOverflowVisible = false,
  isModalOpen,
  closeModal,
  children,
  title,
  className = '',
}: Props) => (
  <ModalWrapper
    className={className}
    isOpen={isModalOpen}
    onClick={isModalOpen ? closeModal : undefined}
  >
    <ModalContainer isOverflowVisible={isOverflowVisible} onClick={(e) => e.stopPropagation()}>
      <ModalHeader closeModal={closeModal}>{title}</ModalHeader>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  </ModalWrapper>
);

export default Modal;
