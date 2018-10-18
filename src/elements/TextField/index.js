import styled from 'styled-components';
import { uiColors } from 'utils';

const TextField = styled.input`
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
  padding: 10px 18px 11px;
  border-radius: 3px;
  font-size: 15px;
  line-height: 1;
  min-width: 260px;
  max-width: 560px;
  width: 100%;
  margin: 6px 0;

  &:focus {
    border-bottom: 1px solid ${uiColors('accentBlue')};
  }
`;

/** @component */
export default TextField;
