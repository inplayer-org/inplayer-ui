// @flow
import React from 'react';
import styled from 'styled-components';

import colors from 'config/colors';
import { uiColors, fontSizes, fontWeights } from 'utils';
import Checkbox from 'components/Checkbox';
import Icon from 'elements/Icon';

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
  activeAction: Object,
  activeCheckbox: boolean,
};

class Table extends React.Component<Props> {
  renderColumns = (columns: Array<Data>, activeCheckbox, activeAction) => {
    if (activeCheckbox) {
      const rowCheckbox = {
        title: (
          <Checkbox
            className="checkbox"
            id="checkbox"
            onChange={e => {
              console.log(e);
            }}
          />
        ),
        key: 'check',
      };

      columns.unshift(rowCheckbox);
    }

    if (activeAction) {
      const rowAction = {
        title: activeAction.title,
        key: 'edit',
        render: text => <a href={activeAction.href}>{text}</a>,
      };
      columns.push(rowAction);
    }

    return columns.map(column => <TableHeaderCell>{column.title}</TableHeaderCell>);
  };

  renderData = (columns: Array<Columns>, data: Array<Data>, activeCheckbox, activeAction) => {
    if (activeCheckbox) {
      const cellCheckbox = (
        <Checkbox className="checkbox" id="checkbox" onChange={e => console.log(e)} />
      );
      data.forEach(dataCell => {
        dataCell.check = cellCheckbox;
      });
    }

    if (activeAction) {
      const cellAction = <Icon name={activeAction.icon} className="icon action" />;
      data.forEach(dataRow => {
        dataRow.edit = cellAction;
      });
    }

    return data.map((row, i) => (
      <TableRow key={i}>
        {columns.map((column, index) => (
          <TableCell key={index}>
            {column.render ? column.render(row[column.key]) : row[column.key]}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  render() {
    const { columns, data, className, style, activeCheckbox, activeAction } = this.props;
    return (
      <TableWrapper className={className} style={style}>
        <thead>
          <TableHeadRow>{this.renderColumns(columns, activeCheckbox, activeAction)}</TableHeadRow>
        </thead>
        <tbody>{this.renderData(columns, data, activeCheckbox, activeAction)}</tbody>
      </TableWrapper>
    );
  }
}

Table.defaultProps = {
  className: '',
  style: {},
};

export default Table;
