// @flow
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  background: #fff;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  color: #a0a3aa;
  box-sizing: border-box;
  border: 1px solid #d7dde5;
  border-radius: 3px;
  position: relative;
  overflow-x: hidden;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #d7dde5;
  width: 100%;
`;

const TableCell = styled.td`
  font-size: 16px;
  padding: 7px 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: left;
  max-width: 450px;
`;

const TableHeaderCell = styled.th`
  padding: 8px 1%;
  font-weight: 300;
  font-size: 14px;
  text-align: left;
  max-width: 450px;
`;

type Props = {
  columns: Array,
  data: Array,
  className?: String,
  style?: Object,
};

class Table extends React.Component<Props> {
  renderRows = columns => columns.map(column => <TableHeaderCell>{column.title}</TableHeaderCell>);

  renderData = (columns, data) =>
    data.map(row => (
      <TableRow>
        {columns.map(column => (
          <TableCell>{column.render ? column.render(row[column.key]) : row[column.key]}</TableCell>
        ))}
      </TableRow>
    ));

  render() {
    const { columns, data, className, style } = this.props;
    return (
      <TableWrapper className={className} style={style}>
        <thead>
          <TableRow>{this.renderRows(columns)}</TableRow>
        </thead>
        <tbody>{this.renderData(columns, data)}</tbody>
      </TableWrapper>
    );
  }
}

Table.defaultProps = {
  className: '',
  style: {},
};

export default Table;
