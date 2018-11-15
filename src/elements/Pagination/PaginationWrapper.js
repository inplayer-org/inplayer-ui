// @flow
import styled from 'styled-components';

const PaginationWrapper = styled.div`
  border: 1px solid #d7dde5;
  border-radius: 3px;
  background: #fff;
  font-size: 14px;
  position: relative;
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;

  ul {
    padding-inline-start: 0;
    margin: 0;
  }

  li {
    padding: 5px 8px 6px;
    color: #a0a3aa;
    text-decoration: none;
    display: inline-block;

    .previous {
      a {
        &::before {
          content: '⟵';
          padding-right: 8px;
          position: relative;
          top: -1px;
          left: 0;
          transition: ease all 200ms;
        }
      }
    }
  }
`;

export default PaginationWrapper;
