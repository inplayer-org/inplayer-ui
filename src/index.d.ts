import {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  ReactNodeArray,
  ReactElement,
  Component,
  SyntheticEvent,
  ButtonHTMLAttributes,
  HTMLAttributes,
  AllHTMLAttributes,
  ChangeEvent,
  ForwardRefExoticComponent,
  Ref,
} from 'react';
import {
  StyledComponent,
  ThemeProviderComponent,
} from 'styled-components';
import moment, { Moment } from 'moment';
import { FocusedInputShape } from 'react-dates';

export interface ContainerProps {
  className?: string,
  columns?: number | string,
  gap?: string,
  columnGap?: string,
  rowGap?: string,
  height?: string,
  minRowHeight?: string,
  flow?: string,
  rows?: number | string,
  areas?: Array<string>,
  justifyContent?: string,
  alignContent?: string
}

export interface CellProps {
  className?: string;
  width?: number;
  height?: number;
  top?: number | string;
  left?: number | string;
  middle?: boolean;
  center?: boolean;
  area?: string;
}

interface IGrid {
  Container: StyledComponent<'div', Theme, ContainerProps>;
  Cell: StyledComponent<'div', Theme, CellProps>;
}

export declare const Grid: IGrid;

export interface CheckboxProps {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
}

export declare const Checkbox: FunctionComponent<CheckboxProps>;

export interface MenuItem {
  title: string;
  href?: string;
  onClick?: (e: SyntheticEvent<HTMLElement>) => any;
  image?: string;
  smallSize?: boolean;
}

export interface UserMenuDropdownProps {
  menuItems: Array<MenuItem>;
  actionItem?: MenuItem;
}

export interface UserMenuProps extends UserMenuDropdownProps {
  image?: ReactElement<any> | string;
  className?: string;
  style?: CSSProperties;
  menuTitle?: string,
}

interface UserMenuState {
  open: boolean;
}

export declare class UserMenu extends Component<UserMenuProps, UserMenuState> {
  toggleMenuOpen: () => any;
}

export interface HeaderProps {
  title?: string;
  userMenuProps?: UserMenuProps;
  additionalUserMenuProps?: UserMenuProps | boolean;
  tabNavigationProps?: TabNavigationProps;
  className?: string;
  style?: CSSProperties;
}

export declare const Header: FunctionComponent<HeaderProps>;

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => any;
  children: ReactNode;
  title: string;
  className?: string;
  style?: CSSProperties;
}

export declare const Modal: FunctionComponent<ModalProps>;

export interface NavbarProps {
  children: ReactNode;
  logo?: ReactElement<any> | string;
  className?: string;
  style?: CSSProperties;
}

interface NavbarState {
  open: boolean;
}

interface Navbar$MenuItemProps {
  active?: boolean;
  icon?: string | ReactNode;
  onClick?: (e: SyntheticEvent<HTMLDivElement>) => any;
  children?: ReactNode;
}

export declare class Navbar extends Component<NavbarProps, NavbarState> {
  static MenuItem: FunctionComponent<Navbar$MenuItemProps>;
  toggleOpen: () => any;
}

export type NavbarMenuItemProps = Navbar$MenuItemProps;

export type NoteType = 'informative' | 'success' | 'warning' | 'danger';

export interface NoteProps {
  title: string;
  text: string;
  icon: string;
  type: NoteType;
  className?: string;
  style?: CSSProperties;
}

export declare const Note: FunctionComponent<NoteProps>;

export interface RadioProps {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  className?: string;
  style?: CSSProperties;
}

export declare const Radio: FunctionComponent<RadioProps>;

export interface TableColumn<T extends TableRowData> {
  title: string;
  key: string;
  render?: (props: TableColumn$RenderProps<T>) => ReactNode;
}

export interface TableRowData extends Object {
  id: number | string;
}

interface TableColumn$RenderProps<T extends TableRowData, V = any> {
  value: V;
  rowValues: T;
}

export interface RowAction<T extends TableRowData> {
  icon?: string;
  onClick?: (id: number | string) => any;
  render?: (props: { row: T }) => ReactNode;
}

interface RowActionsRender<T extends TableRowData> {
  (prop: { row: T }): ReactNode;
}

