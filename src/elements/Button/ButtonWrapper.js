import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { uiColors, fontWeights, fontSizes } from 'utils';
import { switchProp } from 'styled-tools';
import colors from 'config/colors';

const modifiers = {
  hoverBlue: () => `
    &:hover, &:focus {
      color: ${colors.skyBlue};
      border-color: ${colors.skyBlue};
    }
  `,
  hoverRed: () => `
    &:hover, &:focus {
      color: ${colors.red};
      border-color: ${colors.red};
    }
  `,
  hoverGreen: () => `
    &:hover, &:focus {
      color: ${colors.green};
      border-color: ${colors.green};
    }
  `,
  buttonPrimary: () => `
    background: ${colors.lightSkyBlue}
    color: ${colors.blue};
    border-color: ${colors.blue};

    &:hover, &:focus {
      color: ${colors.white};
      background: ${colors.blue};
    }
  `,
  buttonInfo: () => `
    background: ${colors.lightSkyBlue};
    color: ${colors.skyBlue};
    border-color: ${colors.skyBlue};

    &:hover, &:focus {
      color: ${colors.white};
      background: ${colors.skyBlue};
    }
  `,
  buttonWarning: () => `
    color: ${colors.yellow};
    border-color: ${colors.yellow};

    &:hover, &:focus {
      color: ${colors.white};
      background: ${colors.yellow};
      border-color: ${colors.yellow};
    }
  `,
  buttonDanger: () => `
    color: ${colors.red};
    border-color: ${colors.red};

    &:hover, &:focus {
      color: ${colors.red};
      background: ${colors.pink};
      border-color: ${colors.red};
    }
  `,
  buttonSuccess: () => `
    color: ${colors.green};
    border-color: ${colors.green};

    &:hover, &:focus {
      color: ${colors.white};
      background: ${colors.green};
      border-color: ${colors.green};
    }
  `,
};

const ButtonWrapper = styled.button`
  display: flex;
  background: ${colors.white};
  align-items: center;
  color: ${uiColors('text.main')};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  justify-content: center;
  outline: none;
  transition: all ease 300ms;
  cursor: pointer;
  vertical-align: middle;
  letter-spacing: 0.015em;
  line-height: 1;

  &:hover {
    border-color: ${uiColors('primary.main')};
    color: ${uiColors('primary.main')};
  }

  span {
    padding: 0.2rem;
  }

  ${switchProp('size', {
    xs: css`
      font-size: ${fontSizes('extraSmall')};
      padding: 3px 4px;
    `,
    sm: css`
      font-size: ${fontSizes('small')};
      padding: 6px 8px;
    `,
    md: css`
      font-size: ${fontSizes('medium')};
      padding: 9px 12px;
    `,
    lg: css`
      font-size: ${fontSizes('large')};
      padding: 12px 16px;
    `,
  })};
  ${applyStyleModifiers(modifiers)};
`;

ButtonWrapper.defaultProps = {
  size: 'md',
};

/** @component */
export default ButtonWrapper;
