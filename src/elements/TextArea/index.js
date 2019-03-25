import styled from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';

const TextArea = styled.textarea`
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  color: ${uiColors('text.main')};
  transition: all ease 300ms;
  background: ${colors.white};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  line-height: 1.4em;
  min-height: 7em;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.75rem 1.125rem;

  &:focus {
    border-bottom: 1px solid ${uiColors('primary.main')};
  }
`;

/** @component */
export default TextArea;
