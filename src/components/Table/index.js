// @flow
import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';
import Checkbox from 'components/Checkbox';
import Icon from 'elements/Icon/index';

const TableWrapper = styled.table`
  background: ${colors.white};
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  color: ${uiColors('text.light')};
  box-sizing: border-box;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  position: relative;
  overflow-x: hidden;
  font-weight: ${fontWeights('light')};

  .entryname {
    color: ${uiColors('text.main')};
  }

  .checkbox {
    label {
      top: -10px;
    }
  }
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

  .icon {
    margin-top: 4px;
    vertical-align: middle;
    color: ${colors.darkGray};
    line-height: 1;
    font-size: ${fontSizes('medium')};
    transition: ease all 500ms;
    position: relative;
    top: 0;
  }

  .action {
    &:hover {
      color: ${uiColors('text.main')};
    }
  }
`;

const TableCell = styled.td`
  font-size: ${fontSizes('medium')};
  padding: 7px 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: left;
  max-width: 450px;
`;

const TableHeaderCell = styled.th`
  padding: 8px 1%;
  font-weight: 300;
  font-size: ${fontSizes('small')};
  text-align: left;
  max-width: 450px;
`;

const ActionIcon = styled(Icon)`
  padding: 2px;
  cursor: pointer;
`;

type Columns = {
  title: string,
  key: string,
  render: Function,
};

type TableOptions = {
  rowSelection: {
    active: boolean,
    action: () => [],
  },
  rowActions: {
    icon: string,
    onClick: () => number,
  },
};

type Props = {
  columns: Array<Columns>,
  data: Array<Object>,
  className?: String,
  style?: Object,
  options?: TableOptions,
};

class Table extends React.Component<Props> {
  state = {
    selected: {},
    selectedAll: false,
  };

  toggleRow = id => () => {
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

  generateRows = (data, options: TableOptions) => {
    let newData = [...data];
    const {
      rowSelection: { active },
      rowActions,
    } = options;

    if (active) {
      const { selected } = this.state;

      newData = data.map(dataCell => ({
        ...dataCell,
        check: (
          <Checkbox
            id={dataCell.id}
            className="checkbox"
            checked={selected[dataCell.id]}
            onChange={this.toggleRow(dataCell.id)}
          />
        ),
      }));
    }

    if (rowActions) {
      newData.map(dataCell => {
        dataCell.actions = rowActions.map(action => (
          <ActionIcon name={action.icon} onClick={() => action.onClick(dataCell.id)} />
        ));
        return dataCell;
      });
    }

    return newData;
  };

  generateColumns = (columns: Array<Data>, options: TableOptions) => {
    const { selectedAll } = this.state;
    const {
      rowSelection: { active },
      rowActions,
    } = options;

    let newColumns = [...columns];

    if (active) {
      const rowCheckbox = {
        title: (
          <Checkbox
            checked={selectedAll}
            className="checkbox"
            id="toggleAll"
            onChange={this.toggleSelectAll}
          />
        ),
        key: 'check',
      };

      newColumns = [rowCheckbox, ...columns];
    }

    if (rowActions) {
      const actionsColumn = { title: 'Actions', key: 'actions' };
      newColumns = [...newColumns, actionsColumn];
    }

    return newColumns;
  };

  renderColumns = (columns: Array<Data>, options) =>
    this.generateColumns(columns, options).map(column => (
      <TableHeaderCell>{column.title}</TableHeaderCell>
    ));

  renderData = (columns: Array<Columns>, data: Array<Data>, options) => {
    const newColumns = this.generateColumns(columns, options);
    const newData = this.generateRows(data, options);

    return newData.map((row, i) => (
      <TableRow key={i}>
        {newColumns.map((column, index) => (
          <TableCell key={index}>
            {column.render ? column.render(row[column.key]) : row[column.key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  render() {
    const { columns, data, className, style, options } = this.props;
    return (
      <TableWrapper className={className} style={style}>
        <thead>
          <TableHeadRow>{this.renderColumns(columns, options)}</TableHeadRow>
        </thead>
        <tbody>{this.renderData(columns, data, options)}</tbody>
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
};

export default Table;
