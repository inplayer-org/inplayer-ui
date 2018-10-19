import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import colors from 'config/colors';
import { uiColors } from 'utils';

const modifiers = {
  hoverDisabled: () => `
        &:hover {
            color: ${uiColors('text.disabled')};
            cursor: default;
        }
    `,
};

const Label = styled.label`
  text-decoration: none;
  font-weight: 300;
  cursor: pointer;
  vertical-align: middle;
  color: ${uiColors('text.main')};
  transition: all ease 300ms;
  line-height: 20px;
  margin: 0 20px 0 -14px;
  left: 24px;
  position: relative;

  &:hover {
    color: ${uiColors('text.light')};
  }

  &:disabled {
    color: ${uiColors('text.disabled')};
    cursor: default;
  }

  ${applyStyleModifiers(modifiers)};
`;

export default Label;
