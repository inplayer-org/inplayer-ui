// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';
import Checkbox from 'components/Checkbox';
import Icon from 'elements/Icon';
import Loader from 'elements/Loader/index';

const TableWrapper = styled.table`
  font-family: Roboto, sans-serif;
  background: ${colors.white};
  width: 100%;
  text-align: left;
  color: ${uiColors('text.light')};
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  position: relative;
  overflow-x: hidden;
  font-weight: ${fontWeights('light')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const TableHeadRow = styled.tr`
  border-bottom: 1px solid ${colors.gray};
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.lightGray};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  font-size: ${fontSizes('medium')};
  padding: 7px 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: left;
  max-width: 450px;
  font-weight: ${fontWeights('light')};
`;

const TableHeaderCell = styled.th`
  padding: 16px 1%;
  font-weight: ${fontWeights('light')};
  font-size: ${fontSizes('small')};
  text-align: left;
  max-width: 450px;
`;

const ActionIcon = styled(Icon)`
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${uiColors('primary.main')};
  }
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

type Data = Object;

type Column = {
  title: string,
  key: string,
  render: ({ value: string, rowValues: Data }) => Node,
};

type RowAction = {
  icon: string,
  onClick: (id: number | string) => any,
};

type TableOptions = {
  rowSelection: {
    active: boolean,
    action: (selectedItems: Array<Data>) => any,
  },
  rowActions: Array<RowAction>,
};

type Props = {
  columns: Array<Column>,
  data: Array<Data>,
  className?: string,
  style?: Object,
  options?: TableOptions,
  showLoader?: boolean,
};

type State = {
  selected: {
    [number | string]: boolean,
  },
  selectedAll: boolean,
};

class Table extends React.Component<Props, State> {
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

    if (rowActions && rowActions.length) {
      newData = newData.map(dataCell => ({
        ...dataCell,
        actions: rowActions.map((action, index) => (
          <ActionIcon key={index} name={action.icon} onClick={() => action.onClick(dataCell.id)} />
        )),
      }));
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

    if (rowActions && rowActions.length) {
      const actionsColumn = { title: 'Actions', key: 'actions' };
      newColumns = [...newColumns, actionsColumn];
    }

    return newColumns;
  };

  renderColumns = (columns: Array<Column>): Array<Node> =>
    this.generateColumns(columns).map((column, index) => (
      <TableHeaderCell key={index}>{column.title}</TableHeaderCell>
    ));

  renderData = (columns: Array<Column>, data: Array<Data>) => {
    const newColumns = this.generateColumns(columns);
    const newData = this.generateRows(data);

    return newData.map(row => (
      <TableRow key={row.id}>
        {newColumns.map((column, index) => (
          <TableCell key={index}>
            {column.render
              ? column.render({ value: row[column.key], rowValues: row })
              : row[column.key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  render() {
    const { columns, data, className, style, showLoader } = this.props;
    return (
      <TableWrapper className={className} style={style}>
        {showLoader ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <thead>
              <TableHeadRow>{this.renderColumns(columns)}</TableHeadRow>
            </thead>
            <tbody>{this.renderData(columns, data)}</tbody>
          </>
        )}
      </TableWrapper>
    );
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
  },
  showLoader: false,
};

export default Table;
