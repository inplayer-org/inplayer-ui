import React, { SyntheticEvent, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import colors from 'theme/colors';
import { ifProp, ifNotProp } from 'styled-tools';


// Components
import Tooltip, { Props as TooltipProps } from 'components/Tooltip/Tooltip';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
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
};

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
  background: ${colors.white};
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
  background: ${ifProp('disabled', colors.lightGray, colors.white)};
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
  font-weight: ${({ theme }) => theme.font.weights.thin}
  color: ${ifProp('disabled', colors.fontLightGray, colors.fontDarkGray)};
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
  padding: 0;
  height: 100%;
`;

const AccordionIconHolder = styled.div<AccordionIconHolderProps>`
  ${ifNotProp(
    'isAccordionDisabled',
    css`
      display: flex;
      width: 3rem;
      justify-content: space-beetween;
    `
  )}
`;

type Props = {
  label: string;
  isActive: boolean;
  isOtherPanelActive: boolean;
  icon?: ReactNode | null;
  iconTooltip?: TooltipProps;
  contentHeight: string;
  togglePanel: (e?: SyntheticEvent<Element, Event>) => void;
  renderContent: (actions: { closePanel: (e?: SyntheticEvent) => void }) => any;
  closePanel: (e?: SyntheticEvent) => void;
  disabled: boolean;
};

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
}: Props) => (
  <>
    <AccordionPanelHeader
      disabled={disabled}
      onClick={!disabled ? togglePanel : null}
      isActive={isActive}
    >
      <AccordionTitle variant="h6" isActive={isActive} disabled={disabled}>
        {label}
      </AccordionTitle>
      <AccordionIconHolder isAccordionDisabled={disabled}>
        {!isOtherPanelActive && (iconTooltip ? <Tooltip {...iconTooltip}>{icon}</Tooltip> : icon)}
        {!disabled && (isActive ? <StyledAngleUp /> : <StyledAngleDown />)}
      </AccordionIconHolder>
    </AccordionPanelHeader>
    <AccordionPanelContainer isActive={isActive} contentHeight={contentHeight}>
      <AccordionPanelDetails>{isActive && renderContent({ closePanel })}</AccordionPanelDetails>
    </AccordionPanelContainer>
  </>
);

export default AccordionPanel;
