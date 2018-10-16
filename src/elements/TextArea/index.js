import styled from 'styled-components';
import { uiColors } from 'utils';

const TextArea = styled.textarea`
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${uiColors('fontDarkGray')};
  transition: all ease 300ms;
  background: ${uiColors('white')};
  font-weight: 300;
  border: 1px solid ${uiColors('gray')};
  border-radius: 3px;
  font-size: 15px;
  line-height: 1.4em;
  min-height: 7em;
  min-width: 260px;
  max-width: 560px;
  width: 100%;
  margin: 6px 0;
  padding: 12px 18px;

  &:focus {
    border-bottom: 1px solid ${uiColors('accentBlue')};
  }
`;

/** @component */
export default TextArea;
