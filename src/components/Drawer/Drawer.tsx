import React from 'react';
import DrawerContainer from './DrawerContainer';

interface Props {
  handleClose: () => void;
  drawerIsOpen: boolean;
  width?: string;
}

const Drawer: React.FC<Props> = ({ children, handleClose, drawerIsOpen, width = '40%' }) => (
  <DrawerContainer shouldShowDrawer={drawerIsOpen} closeDrawer={handleClose} width={width}>
    {children}
  </DrawerContainer>
);
export default Drawer;
