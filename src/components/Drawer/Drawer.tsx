import React from 'react';
import DrawerContainer from './DrawerContainer';

interface Props {
  handleClose: () => void;
  isOpen: boolean;
  width?: string;
}

const Drawer: React.FC<Props> = ({ children, handleClose, isOpen, width = '40%' }) => (
  <DrawerContainer shouldShowDrawer={isOpen} closeDrawer={handleClose} width={width}>
    {children}
  </DrawerContainer>
);
export default Drawer;