export type RowActions<T extends TableRowData> = Array<RowAction<T>> | RowActionsRender<T>;

export interface TableOptions<T extends TableRowData> {
  rowSelection: {
    active: boolean;
    action: () => any;
  };
  rowActions: RowActions<T>;
}

export interface TableProps<TableData extends TableRowData = TableRowData> {
  columns: Array<TableColumn<TableData>>;
  data: Array<TableData>;
  showLoader?: boolean;
  className?: string;
  style?: CSSProperties;
  options?: Partial<TableOptions<TableData>>;
  tableButton?: {
    label: string;
    icon?: string | Node | JSX.Element;
    onClick: (e: SyntheticEvent) => any;
    type: string;
  },
}

interface TableState {
  selected: {
    [s: string]: boolean;
  };
  selectedAll: boolean;
}

export declare class Table<TableData extends TableRowData> extends Component<TableProps<TableData>, TableState> {
  toggleRow: (id: number) => () => any;
  toggleSelectAll: () => any;
  generateRows: (data: Array<TableData>) => ReactNodeArray;
  generateColumns: (data: Array<TableColumn<TableData>>) => ReactNodeArray;
  renderColumns: (data: Array<TableColumn<TableData>>) => ReactNodeArray;
  renderRows: (data: Array<TableData>) => ReactNodeArray;
}
interface NavigationTab {
  title: string;
}

export interface TabContentProps {
  icon?: string;
  iconPosition?: string;
  iconModifiers?: Array<string>;
}

export interface TabNavigationProps<T> extends DivHTMLAttributes<HTMLDivElement>, TabContentProps {
  tabs: Array<NavigationTab>;
  onTabClick: (index: number) => any;
  selectedTabIndex: number;
  className?: string;
  style?: CSSProperties;
}

export declare var TabNavigation: FunctionComponent<TabNavigationProps>;

interface TabInfo {
  name: string;
}

interface TabsProps {
  tabs: Array<TabInfo>;
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  className?: string;
  style?: CSSProperties;
}

export declare const Tabs: FunctionComponent<TabsProps>;

export interface AccordionPanel {
  label: string;
  icon?: string;
  renderContent: () => ReactNode;
  footerLink: string;
  buttonText: string;
  accordionAction: () => any;
}

export interface AccordionProps {
  panels: Array<AccordionPanel>;
  contentHeight: string;
}

export interface AccordionState {
  [s: string]: boolean;
}

export declare class Accordion extends Component<AccordionProps, AccordionState> {
  toggleOpen: (name: string) => (e: SyntheticEvent<HTMLElement>) => void;
  toggleClose: (name: string, accordionAction: () => any) => (saveOnClose: boolean) => any;
}

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonContentProps {
  icon?: string | ReactNode;
  iconPosition?: string;
  iconModifiers?: Array<IconModifier>;
}

export type ButtonModifier =
  | 'hoverInfo'
  | 'hoverDanger'
  | 'hoverWarning'
  | 'hoverSuccess'
  | 'buttonPrimary'
  | 'buttonInfo'
  | 'buttonDanger'
  | 'buttonSuccess'
  | 'buttonLink';

