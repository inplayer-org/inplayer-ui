// @flow
import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';
import Checkbox from 'components/Checkbox';

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

type Columns = {
  title: string,
  key: string,
};

type Data = {};

type Props = {
  columns: Array<Columns>,
  data: Array<Data>,
  className?: String,
  style?: Object,
  rowSelection?: boolean,
};

class Table extends React.Component<Props> {
  state = {
    selected: {},
    globalSelected: false,
  };

  toggleRow = id => () => {
    const { selected } = this.state;

    const isSelected = !selected[id];

    const newSelected = {
      ...selected,
      [id]: isSelected,
    };

    this.setState(({ globalSelected }) => ({
      selected: newSelected,
      globalSelected: !isSelected ? false : globalSelected,
    }));
  };

  toggleSelectAll = () => {
    const { globalSelected } = this.state;
    const { data } = this.props;

    const selected = data.reduce((acc, current) => ({ ...acc, [current.id]: !globalSelected }), {});

    this.setState(({ globalSelected: prevGlobal }) => ({
      selected,
      globalSelected: !prevGlobal,
    }));
  };

  generateColumns = (columns: Array<Data>, rowSelection) => {
    const { globalSelected } = this.state;
    let newColumns = [...columns];
    if (rowSelection) {
      const rowCheckbox = {
        title: (
          <Checkbox
            checked={globalSelected}
            className="checkbox"
            id="toggleAll"
            onChange={this.toggleSelectAll}
          />
        ),
        key: 'check',
      };

      newColumns = [rowCheckbox, ...columns];
    }

    return newColumns;
  };

  renderColumns = (columns: Array<Data>, rowSelection) =>
    this.generateColumns(columns, rowSelection).map(column => (
      <TableHeaderCell>{column.title}</TableHeaderCell>
    ));

  renderData = (columns: Array<Columns>, data: Array<Data>, rowSelection) => {
    let newData = [...data];
    if (rowSelection) {
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

    const newColumns = this.generateColumns(columns, rowSelection);

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
    const { columns, data, className, style, rowSelection } = this.props;
    return (
      <TableWrapper className={className} style={style}>
        <thead>
          <TableHeadRow>{this.renderColumns(columns, rowSelection)}</TableHeadRow>
        </thead>
        <tbody>{this.renderData(columns, data, rowSelection)}</tbody>
      </TableWrapper>
    );
  }
}

Table.defaultProps = {
  className: '',
  style: {},
  rowSelection: false,
};

export default Table;
