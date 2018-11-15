// @flow
import styled from 'styled-components';

import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';

const PaginationWrapper = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.white};
  font-size: ${fontSizes('small')};
  position: relative;
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;

  ul {
    padding-inline-start: 0;
    margin: 0;
    font-weight: ${fontWeights('light')};
  }

  li {
    color: ${uiColors('text.light')};
    text-decoration: none;
    display: inline-block;

    a {
      padding: 1px 8px 1px;

      &:focus {
        outline: none;
      }
    }

    &.previous {
      border-right: 1px solid ${colors.gray};

      a {
        color: ${uiColors('text.light')};
        padding: 1px 16px 1px;

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

    &.next {
      border-left: 1px solid ${colors.gray};

      a {
        color: ${uiColors('text.light')};
        padding: 1px 16px 1px;

        &::after {
          content: '⟶';
          padding-left: 8px;
          position: relative;
          top: -1px;
          right: 0;
          transition: ease all 200ms;
        }
      }
    }

    &.previous:hover {
      background: ${colors.lightGray};

      a {
        color: ${uiColors('text.main')};

        &::before {
          left: -3px;
        }
      }
    }

    &.next:hover {
      background: ${colors.lightGray};

      a {
        color: ${uiColors('text.main')};

        &::after {
          right: -3px;
        }
      }
    }

    &:hover {
      color: ${uiColors('text.main')};
      background: ${colors.lightGray};
    }
  }

  li.selected {
    background: ${uiColors('primary.main')};
    font-weight: ${fontWeights('semibold')};
    color: ${colors.white};
    pointer-events: none;
  }
`;

export default PaginationWrapper;
