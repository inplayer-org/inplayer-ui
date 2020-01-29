// @flow
import styled from 'styled-components';

import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';

const PaginationWrapper = styled.div`
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.white};
  font-size: ${fontSizes('small')};
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  vertical-align: top;
  cursor: pointer;
  display: inline-flex;
  margin: 1rem auto;

  ul {
    padding-inline-start: 0;
    margin: 0;
    font-weight: ${fontWeights('light')};
  }

  li {
    text-decoration: none;
    display: inline-flex;

    a {
      color: ${uiColors('text.light')};
      padding: 0.0625rem 1rem 0.0625rem;

      &:focus {
        outline: none;
      }
    }

    &.selected {
      background: ${uiColors('primary.main')};
      pointer-events: none;

      a {
        font-weight: ${fontWeights('semibold')};
        color: ${colors.white};
      }
    }

    &.disabled {
      color: ${uiColors('text.disabled')};

      a {
        color: ${uiColors('text.disabled')} !important;
      }
    }

    &.previous {
      border-right: 1px solid ${colors.gray};

      a {
        color: ${uiColors('text.light')};
        padding: 0.0625rem 1rem 0.0625rem;

        &::before {
          content: '⟵';
          padding-right: 0.5rem;
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
        padding: 0.0625rem 1rem 0.0625rem;

        &::after {
          content: '⟶';
          padding-left: 0.5rem;
          position: relative;
          top: -1px;
          right: 0;
          transition: ease all 200ms;
        }
      }
    }

    &.previous:hover:not(.disabled) {
      background: ${colors.lightGray};

      a {
        color: ${uiColors('text.main')};

        &::before {
          left: -3px;
        }
      }
    }

    &.next:hover:not(.disabled) {
      background: ${colors.lightGray};

      a {
        color: ${uiColors('text.main')};

        &::after {
          right: -3px;
        }
      }
    }

    &:hover:not(.disabled) {
      color: ${uiColors('text.main')};
      background: ${colors.lightGray};
    }
  }
`;

export default PaginationWrapper;
