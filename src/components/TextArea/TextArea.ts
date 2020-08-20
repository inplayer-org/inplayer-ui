import styled from 'styled-components';

import colors from '../../theme/colors';

const TextArea = styled.textarea`
  vertical-align: middle;
  box-sizing: border-box;
  overflow: hidden;
  outline: none;
  color: ${({ theme }) => theme.palette.text.main};
  transition: all ease 300ms;
  background: ${({ theme }) => theme.palette.background.main};
  font-weight: ${({ theme }) => theme.font.weights.light};
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.4em;
  min-height: 7em;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.75rem 1.125rem;

  &:focus {
    border-bottom: 1px solid ${colors.skyBlue};
  }
`;
export default TextArea;
