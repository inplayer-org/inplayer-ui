import { ButtonHTMLAttributes } from 'react';
import Checkbox from 'components/Checkbox';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'theme/colors';
import { fontSizes, fontWeights } from 'utils';
import Button from 'elements/Button';
import Grid from 'blocks/Grid';

const TableWithHeaderSectionContainer = styled(Grid.Container)<any>`
  padding: 1rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 2px;
`;

const TableWrapper = styled.table<{ hasHeaderSection: boolean }>`
  font-family: Roboto, sans-serif;
  background: ${colors.white};
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.light};
  box-sizing: border-box;
  border: ${ifProp('hasHeaderSection', '0', `1px solid ${colors.gray}`)};
  border-radius: 3px;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weights.light}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-collapse: collapse;
  table-layout: auto;

  @media (max-width: 960px) {
    table-layout: fixed;
  }
`;

const TableHeadRow = styled.tr`
  border-bottom: 1px solid ${colors.gray};
  width: 100%;
`;

const TableRow = styled.tr<{ noBottomBorder?: boolean }>`
  border-bottom: 1px solid ${colors.lightGray};
  width: 100%;
  ${({ noBottomBorder }) =>
    noBottomBorder &&
    css`
      &:last-child {
        border-bottom: none;
      }
    `}
`;

const ButtonTableRow = styled(TableRow)`
  background: ${colors.lightGray};
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  border-top: 1px solid ${colors.gray};
`;

const TableCell = styled.td<{ isActionsCell?: boolean }>`
  font-size:${({ theme }) => theme.font.sizes.medium};
  padding: 0.4375rem 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: ${ifProp('isActionsCell', 'right', 'left')};
  font-weight: ${({ theme }) => theme.font.weights.light}
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  a {
    color: ${({ theme }) => theme.palette.text.light}

    &:hover {
      color: ${({ theme }) => theme.palette.text.main};
    }
  }
`;

const TableHeaderCell = styled.th<any>`
  padding: 1rem 1%;
  font-weight: ${({ theme }) => theme.font.weights.light}
  font-size:${({ theme }) => theme.font.sizes.small};
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
  white-space: normal;
`;

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableCheckbox = styled(Checkbox)<any>`
  label {
    top: -10px;
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & any;

const TableButton = styled(Button)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.text.light}

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export {
  TableWithHeaderSectionContainer,
  TableWrapper,
  TableHeadRow,
  ButtonTableRow,
  TableRow,
  TableCell,
  TableHeaderCell,
  LoaderContainer,
  TableCheckbox,
  TableButton,
};
