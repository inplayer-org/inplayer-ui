import React from 'react';
import DrawerContainer from './DrawerContainer';
import { AnalyticsProps } from '../../analytics';

type Props = {
  handleClose: () => void;
  isOpen: boolean;
  width?: string;
} & AnalyticsProps;

const Drawer: React.FC<Props> = ({ children, handleClose, isOpen, width = '40%' }) => (
  <DrawerContainer shouldShowDrawer={isOpen} closeDrawer={handleClose} width={width}>
    {children}
  </DrawerContainer>
);
export default Drawer;
