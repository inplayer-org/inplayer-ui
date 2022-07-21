import { ButtonHTMLAttributes } from 'react';
import { Form } from 'formik';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { transparentize } from 'polished';
import { IoIosCheckmark } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import colors from '../../theme/colors';
import Checkbox from '../Checkbox';

import Button from '../Button';
import Grid from '../Grid';

const TableWithHeaderSectionContainer = styled(Grid.Container)<any>`
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.background.main};
  box-shadow: 0 0 4px 1px ${transparentize(0.87, colors.fontDarkGray)};
  border-radius: 5px;
`;

const TableWrapper = styled.table<{ hasHeaderSection: boolean }>`
  background: ${({ theme }) => theme.palette.background.main};
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.main};
  box-sizing: border-box;
  border: ${ifProp('hasHeaderSection', '0', `1px solid ${colors.gray}`)};
  border-radius: 5px;
  position: relative;
  font-weight: ${({ theme }) => theme.font.weights.light};
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

export const StyledIcon = styled(FaRegEdit)`
  display: none;
  position: absolute;
  margin-left: 0.5rem;
  cursor: pointer;
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

interface TableCellProps {
  isActionsCell?: boolean;
  isEditableCell?: boolean;
}

const TableCell = styled.td<TableCellProps>`
  ${({ isEditableCell }) => isEditableCell && 'width: 330px'};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  padding: 0.4375rem 1%;
  vertical-align: middle;
  text-align: ${ifProp('isActionsCell', 'right', 'left')};
  font-weight: ${({ theme }) => theme.font.weights.light};
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  a {
    color: ${({ theme }) => theme.palette.text.light};

    &:hover {
      color: ${({ theme }) => theme.palette.text.main};
    }
  }

  &:hover ${StyledIcon} {
    display: inline-block;
  }
`;

const StyledForm = styled(Form)`
  width: 100% !important;
  width: fit-content;
`;

const FormWrapper = styled.div`
  display: flex;
`;

const TableHeaderCell = styled.th<any>`
  padding: 1rem 1%;
  font-weight: ${({ theme }) => theme.font.weights.light};
  font-size: ${({ theme }) => theme.font.sizes.small};
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
  color: ${({ theme }) => theme.palette.text.light};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

interface StyledReactIconProps {
  color: string;
}

export const StyledReactIcon = styled(IoIosCheckmark)<StyledReactIconProps>`
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ color }) => color};
  cursor: pointer;
`;

const ItemEntriesTypography = styled.p`
  color: #475467;
  padding: 12px 32px;
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
  StyledForm,
  FormWrapper,
  ItemEntriesTypography,
};
