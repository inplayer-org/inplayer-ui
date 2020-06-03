import styled from 'styled-components';
import colors from '../../theme/colors';

const TabsWrapper = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  text-align: center;

  span {
    padding: 0 1rem;
  }
`;

export default TabsWrapper;
