import React, { useRef, useEffect } from 'react';
import { CloseSection, StyledIcon, SideDrawer } from './styles';

interface Props {
  shouldShowDrawer: boolean;
  closeDrawer: (event: any) => void;
  width: string;
}

const DrawerContainer: React.FC<Props> = ({ shouldShowDrawer, children, closeDrawer, width }) => {
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: { target: any }) => {
      // if inside drawer
      if (!reference.current || reference.current.contains(event.target)) {
        return;
      }

      closeDrawer(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [reference, closeDrawer]);

  return (
    <>
      <SideDrawer isOpen={shouldShowDrawer} ref={reference} width={width}>
        <CloseSection>
          <StyledIcon onClick={closeDrawer} />
        </CloseSection>
        {children}
      </SideDrawer>
    </>
  );
};

export default DrawerContainer;
