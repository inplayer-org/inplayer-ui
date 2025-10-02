import 'react-dates/initialize';
import React, { ReactNode, SyntheticEvent, Component } from 'react';
import { CSSProperties } from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { Field, Formik, FormikProps } from 'formik';
import { ObjectSchema } from 'yup';
import ErrorField from '../Input/ErrorField';
import FormikInput from '../Input/FormikInput';
import colors from '../../theme/colors';
import Grid from '../Grid';
import Loader from '../Loader';
import {
  AnalyticsComponent,
  AnalyticsProps,
  AnalyticsEvents,
  AnalyticsComponentType,
} from '../../analytics';

// styled components
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
  StyledReactIcon,
  StyledIcon,
  StyledForm,
  FormWrapper,
  ItemEntriesTypography,
} from './styled';

interface Data {
  id: string;
  [row: string]: any;
}

type Render = {
  value: string;
  rowValues: Data;
};

export interface ColumnFunctionProps {
  value: string;
  currentValue: string;
  id: string;
}

export interface EditableFields {
  fn: (props: ColumnFunctionProps) => void;
  validationSchema: ObjectSchema<any>;
}

export type Column = {
  title: string;
  key: string;
  render?: ({ value, rowValues }: Render) => ReactNode;
  style?: CSSProperties;
  alignRight?: any;
  editable?: EditableFields;
};

interface FormValeus {
  rowField: string;
}
interface EditIconsProps {
  field: string;
  rowId: string;
  fn?: ({ value, currentValue, id }: ColumnFunctionProps) => any;
  validationSchema?: ObjectSchema<any>;
}

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
  editableId?: string;
  hasItemEntries?: boolean;
  totalItems?: number;
} & AnalyticsProps;

type State = {
  selected: {
    [key in number | string]: any;
  };
  selectedAll: boolean;
  currentlyModifyingRowId?: string | null;
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
    hasItemEntries: false,
  };

  state: State = {
    selected: {},
    selectedAll: false,
    currentlyModifyingRowId: null,
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

  renderEditIcons = ({ field, rowId, fn, validationSchema }: EditIconsProps) => {
    const { currentlyModifyingRowId } = this.state;
    if (currentlyModifyingRowId === rowId) {
      return (
        <Formik
          initialValues={{ rowField: field }}
          onSubmit={({ rowField }) => {
            this.setState({
              currentlyModifyingRowId: null,
            });
            fn?.({ value: field, currentValue: rowField, id: rowId });
          }}
          validationSchema={validationSchema}
        >
          {({ isValid, values: { rowField } }: FormikProps<FormValeus>) => (
            <StyledForm>
              <AnalyticsComponent>
                {({ pages, tracker, merchantId, ip }) => (
                  <FormWrapper>
                    <Field
                      tag="editable_text_input"
                      type="text"
                      name="rowField"
                      component={FormikInput}
                    />
                    <StyledReactIcon
                      data-testid="save"
                      color={colors.green}
                      onClick={() => {
                        tracker.track({
                          event: AnalyticsEvents.CLICK,
                          type: AnalyticsComponentType.ICON,
                          tag: 'icon_save',
                          pages,
                          merchantId,
                          ip,
                        });
                        if (isValid) {
                          fn?.({ value: field, currentValue: rowField, id: rowId });
                          this.setState({
                            currentlyModifyingRowId: null,
                          });
                        }
                      }}
                    />
                    <StyledReactIcon
                      data-testid="cancel"
                      as={IoIosClose}
                      color={colors.red}
                      onClick={() => {
                        tracker.track({
                          event: AnalyticsEvents.CLICK,
                          type: AnalyticsComponentType.ICON,
                          tag: 'icon_cancel',
                          pages,
                          merchantId,
                          ip,
                        });
                        this.setState({
                          currentlyModifyingRowId: null,
                        });
                      }}
                    />
                  </FormWrapper>
                )}
              </AnalyticsComponent>
              <ErrorField name="rowField" />
            </StyledForm>
          )}
        </Formik>
      );
    }
    return (
      <AnalyticsComponent>
        {({ pages, tracker, merchantId, ip }) => (
          <>
            {field}
            <StyledIcon
              onClick={() => {
                tracker.track({
                  event: AnalyticsEvents.CLICK,
                  type: AnalyticsComponentType.ICON,
                  tag: 'icon_edit',
                  pages,
                  merchantId,
                  ip,
                });
                this.setState({
                  currentlyModifyingRowId: rowId,
                });
              }}
            />
          </>
        )}
      </AnalyticsComponent>
    );
  };

  renderData = (columns: Array<Column>, data: Array<Data>) => {
    const newColumns = this.generateColumns(columns);
    const newData = this.generateRows(data);

    const { tableButton, editableId = '0' } = this.props;

    return newData.map((row) => (
      <TableRow key={row.id} noBottomBorder={!tableButton}>
        {newColumns.map(({ render, key, editable, style }: Column, index: number) => {
          const isEditable = editable
            ? this.renderEditIcons({
                field: row[key],
                rowId: row[editableId],
                fn: editable.fn,
                validationSchema: editable.validationSchema,
              })
            : row[key];

          const hasRenderFn = render ? render({ value: row[key], rowValues: row }) : isEditable;

          const hasRenderAndEditable =
            render && editable
              ? this.renderEditIcons({
                  field: render({ value: row[key], rowValues: row }) as string,
                  rowId: row[editableId],
                  fn: editable.fn,
                  validationSchema: editable.validationSchema,
                })
              : hasRenderFn;

          return (
            <TableCell
              isEditableCell={!!editable}
              key={index}
              isActionsCell={key === 'actions'}
              style={style || {}}
            >
              {hasRenderAndEditable}
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
      hasItemEntries,
      totalItems,
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
        {hasItemEntries && (
          <ItemEntriesTypography>
            Showing 1 - {totalItems} of {totalItems} items
          </ItemEntriesTypography>
        )}
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
