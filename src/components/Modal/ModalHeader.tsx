import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { AnalyticsComponent, AnalyticsEvents, AnalyticsComponentType } from '../../analytics';

import colors from '../../theme/colors';
import Typography from '../Typography';

interface Props {
  children: ReactChild;
  closeModal: () => any;
}

const HeaderWrapper = styled.div`
  padding: 1.25rem;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid ${colors.gray};
`;

const Title = styled(Typography)`
  margin: 0;
`;

const IconClose = styled.span`
  position: absolute;
  height: 1.125rem;
  width: 1.125rem;
  top: 0.625rem;
  right: 0.625rem;
  cursor: pointer;

  &::before {
    content: '✕';
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const ModalHeader = ({ children, closeModal }: Props) => (
  <HeaderWrapper>
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <>
          <Title variant="h4">{children}</Title>
          <IconClose
            onClick={() => {
              tracker.track({
                event: AnalyticsEvents.CLICK,
                type: AnalyticsComponentType.MODAL,
                tag: 'icon_close',
                pages,
                merchantId,
                ip,
              });
              closeModal();
            }}
          />
        </>
      )}
    </AnalyticsComponent>
  </HeaderWrapper>
);

export default ModalHeader;
