import 'react-dates/initialize';
import React, { ReactNode, SyntheticEvent, Component, ChangeEvent } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { IoIosCheckmark, IoIosClose } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import colors from '../../theme/colors';
import Input from '../Input';
import Grid from '../Grid';
import Loader from '../Loader';
import { AnalyticsProps } from '../../analytics';
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

interface StyledReactIconProps {
  color: string;
}

export const StyledReactIcon = styled(IoIosCheckmark)<StyledReactIconProps>`
  width: 2.2rem;
  height: 2.2rem;
  color: ${({ color }) => color};
  cursor: pointer;
`;

const StyledIcon = styled(FaRegEdit)`
  font-size: 1.3rem;
  cursor: pointer;
  align-self: flex-end;
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
  editable?: boolean;
  fn?: () => void;
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
interface TableButtonProps extends AnalyticsProps {
  label: string;
  icon?: string | ReactNode;
  onClick: (e: SyntheticEvent) => any;
  type: string;
}

type Props<T = Data> = {
  columns: Array<Column> | any;
  data: Array<Data>;
  className?: string;
  style?: CSSProperties;
  options: TableOptions<T>;
  showLoader?: boolean;
  renderEmptyTable?: boolean;
  tableButton?: Array<TableButtonProps>;
  actionsRowTitle?: string;
  editableId?: string | number;
  editableBy?: string;
} & AnalyticsProps;

type State = {
  selected: {
    [key in number | string]: any;
  };
  selectedAll: boolean;
  inputStates: any;
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
    tableButton: [],
    actionsRowTitle: 'Actions',
  };

  state: State = {
    selected: {},
    selectedAll: false,
    inputStates: {},
  };

  componentDidMount() {
    const { data, editableBy = '', editableId = '' } = this.props;
    const { inputStates } = this.state;
    console.log(data);
    console.log(editableBy, editableId);
    if (editableBy) {
      const inputs = data.reduce(
        (obj, item) => ({ ...obj, [item[editableId]]: item[editableBy] }),
        {}
      );
      this.setState({ inputStates: inputs }, () => console.log(inputStates));
    }
  }

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

  renderEditIcons = (field: string, id: string, fn: any) => {
    const { inputStates } = this.state;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
        inputStates: {
          ...inputStates,
          [id]: e.target.value,
        },
      });
    };
    console.log(inputStates);
    if (inputStates.currentlyModifiyng === id) {
      return (
        <>
          <Input
            id={id}
            onChange={handleChange}
            placeholder=""
            type="input"
            value={inputStates[id]}
          />
          <StyledReactIcon
            data-testid="save"
            color={colors.green}
            onClick={() => {
              fn?.();
              this.setState({
                inputStates: {
                  ...inputStates,
                  currentlyModifiyng: null,
                },
              });
            }}
          />
          <StyledReactIcon
            data-testid="cancel"
            as={IoIosClose}
            color={colors.red}
            onClick={() =>
              this.setState({
                inputStates: {
                  ...inputStates,
                  currentlyModifiyng: null,
                },
              })
            }
          />
        </>
      );
    }
    return (
      <>
        {field}
        <StyledIcon
          onClick={() =>
            this.setState({
              inputStates: {
                ...inputStates,
                currentlyModifiyng: id,
              },
            })
          }
        />
      </>
    );
  };

  renderData = (columns: Array<Column>, data: Array<Data>) => {
    const newColumns = this.generateColumns(columns);
    const newData = this.generateRows(data);

    const { tableButton, editableId = 0 } = this.props;

    return newData.map((row) => (
      <TableRow key={row.id} noBottomBorder={!tableButton}>
        {newColumns.map((column: Column, index: number) => {
          const cond = column.editable
            ? this.renderEditIcons(row[column.key], row[editableId], column.fn)
            : row[column.key];
          return (
            <TableCell
              key={index}
              isActionsCell={column.key === 'actions'}
              style={column.style || {}}
            >
              {column.render ? column.render({ value: row[column.key], rowValues: row }) : cond}
            </TableCell>
          );
        })}
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
          {tableButton?.map((button: TableButtonProps) => (
            <ButtonTableRow key={button.label}>
              <TableCell colSpan={columnContent.length}>
                <TableButton
                  tag={button.tag || ''}
                  modifiers={['buttonLink']}
                  fullWidth
                  fullHeight
                  onClick={button.onClick}
                  icon={button.icon}
                  iconPosition="left"
                  type={button.type}
                >
                  {button.label}
                </TableButton>
              </TableCell>
            </ButtonTableRow>
          ))}
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
