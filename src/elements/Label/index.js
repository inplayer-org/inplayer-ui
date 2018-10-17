import styled from 'styled-components';
import { uiColors } from 'utils';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifiers = {
  hoverDisabled: () => `
        &:hover {
            color: ${uiColors('fontLightGray')};
            cursor: default;
        }
    `,
};

const Label = styled.label`
  text-decoration: none;
  font-weight: 300;
  cursor: pointer;
  vertical-align: middle;
  color: ${uiColors('fontGray')};
  transition: all ease 300ms;
  line-height: 20px;
  margin: 0 20px 0 -14px;
  left: 24px;
  position: relative;

  &:hover {
    color: ${uiColors('fontDarkGray')};
  }

  &:disabled {
    color: ${uiColors('fontLightGray')};
    cursor: default;
  }

  ${applyStyleModifiers(modifiers)};
`;

export default Label;
