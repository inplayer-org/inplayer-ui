// @flow
import React, { type Node } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';
import Checkbox from 'components/Checkbox';
import Loader from 'elements/Loader/index';
import Button from 'elements/Button/index';
import Grid from 'blocks/Grid';

const TableWithHeaderSectionContainer = styled(Grid.Container)`
  padding: 1rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 2px;
`;

const TableWrapper = styled.table`
  font-family: Roboto, sans-serif;
  background: ${colors.white};
  width: 100%;
  text-align: left;
  color: ${uiColors('text.light')};
  box-sizing: border-box;
  border: ${ifProp('hasHeaderSection', '0', `1px solid ${colors.gray}`)};
  border-radius: 3px;
  position: relative;
  font-weight: ${fontWeights('light')};
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

const TableRow = styled.tr`
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

const TableCell = styled.td`
  font-size: ${fontSizes('medium')};
  padding: 0.4375rem 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: ${ifProp('isActionsCell', 'right', 'left')};
  font-weight: ${fontWeights('light')};
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  a {
    color: ${colors.fontGray};

    &:hover {
      color: ${colors.fontDarkGray};
    }
  }
`;

const TableHeaderCell = styled.th`
  padding: 1rem 1%;
  font-weight: ${fontWeights('light')};
  font-size: ${fontSizes('small')};
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

const TableCheckbox = styled(Checkbox)`
  label {
    top: -10px;
  }
`;

const TableButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.fontGray};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

interface Data {
  id: string;
}

type Column = {
  title: string,
  key: string,
  render: ({ value: string, rowValues: Data }) => Node,
  style?: Object,
};

type RowActions<T> =
  | Array<{
      icon: string,
      onClick: (id: number | string) => any,
    }>
  | ((props: { row: T }) => Node);

type TableOptions<T> = {
  rowSelection: {
    active: boolean,
    action: (selectedItems: Array<T>) => any,
  },
  rowActions: RowActions<T>,
  headerSection?: Node,
};

type Props<T = Data> = {
  columns: Array<Column>,
  data: Array<T>,
  className?: string,
  style?: Object,
  options?: TableOptions<T>,
  showLoader?: boolean,
  renderEmptyTable?: boolean,
  tableButton?: {
    label: string,
    icon?: string | Node,
    onClick: (e: SyntheticEvent) => any,
    type: string,
  },
};

type State = {
  selected: {
    [number | string]: boolean,
  },
  selectedAll: boolean,
};

const rowActionsExist = (actions: RowActions) =>
  typeof actions === 'function' ||
  (typeof actions === 'object' && Array.isArray(actions) && actions.length);

class Table<T> extends React.Component<Props<T>, State> {
  state = {
    selected: {},
    selectedAll: false,
  };

  toggleRow = (id: number) => () => {
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
    const { rowSelection, rowActions } = options;
    let newData = [...data];

    if (rowSelection && rowSelection.active) {
      const { selected } = this.state;

      newData = data.map(dataCell => ({
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
      newData = newData.map(dataCell => {
        const actionsContent =
          typeof rowActions === 'function'
            ? rowActions({ row: dataCell })
            : rowActions.map(action => action.render({ row: dataCell }));
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
    const { options } = this.props;
    const { rowSelection, rowActions } = options;

    let newColumns = [...columns];

    if (rowSelection && rowSelection.active) {
      const rowCheckbox = {
        title: (
          <TableCheckbox id="toggleAll" checked={selectedAll} onChange={this.toggleSelectAll} />
        ),
        key: 'check',
      };

      newColumns = [rowCheckbox, ...columns];
    }

    if (rowActionsExist(rowActions)) {
      const actionsColumn = { title: 'Actions', key: 'actions', alignRight: true };
      newColumns = [...newColumns, actionsColumn];
    }

    return newColumns;
  };

  renderColumns = (columns: Array<Column>): Array<Node> =>
    this.generateColumns(columns).map((column, index) => (
      <TableHeaderCell key={index} alignRight={column.alignRight}>
        {column.title}
      </TableHeaderCell>
    ));

  renderData = (columns: Array<Column>, data: Array<Data>) => {
    const newColumns = this.generateColumns(columns);
    const newData = this.generateRows(data);

    const { tableButton } = this.props;

    return newData.map(row => (
      <TableRow key={row.id} noBottomBorder={!tableButton}>
        {newColumns.map((column, index) => (
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
    } = this.props;

    if (showLoader) {
      return (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
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

Table.defaultProps = {
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
};

export default Table;