export interface ButtonProps<T> extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonContentProps {
  buttonModifiers?: Array<ButtonModifier>;
  size?: ButtonSize;
  style?: CSSProperties;
  className?: string;
  as?: ComponentType<T>;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export declare class Button<T = {}> extends Component<T & ButtonProps<T>> { }

export interface CardProps {
  title?: string;
  titleVariant?: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export declare const Card: FunctionComponent<CardProps>;

interface DayPicker$OnDateChange$Arguments {
  date: Moment;
}

export type DayPicker$OnDateChange = (values: DayPicker$OnDateChange$Arguments) => any;

export type DayPicker$OnFocusChange = (focusedInput: boolean) => any;

export interface DayPickerProps {
  isOutsideRange?: (day: number) => any,
  onDateChange: (date: Moment) => any,
  onFocusChange: (focused: any) => any,
  focused: boolean,
  date: Moment,
  style?: Object,
  className?: string,
  numberOfMonths?: number,
}

export declare const DayPicker: FunctionComponent<DayPickerProps>;

interface DatePicker$OnDateChange$Arguments {
  startDate: Moment;
  endDate: Moment;
}

export type DatePicker$OnDateChange = (values: DatePicker$OnDateChange$Arguments) => any;

export type DatePicker$OnFocusChange = (focusedInput: FocusedInputShape | null) => any;

export interface DatePickerProps {
  startDate: Moment;
  endDate?: Moment;
  startDateId?: string;
  endDateId?: string;
  calendarInfo?: boolean;
  isOutsideRange?: () => boolean;
  onDateChange: DatePicker$OnDateChange;
  style?: CSSProperties;
  className?: string;
  onFocusChange: DatePicker$OnFocusChange;
  focusedInput: FocusedInputShape | null;
  minimumNights?: number;
}

interface DatePickerState {
  focusedInput?: string;
}

declare const THIS_WEEK = 'this week';
declare const LAST_WEEK = 'last week';
declare const THIS_MONTH = 'this month';
declare const LAST_MONTH = 'last month';
declare const THIS_YEAR = 'this year';

export type Period = 'this week' | 'last week' | 'this month' | 'last month' | 'this year';

export declare class DatePicker extends Component<DatePickerProps, DatePickerState> {
  onFocusedInputChange: (focusedInput: string) => void;
  handleRangeClick: (activePeriod: Period) => void;
  renderDatePresets: () => ReactNode;
}

export interface Option {
  value: string;
  displayName: string;
}

export interface DefaultOption {
  displayName: string;
  disabled?: boolean;
}

export type DropdownModifier = 'fontSizeExtraSmall' | 'fontSizeSmall' | 'fontSizeMedium' | 'fontSizeLarge';

export interface DropdownProps extends HTMLAttributes<HTMLSelectElement> {
  value: string;
  onChange?: (value: string) => any;
  color?: string;
  options: Array<Option>;
  className?: string;
  style?: CSSProperties;
  modifiers?: Array<DropdownModifier>;
  disabled?: boolean;
  defaultOption?: DefaultOption,
}

export declare const Dropdown: FunctionComponent<DropdownProps>;

export type IconModifier = 'statusColorPrimary' | 'statusColorInfo' | 'statusColorWarning' | 'statusColorSuccess' | 'statusColorDanger';

export interface IconProps {
  name: string;
  modifiers?: Array<IconModifier>;
  color?: string;
}

export declare const Icon: StyledComponent<'span', Theme, IconProps>;

export type InPlayerIconProps = IconProps;

export declare const InPlayerIcon: StyledComponent<'i', Theme, InPlayerIconProps>;

export type LabelModifier = 'fontSizeExtraSmall' | 'fontSizeSmall' | 'fontSizeMedium' | 'fontSizeLarge';

export interface LabelProps {
  disabled?: boolean;
  modifiers?: Array<LabelModifier>;
}

export declare const Label: StyledComponent<'label', Theme, LabelProps>;

export interface LoaderProps {
  color?: string;
}

export declare const Loader: StyledComponent<'div', Theme, LoaderProps>;

export type NotificationVariant = 'success' | 'danger' | 'warning';

interface NotificationProps {
  title: string;
  content: string;
  variant?: NotificationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

interface INotification extends FunctionComponent<NotificationProps> {
  create(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  success(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  warning(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  danger(props: NotificationProps, parentDiv?: HTMLDivElement): void;
}

export declare const Notification: INotification;

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  previousLabel: string;
  nextLabel: string;
  breakLabel: string;
  onPageChange: (data: { selected: number }) => any;
  breakClassName?: string;
  initialPage?: number;
  disableInitialCallback?: boolean;
  containerClassName?: string;
  pageClassName?: string;
  pageLinkClassName?: string;
  activeClassName?: string;
  activeLinkClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
  previousLinkClassName?: string;
  nextLinkClassName?: string;
  disabledClassName?: string;
  hrefBuilder?: () => string;
  extraAriaContext?: string;
  style?: CSSProperties;
  className?: string;
}

export declare const Pagination: FunctionComponent<PaginationProps>;

export type PillLabelModifier = 'primary' | 'info' | 'success' | 'danger' | 'warning';

export type PillLabelSize = 'xs' | 'sm' | 'md' | 'lg';

interface PillLabelProps {
  modifiers?: Array<PillLabelModifier>;
  size?: PillLabelSize;
}

export declare const PillLabel: StyledComponent<'span', Theme, PillLabelProps>;

export type ProgressType = 'circle' | 'line';

export interface ProgressProps {
  type?: ProgressType;
  strokeWidth?: number;
  strokeColor?: string;
  trailWidth?: number;
  trailColor?: string;
  strokeLinecap?: string;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  percent?: number;
  gapDegree?: number;
  gapPosition?: string;
}

export declare const Progress: FunctionComponent<ProgressProps>;

export interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => any;
  className?: string;
  style?: CSSProperties;
}

export declare const Switch: FunctionComponent<SwitchProps>;

export declare const TextArea: StyledComponent<'input', Theme>;

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  size?: InputSize;
}

export declare const Input: ForwardRefExoticComponent<InputProps>;

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographyModifier = 'textPrimary' | 'textDanger' | 'textSuccess' | 'textWarning';

export interface TypographyProps {
  variant: TypographyVariant;
  description?: boolean;
  children: ReactNode;
  className?: string;
  modifiers?: Array<TypographyModifier>;
  color?: string;
  style?: CSSProperties;
}

export declare const Typography: FunctionComponent<TypographyProps>;

export interface Theme {
  palette: {
    primary: {
      main: string;
      light?: string;
      dark?: string;
    };
    secondary: {
      main: string;
      light?: string;
      dark?: string;
    };
    text: {
      main: string;
      light?: string;
      disabled?: string;
    };
  };
  dimensions: {
    baseGrid: number;
    borderRadius: string;
  };
  font: {
    primary: string;
    primaryFallback: string;
    weights: {
      thin?: number;
      light?: number;
      normal?: number;
      semiBold?: number;
      bold?: number;
    };
    sizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  padding: {
    sizes: {
      small: string;
      medium: string;
    };
  };
}

export interface ThemeWrapperProps {
  children: ReactNode;
  theme?: Theme;
  withProvider?: ThemeProviderComponent<Theme>;
}
/**
 * A component which adds the theme to the library components.
 * Theme prop is optional - it will use the default theme if no theme is provided.
 * The ThemeProvider component from your styled-components version must be provided as a prop to withProvider,
 * to inject the theme into your styled-components as well.
 */
export declare const ThemeWrapper: FunctionComponent<ThemeWrapperProps>;

interface IColors {
  black: '#000';
  white: '#fff';
  blue: '#286090';
  darkBlue: '#253a66';
  mediumBlue: '#010185';
  midnightBlue: '#272B38';
  gray: '#d7dde5';
  lightGray: '#F6F8FB';
  darkGray: '#b9c1cb';
  neutralGray: '#f6f8fb';
  fontDarkGray: '#44494e';
  fontGray: '#a0a3aa';
  fontLightGray: '#c8ccd4';
  lightSkyBlue: '#97CCF6';
  skyBlue: '#07AAE6';
  deepSkyBlue: '#0a8cd2';
  navy: '#2A4D8E';
  lemon: '#fcf3c0';
  mint: '#c8e8de';
  red: '#f26f59';
  pink: '#fcc8be';
  paleRed: '#f9ece8';
  yellow: '#f4ca19';
  paleYellow: '#fffcee';
  green: '#5dc6a3';
  paleGreen: '#e4f9f2';
  pale: '#f0f3f6';
}

export declare const Colors: IColors;

export type Placement = 'left' | 'right' | 'top' | 'bottom';

export type FadeEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export type TooltipBehavior = 'hover' | 'click';

export interface TooltipProps {
  behavior?: TooltipBehavior,
  durationOnClick?: number,
  arrowWidth?: number;
  background?: string;
  border?: string;
  children?: ReactNode;
  color?: string;
  content: ReactNode;
  className?: string;
  style?: string;
  fadeDuration?: number;
  fadeEasing?: FadeEasing;
  fixed?: boolean;
  fontFamily?: string;
  fontSize?: string;
  offset?: number;
  padding?: number;
  placement?: Placement;
  radius?: number;
  zIndex?: number;
}

interface TooltipState {
  isOpen: boolean;
}

export declare class Tooltip extends Component<TooltipProps, TooltipState> {
  handleMouseEnter: () => any;
  handleMouseLeave: () => any;
}

