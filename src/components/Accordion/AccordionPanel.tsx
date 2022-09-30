import React, { SyntheticEvent, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { ifProp, ifNotProp, prop } from 'styled-tools';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import {
  AnalyticsComponent,
  AnalyticsProps,
  AnalyticsEvents,
  AnalyticsComponentType,
} from '../../analytics';

// Components
import colors from '../../theme/colors';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';
import Typography from '../Typography';

// Types
type AccordionPanelContainerProps = {
  isActive: boolean;
  contentHeight: string;
};

type AccordionPanelHeaderProps = {
  isActive: boolean;
  disabled: boolean;
  onClick: any;
} & AnalyticsProps;

type AccordionTitleProps = {
  isActive: boolean;
  disabled: boolean;
};

type AccordionIconHolderProps = {
  isAccordionDisabled: boolean;
};

const AccordionPanelContainer = styled.div<AccordionPanelContainerProps>`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: ${({ theme }) => theme.palette.background.main};
  transition: ease 500ms height;
  ${ifProp(
    'isActive',
    css`
      position: absolute;
      ${({ contentHeight }: AccordionPanelContainerProps) =>
        contentHeight && `height: calc(${contentHeight} - 11rem)`};
      top: 0;
      z-index: 30;
      border-bottom: none;
      overflow: auto;
      margin-top: 3.5rem;
      display: block;
    `,
    css`
      height: 0;
    `
  )}
`;

const AccordionPanelHeader = styled.header<AccordionPanelHeaderProps>`
  margin: 0;
  padding: 1rem 3%;
  width: 100%;
  box-sizing: border-box;
  background: ${ifProp('disabled', colors.gray, prop('theme.palette.background.main'))};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${ifProp(
    'isActive',
    css`
      position: absolute;
      top: 0;
    `
  )}
`;

const AccordionTitle = styled(Typography)<AccordionTitleProps>`
  font-weight: ${({ theme }) => theme.font.weights.thin};
  color: ${({ theme, disabled }) => (disabled ? colors.fontLightGray : theme.font.weights.thin)};
  margin: 0;
  display: inline;
`;

const createIconStyles = () => ({
  color: colors.fontGray,
  'margin-left': 'auto',
});

const StyledAngleDown = styled(FaAngleDown)`
  ${createIconStyles}
`;

const StyledAngleUp = styled(FaAngleUp)`
  ${createIconStyles}
`;

const AccordionPanelDetails = styled.div`
  color: ${({ theme }) => theme.palette.text.main};
  padding: 0;
  height: 100%;
`;

const AccordionIconHolder = styled.div<AccordionIconHolderProps>`
  ${ifNotProp(
    'isAccordionDisabled',
    css`
      display: flex;
      width: 3rem;
      justify-content: space-between;
    `
  )}
`;

type Props = {
  label: string;
  isActive: boolean;
  isOtherPanelActive: boolean;
  icon?: ReactElement | null;
  iconTooltip?: TooltipProps;
  contentHeight: string;
  togglePanel: (e?: SyntheticEvent<Element, Event>) => void;
  renderContent: (actions: { closePanel: (e?: SyntheticEvent) => void }) => any;
  closePanel: (e?: SyntheticEvent) => void;
  disabled: boolean;
} & AnalyticsProps;

const AccordionPanel = ({
  label,
  isActive,
  isOtherPanelActive,
  icon,
  iconTooltip,
  renderContent,
  contentHeight,
  disabled,
  togglePanel,
  closePanel,
  tag = '',
}: Props) => (
  <>
    <AnalyticsComponent>
      {({ pages, tracker, merchantId, ip }) => (
        <AccordionPanelHeader
          disabled={disabled}
          onClick={(e: SyntheticEvent<Element, Event>) => {
            if (!disabled) {
              togglePanel(e);
              if (tag && !isActive) {
                tracker.track({
                  event: AnalyticsEvents.CLICK,
                  type: AnalyticsComponentType.ACCORDION,
                  tag,
                  pages,
                  merchantId,
                  ip,
                });
              }
            }
          }}
          isActive={isActive}
          tag={tag}
        >
          <AccordionTitle variant="h6" isActive={isActive} disabled={disabled}>
            {label}
          </AccordionTitle>
          <AccordionIconHolder isAccordionDisabled={disabled}>
            {!isOtherPanelActive &&
              (iconTooltip ? <Tooltip {...iconTooltip}>{icon}</Tooltip> : icon)}
            {!disabled && (isActive ? <StyledAngleUp /> : <StyledAngleDown />)}
          </AccordionIconHolder>
        </AccordionPanelHeader>
      )}
    </AnalyticsComponent>
    <AccordionPanelContainer isActive={isActive} contentHeight={contentHeight}>
      <AccordionPanelDetails>{isActive && renderContent({ closePanel })}</AccordionPanelDetails>
    </AccordionPanelContainer>
  </>
);

export default AccordionPanel;
