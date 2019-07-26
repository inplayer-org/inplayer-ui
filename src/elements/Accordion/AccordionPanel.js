// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import colors from 'config/colors';
import { ifProp } from 'styled-tools';
import { uiColors, fontWeights } from 'utils';

// Components
import Icon from 'elements/Icon';
import Typography from 'elements/Typography';
import Tooltip, { Props as TooltipProps } from 'components/Tooltip';

const AccordionPanelContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
  background: ${colors.white};
  transition: ease 500ms height;
  display: none;
  ${ifProp(
    'isActive',
    css`
      position: absolute;
      ${({ contentHeight }) => contentHeight && `height: calc(${contentHeight} - 15.5rem)`};
      top: 0;
      z-index: 30;
      border-bottom: none;
      overflow: auto;
      margin-top: 3.5rem;
      display: block;
    `
  )};
`;

const AccordionPanelHeader = styled.header`
  margin: 0;
  padding: 1rem 3%;
  width: 100%;
  box-sizing: border-box;
  background: ${ifProp('disabled', colors.lightGray, colors.white)};
  cursor: ${({ disabled, isActive }) => (disabled || isActive ? 'default' : 'pointer')};
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
  )};
`;

const AccordionTitle = styled(Typography)`
  font-weight: ${fontWeights('thin')};
  color: ${ifProp('disabled', uiColors('text.disabled'), uiColors('text.main'))};
  margin: 0;
  display: inline;
`;

const AccordionIcon = styled(Icon)`
  color: ${uiColors('primary.main')};
  ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')}
`;

const AccordionPanelDetails = styled.div`
  padding: 2rem 6%;
`;

type Props = {
  label: string,
  isActive: boolean,
  isOtherPanelActive: boolean,
  icon?: string,
  iconTooltip?: TooltipProps,
  contentHeight: string,
  openPanel: (name: string) => boolean,
  renderContent: () => any,
  disabled: boolean,
};

const AccordionPanel = ({
  openPanel,
  label,
  isActive,
  isOtherPanelActive,
  icon,
  iconTooltip,
  renderContent,
  contentHeight,
  disabled,
}: Props) => (
  <>
    <AccordionPanelHeader
      disabled={disabled}
      onClick={!disabled ? openPanel : null}
      isActive={isActive}
    >
      <AccordionTitle variant="h6" isActive={isActive} disabled={disabled}>
        {label}
      </AccordionTitle>
      {!isOtherPanelActive &&
        (iconTooltip ? (
          <Tooltip {...iconTooltip}>
            <AccordionIcon name={icon} pointer />
          </Tooltip>
        ) : (
          <AccordionIcon name={icon} />
        ))}
    </AccordionPanelHeader>
    <AccordionPanelContainer isActive={isActive} contentHeight={contentHeight}>
      <AccordionPanelDetails>{isActive && renderContent()}</AccordionPanelDetails>
    </AccordionPanelContainer>
  </>
);

AccordionPanel.defaultProps = {
  icon: '',
  iconTooltip: null,
};

export default AccordionPanel;
