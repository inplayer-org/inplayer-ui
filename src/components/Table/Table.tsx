import 'react-dates/initialize';
import React, { ReactNode, SyntheticEvent, Component } from 'react';
import styled, { CSSProperties } from 'styled-components';
import Grid from '../Grid';
import Loader from '../Loader';
import { tableSkeleton } from '../../modifiers';

import {
  ButtonTableRow,
  LoaderContainer,
  TableButton,
  TableCell,
  TableRow,
  TableCheckbox,
  TableHeadRow,
  TableHeaderCell,
  TableWithHeaderSectionContainer,
  TableWrapper,
} from './styled';

const TableSkeleton = () => (
  <table>
    <thead>
      {[...Array(4)].map((_, index) => (
        <th key={index}>{index}</th>
      ))}
    </thead>
    <tbody>
      {[...Array(15)].map((_, index) => (
        <tr key={index}>
          {[0].map((_, i) => (
            <td key={i}>{i}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
const TableSkeletonWrapper = styled.div`
  ${tableSkeleton()}
`;

interface Data {
  id: string;
  [row: string]: any;
}

type Render = {
  value: string;
  rowValues: Data;
};

type Column = {
  title: string;
  key: string;
  render: ({ value, rowValues }: Render) => ReactNode;
  style?: CSSProperties;
  alignRight?: any;
};

type RowActions<T> =
  | Array<{
      icon: string | Node;
      onClick: (id: number | string) => any;
      render?: any;
    }>
  | ((props: { row: T }) => Node);

type TableOptions<T> = {
  rowSelection: {
    active: boolean;
    action: (selectedItems: Array<T>) => any;
  };
  rowActions: RowActions<Data>;
  headerSection?: Node;
};

// eslint-disable-next-line @typescript-eslint/no-use-before-define
type Props<T = Data> = {
  columns: Array<Column> | any;
  data: Array<any>;
  className?: string;
  style?: CSSProperties;
  options: TableOptions<T>;
  showLoader?: boolean;
  renderEmptyTable?: boolean;
  tableButton?: {
    label: string;
    icon?: string | Node;
    onClick: (e: SyntheticEvent) => any;
    type: string;
  };
  actionsRowTitle?: string;
  isLoading?: boolean;
};

type State = {
  selected: {
    [key in number | string]: any;
  };
  selectedAll: boolean;
};

const rowActionsExist = (actions: RowActions<any>) =>
  typeof actions === 'function' ||
  (typeof actions === 'object' && Array.isArray(actions) && actions.length);

class Table<T> extends Component<Props<T>, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    className: '',
    style: {},
    options: {
      rowSelection: {
        active: false,
      },
      rowActions: [],
      headerSection: undefined,
    },
    showLoader: false,
    renderEmptyTable: false,
    tableButton: null,
    actionsRowTitle: 'Actions',
  };

  state: State = {
    selected: {},
    selectedAll: false,
  };

  toggleRow = (id: number | string) => () => {
    const { selected } = this.state;
    const isSelected = !selected[id];
    const newSelected = {
      ...selected,
      [id]: isSelected,
    };

    this.setState(({ selectedAll }) => ({
      selected: newSelected,
      selectedAll: !isSelected ? false : selectedAll,
    }));
  };

  toggleSelectAll = () => {
    const { selectedAll } = this.state;
    const { data } = this.props;
    const selected = data.reduce((acc, current) => ({ ...acc, [current.id]: !selectedAll }), {});

    this.setState(({ selectedAll: prevSelectedAll }) => ({
      selected,
      selectedAll: !prevSelectedAll,
    }));
  };

  generateRows = (data: Array<Data>) => {
    const { options } = this.props;
    const { rowSelection, rowActions }: TableOptions<T> = options;
    let newData = [...data];

    if (rowSelection && rowSelection.active) {
      const { selected } = this.state;

      newData = data.map((dataCell): any => ({
        ...dataCell,
        check: (
          <TableCheckbox
            id={dataCell.id}
            checked={selected[dataCell.id]}
            onChange={this.toggleRow(dataCell.id)}
          />
        ),
      }));
    }

    if (rowActionsExist(rowActions)) {
      newData = newData.map((dataCell) => {
        const actionsContent =
          typeof rowActions === 'function'
            ? rowActions({ row: dataCell })
            : rowActions.map((action) => {
                if (!action.render) return;

                return action.render({ row: dataCell });
              });

        return {
          ...dataCell,
          actions: actionsContent,
        };
      });
    }

    return newData;
  };

  generateColumns = (columns: Array<Column>) => {
    const { selectedAll } = this.state;
    const { options, actionsRowTitle } = this.props;
    const { rowSelection, rowActions } = options;

    let newColumns: any = [...columns];

    if (rowSelection && rowSelection.active) {
      const rowCheckbox: any = {
        title: (
          <TableCheckbox id="toggleAll" checked={selectedAll} onChange={this.toggleSelectAll} />
        ),
        key: 'check',
      };

      newColumns = [rowCheckbox, ...columns];
    }

    if (rowActionsExist(rowActions)) {
      const actionsColumn = {
        title: actionsRowTitle,
        key: 'actions',
        alignRight: true,
      };
      newColumns = [...newColumns, actionsColumn];
    }

    return newColumns;
  };

  renderColumns = (columns: Array<Column>): Array<JSX.Element> =>
    this.generateColumns(columns).map((column: Column, index: number) => (
      <TableHeaderCell key={index} alignRight={column.alignRight}>
        {column.title}
      </TableHeaderCell>
    ));

  renderData = (columns: Array<Column>, data: Array<Data>) => {
    const newColumns = this.generateColumns(columns);
    const newData = this.generateRows(data);

    const { tableButton } = this.props;

    return newData.map((row) => (
      <TableRow key={row.id} noBottomBorder={!tableButton}>
        {newColumns.map((column: Column, index: number) => (
          <TableCell
            key={index}
            isActionsCell={column.key === 'actions'}
            style={column.style || {}}
          >
            {column.render
              ? column.render({ value: row[column.key], rowValues: row })
              : row[column.key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  renderTable = () => {
    const {
      columns,
      data,
      className,
      style,
      showLoader,
      renderEmptyTable,
      tableButton,
      options: { headerSection },
      isLoading = false,
    } = this.props;

    if (showLoader) {
      return (
        <TableSkeletonWrapper>
          <TableSkeleton />
        </TableSkeletonWrapper>
      );
    }

    if (!data.length && !renderEmptyTable) {
      return null;
    }

    const columnContent = this.renderColumns(columns);

    const hasHeaderSection = typeof headerSection !== 'undefined';

    return (
      <TableWrapper className={className} style={style} hasHeaderSection={hasHeaderSection}>
        <thead>
          <TableHeadRow>{columnContent}</TableHeadRow>
        </thead>
        <tbody>{this.renderData(columns, data)}</tbody>
        <tfoot>
          {tableButton && (
            <ButtonTableRow>
              <TableCell colSpan={columnContent.length}>
                <TableButton
                  modifiers={['buttonLink']}
                  fullWidth
                  fullHeight
                  onClick={tableButton.onClick}
                  icon={tableButton.icon}
                  iconPosition="left"
                  type={tableButton.type}
                >
                  {tableButton.label}
                </TableButton>
              </TableCell>
            </ButtonTableRow>
          )}
        </tfoot>
      </TableWrapper>
    );
  };

  renderTableWithHeaderSection = () => {
    const {
      options: { headerSection },
    } = this.props;

    return (
      <TableWithHeaderSectionContainer columns={1}>
        <Grid.Cell>{headerSection}</Grid.Cell>
        <Grid.Cell>{this.renderTable()}</Grid.Cell>
      </TableWithHeaderSectionContainer>
    );
  };

  render() {
    const {
      options: { headerSection },
    } = this.props;

    if (!headerSection) return this.renderTable();

    return this.renderTableWithHeaderSection();
  }
}

export default Table;
