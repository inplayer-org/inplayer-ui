import styled from 'styled-components';
import { uiColors, fontWeights, fontSizes } from 'utils';
import colors from 'config/colors';

const TextField = styled.input`
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${uiColors('text.main')};
  transition: all ease 300ms;
  background: ${colors.white};
  font-weight: ${fontWeights('light')};
  border: 1px solid ${colors.gray};
  padding: 10px 18px 11px;
  border-radius: 3px;
  font-size: ${fontSizes('medium')};
  line-height: 1;
  min-width: 260px;
  max-width: 560px;
  width: 100%;
  margin: 6px 0;

  &:focus {
    border-bottom: 1px solid ${uiColors('primary.main')};
  }
`;

/** @component */
export default TextField;
